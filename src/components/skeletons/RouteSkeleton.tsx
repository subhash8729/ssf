import React from "react";
import HomeSkeleton from "./HomeSkeleton";
import AboutSkeleton from "./AboutSkeleton";
import DonateSkeleton from "./DonateSkeleton";
import ApplySkeleton from "./ApplySkeleton";
import StudentsSkeleton from "./StudentsSkeleton";
import MissionSkeleton from "./MissionSkeleton";
import ContactSkeleton from "./ContactSkeleton";
import GenericSkeleton from "./GenericSkeleton";

export function getRouteSkeleton(pathname: string): React.ReactNode {
  // Normalize pathname: remove hash, query params, trailing slashes
  const cleanPath = (pathname.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/").toLowerCase();

  switch (cleanPath) {
    case "/":
      return <HomeSkeleton />;
    case "/about":
      return <AboutSkeleton />;
    case "/donate":
      return <DonateSkeleton />;
    case "/apply":
      return <ApplySkeleton />;
    case "/students":
      return <StudentsSkeleton />;
    case "/mission":
      return <MissionSkeleton />;
    case "/contact":
      return <ContactSkeleton />;
    case "/privacy-policy":
    case "/terms":
    case "/disclaimer":
      return <GenericSkeleton />;
    default:
      if (cleanPath.startsWith("/about")) return <AboutSkeleton />;
      if (cleanPath.startsWith("/donate")) return <DonateSkeleton />;
      if (cleanPath.startsWith("/apply")) return <ApplySkeleton />;
      if (cleanPath.startsWith("/students")) return <StudentsSkeleton />;
      if (cleanPath.startsWith("/mission")) return <MissionSkeleton />;
      if (cleanPath.startsWith("/contact")) return <ContactSkeleton />;
      return <GenericSkeleton />;
  }
}
