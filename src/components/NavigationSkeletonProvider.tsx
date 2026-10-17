"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useTransition,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { getRouteSkeleton } from "./skeletons/RouteSkeleton";
import { useLanguage } from "@/context/LanguageContext";

interface NavigationSkeletonContextValue {
  isNavigating: boolean;
  targetPath: string | null;
  startNavigation: (target: string) => void;
}

const NavigationSkeletonContext = createContext<NavigationSkeletonContextValue>({
  isNavigating: false,
  targetPath: null,
  startNavigation: () => {},
});

export const useNavigationSkeleton = () => useContext(NavigationSkeletonContext);

const MIN_SKELETON_DISPLAY_MS = 380;
const FADE_DURATION_MS = 150;

export default function NavigationSkeletonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();
  const [, startTransition] = useTransition();

  // Navigation loading state
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetPath, setTargetPath] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);

  // Initial load state
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isInitialFading, setIsInitialFading] = useState(false);

  const startTimeRef = useRef<number>(0);
  const cleanupTimerRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Start navigation explicitly
  const startNavigation = useCallback(
    (target: string) => {
      // Normalize target
      const url = new URL(target, window.location.origin);
      const cleanTarget = url.pathname;

      if (cleanTarget === pathname) {
        return;
      }

      if (cleanupTimerRef.current) clearTimeout(cleanupTimerRef.current);
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);

      startTimeRef.current = Date.now();
      setTargetPath(cleanTarget);
      setIsNavigating(true);
      setIsFading(false);

      // Perform the transition
      startTransition(() => {
        router.push(target);
      });
    },
    [pathname, router]
  );

  // Handle Initial Load
  useEffect(() => {
    startTimeRef.current = Date.now();
    const initialTimer = setTimeout(() => {
      setIsInitialFading(true);
      setTimeout(() => {
        setIsInitialLoad(false);
        setIsInitialFading(false);
      }, FADE_DURATION_MS);
    }, MIN_SKELETON_DISPLAY_MS);

    return () => clearTimeout(initialTimer);
  }, []);

  // Intercept all internal Link clicks in the capture phase
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Ignore if modified click (cmd, ctrl, shift, alt) or right click
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref) return;

      // Ignore external, anchor links, mailto, tel, downloads
      if (
        rawHref.startsWith("#") ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      try {
        const destUrl = new URL(rawHref, window.location.origin);
        // Ensure same origin
        if (destUrl.origin !== window.location.origin) return;

        const currentNormalized = pathname.replace(/\/+$/, "") || "/";
        const targetNormalized = destUrl.pathname.replace(/\/+$/, "") || "/";

        // Only trigger if destination is a different route
        if (targetNormalized !== currentNormalized) {
          if (cleanupTimerRef.current) clearTimeout(cleanupTimerRef.current);
          if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);

          startTimeRef.current = Date.now();
          setTargetPath(destUrl.pathname);
          setIsNavigating(true);
          setIsFading(false);
        }
      } catch {
        // invalid URL, ignore
      }
    };

    // Listen to browser Back / Forward history events
    const handlePopState = () => {
      const newPath = window.location.pathname;
      if (newPath !== pathname) {
        if (cleanupTimerRef.current) clearTimeout(cleanupTimerRef.current);
        if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);

        startTimeRef.current = Date.now();
        setTargetPath(newPath);
        setIsNavigating(true);
        setIsFading(false);
      }
    };

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname]);

  // When pathname changes (Next.js finished loading destination page)
  useEffect(() => {
    if (!isNavigating) return;

    const elapsed = Date.now() - startTimeRef.current;
    const remaining = Math.max(0, MIN_SKELETON_DISPLAY_MS - elapsed);

    fadeTimerRef.current = setTimeout(() => {
      setIsFading(true);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      cleanupTimerRef.current = setTimeout(() => {
        setIsNavigating(false);
        setIsFading(false);
        setTargetPath(null);
      }, FADE_DURATION_MS);
    }, remaining);

    return () => {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      if (cleanupTimerRef.current) clearTimeout(cleanupTimerRef.current);
    };
  }, [pathname, isNavigating]);

  // Determine what to show
  const showInitialSkeleton = isInitialLoad;
  const showNavSkeleton = isNavigating;
  const activeSkeletonPath = targetPath || pathname;

  return (
    <NavigationSkeletonContext.Provider
      value={{
        isNavigating,
        targetPath,
        startNavigation,
      }}
    >
      <div className="relative w-full min-h-[calc(100vh-80px)]">
        {/* Navigation Skeleton Overlay / Replacement */}
        {showNavSkeleton && (
          <div
            aria-busy="true"
            aria-live="polite"
            className={`w-full transition-opacity ease-out duration-150 ${
              isFading ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <span className="sr-only">{t.feedback.loadingText}</span>
            {getRouteSkeleton(activeSkeletonPath)}
          </div>
        )}

        {/* Initial Load Skeleton */}
        {showInitialSkeleton && !showNavSkeleton && (
          <div
            aria-busy="true"
            aria-live="polite"
            className={`w-full transition-opacity ease-out duration-150 ${
              isInitialFading ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <span className="sr-only">{t.feedback.loadingWebsite}</span>
            {getRouteSkeleton(pathname)}
          </div>
        )}

        {/* Actual Live Page Content */}
        <div
          className={`w-full transition-opacity ease-in duration-150 ${
            (showNavSkeleton && !isFading) || (showInitialSkeleton && !isInitialFading)
              ? "hidden"
              : "opacity-100 block"
          }`}
        >
          {children}
        </div>
      </div>
    </NavigationSkeletonContext.Provider>
  );
}
