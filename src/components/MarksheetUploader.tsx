"use client";

import React, { useRef, useState } from "react";
import { UploadCloud, FileText, Image as ImageIcon, X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FileAttachmentData, MAX_FILE_SIZE_BYTES, ALLOWED_FILE_TYPES } from "@/lib/validation";
import { useLanguage } from "@/context/LanguageContext";

interface MarksheetUploaderProps {
  id: string;
  label: string;
  required?: boolean;
  file?: FileAttachmentData | null;
  error?: string;
  onFileSelect: (file: FileAttachmentData | null) => void;
  onErrorChange?: (err: string | null) => void;
  helperText?: string;
}

export default function MarksheetUploader({
  id,
  label,
  required = false,
  file,
  error,
  onFileSelect,
  onErrorChange,
  helperText,
}: MarksheetUploaderProps) {
  const { t } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const processFile = (selectedFile: File) => {
    // 1. Validate file size
    if (selectedFile.size > MAX_FILE_SIZE_BYTES) {
      const msg = "File size exceeds 5MB limit. Please upload a smaller file.";
      onErrorChange?.(msg);
      return;
    }

    // 2. Validate file type
    const nameLower = selectedFile.name.toLowerCase();
    const isValidExtension =
      nameLower.endsWith(".pdf") ||
      nameLower.endsWith(".jpg") ||
      nameLower.endsWith(".jpeg") ||
      nameLower.endsWith(".png") ||
      nameLower.endsWith(".webp");

    const isValidMime = ALLOWED_FILE_TYPES.includes(selectedFile.type);

    if (!isValidExtension && !isValidMime) {
      const msg = "Invalid file type. Please upload a PDF, JPG, PNG, or WEBP marksheet.";
      onErrorChange?.(msg);
      return;
    }

    onErrorChange?.(null);
    setIsProcessing(true);
    setUploadProgress(20);

    // Simulate smooth upload & validation progress
    const timer = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 85) {
          clearInterval(timer);
          return 85;
        }
        return prev + 25;
      });
    }, 80);

    const reader = new FileReader();
    reader.onload = (e) => {
      clearInterval(timer);
      setUploadProgress(100);

      setTimeout(() => {
        setIsProcessing(false);
        setUploadProgress(0);
        onFileSelect({
          name: selectedFile.name,
          size: selectedFile.size,
          type: selectedFile.type || (nameLower.endsWith(".pdf") ? "application/pdf" : "image/jpeg"),
          dataUrl: e.target?.result as string,
        });
      }, 150);
    };

    reader.onerror = () => {
      clearInterval(timer);
      setIsProcessing(false);
      setUploadProgress(0);
      onErrorChange?.("Failed to read file. Please try again.");
    };

    reader.readAsDataURL(selectedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      processFile(selected);
    }
    // reset input so user can re-select the same file name if needed
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      processFile(droppedFile);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileSelect(null);
    onErrorChange?.(null);
  };

  const isPdf = file?.type === "application/pdf" || file?.name?.toLowerCase().endsWith(".pdf");
  const isImage = file && !isPdf;

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-xs uppercase font-bold tracking-wider text-stone-700"
        >
          {label} {required && <span className="text-[#AA331D]">*</span>}
        </label>
        <span className="text-[11px] text-stone-500">{t.uploader.formatNotice}</span>
      </div>

      <input
        ref={inputRef}
        id={id}
        name={id}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Processing Loader State */}
      {isProcessing && (
        <div className="p-4 rounded-xl border border-[#F5D5CE] bg-[#FDF2F0]/40 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs text-stone-700">
            <span className="flex items-center gap-2 font-medium">
              <Loader2 className="w-4 h-4 text-[#AA331D] animate-spin" />
              {t.uploader.scanning}
            </span>
            <span className="font-semibold text-[#AA331D]">{uploadProgress}%</span>
          </div>
          <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#AA331D] transition-all duration-150 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Uploaded File Preview */}
      {!isProcessing && file && (
        <div className="p-3 sm:p-3.5 rounded-xl border border-emerald-300 bg-emerald-50/40 flex items-center justify-between gap-3 transition-all hover:bg-emerald-50/70">
          <div className="flex items-center gap-3 min-w-0">
            {isImage && file.dataUrl ? (
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-emerald-200 shrink-0 bg-white shadow-2xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={file.dataUrl}
                  alt={file.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-lg bg-[#AA331D]/10 text-[#AA331D] flex items-center justify-center shrink-0 border border-[#AA331D]/20">
                <FileText className="w-6 h-6 text-[#AA331D]" />
              </div>
            )}

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="text-xs sm:text-sm font-semibold text-stone-900 truncate">
                  {file.name}
                </p>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              </div>
              <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-0.5">
                <span>{formatFileSize(file.size)}</span>
                <span>•</span>
                <span className="text-emerald-700 font-medium">{t.uploader.verified}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="px-2.5 py-1 text-xs font-semibold text-[#AA331D] hover:bg-[#FDF2F0] rounded-md transition-colors cursor-pointer"
            >
              {t.uploader.replace}
            </button>
            <button
              type="button"
              onClick={handleRemove}
              className="p-1 rounded-md text-stone-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
              aria-label={t.uploader.remove}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Empty Upload Dropzone */}
      {!isProcessing && !file && (
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-4 sm:p-5 text-center cursor-pointer transition-all duration-200 ${
            isDragging
              ? "border-[#AA331D] bg-[#FDF2F0]/80 scale-[1.01]"
              : error
              ? "border-red-400 bg-red-50/20 hover:border-red-500"
              : "border-stone-300 hover:border-[#AA331D] hover:bg-[#FAF9F6]"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="w-9 h-9 rounded-full bg-[#FAF9F6] border border-stone-200 flex items-center justify-center text-[#AA331D] shadow-2xs">
              <UploadCloud className="w-5 h-5" />
            </div>
            <div className="text-xs text-stone-700">
              <span className="font-semibold text-[#AA331D] hover:underline">
                {t.uploader.clickToBrowse}
              </span>{" "}
              {t.uploader.orDragDrop}
            </div>
            <p className="text-[11px] text-stone-500">{helperText || t.uploader.formatNotice}</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
