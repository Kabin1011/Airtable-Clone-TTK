"use client";

import { useState, useRef } from "react";
import { uploadFile, deleteFile, isStorageAvailable } from "~/lib/supabase";

interface FileAttachment {
  url: string;
  path: string;
  name: string;
  size: number;
  type: string;
}

interface FileUploadProps {
  value: FileAttachment[] | null;
  onChange: (files: FileAttachment[]) => void;
  maxFiles?: number;
  maxSizePerFile?: number; // in bytes
}

export function FileUpload({
  value = [],
  onChange,
  maxFiles = 10,
  maxSizePerFile = 10 * 1024 * 1024, // 10MB
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const files = Array.isArray(value) ? value : [];

  // Check if storage is configured
  if (!isStorageAvailable()) {
    return (
      <div className="rounded border-2 border-dashed border-yellow-300 bg-yellow-50 p-3 text-sm">
        <div className="font-medium text-yellow-800">File attachments not configured</div>
        <div className="mt-1 text-xs text-yellow-700">
          To enable file uploads, add your Supabase credentials to .env:
          <ul className="ml-4 mt-1 list-disc">
            <li>NEXT_PUBLIC_SUPABASE_URL</li>
            <li>NEXT_PUBLIC_SUPABASE_ANON_KEY</li>
          </ul>
        </div>
      </div>
    );
  }

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length === 0) return;

    // Validation
    if (files.length + selectedFiles.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    const oversizedFile = selectedFiles.find((f) => f.size > maxSizePerFile);
    if (oversizedFile) {
      setError(`File "${oversizedFile.name}" exceeds ${maxSizePerFile / 1024 / 1024}MB limit`);
      return;
    }

    setError(null);
    setUploading(true);

    try {
      // Upload all files
      const uploadPromises = selectedFiles.map((file) => uploadFile(file));
      const uploadedFiles = await Promise.all(uploadPromises);

      // Add to existing files
      onChange([...files, ...uploadedFiles]);
    } catch (err) {
      console.error("Upload error:", err);
      setError(err instanceof Error ? err.message : "Failed to upload files");
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDelete = async (fileToDelete: FileAttachment) => {
    try {
      // Delete from storage
      await deleteFile(fileToDelete.path);

      // Remove from list
      onChange(files.filter((f) => f.path !== fileToDelete.path));
    } catch (err) {
      console.error("Delete error:", err);
      setError("Failed to delete file");
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return "🖼️";
    if (type.startsWith("video/")) return "🎥";
    if (type.startsWith("audio/")) return "🎵";
    if (type.includes("pdf")) return "📄";
    if (type.includes("word") || type.includes("document")) return "📝";
    if (type.includes("sheet") || type.includes("excel")) return "📊";
    return "📎";
  };

  return (
    <div className="space-y-2">
      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-1">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded bg-gray-50 p-2 text-xs"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <span>{getFileIcon(file.type)}</span>
                <a
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate text-blue-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {file.name}
                </a>
                <span className="text-gray-500">({formatFileSize(file.size)})</span>
              </div>
              <button
                onClick={() => handleDelete(file)}
                className="ml-2 text-gray-400 hover:text-red-600"
                type="button"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Upload Button */}
      {files.length < maxFiles && (
        <div>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            multiple
            className="hidden"
            disabled={uploading}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            type="button"
            className="w-full rounded border-2 border-dashed border-gray-300 px-3 py-2 text-sm text-gray-600 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-50"
          >
            {uploading ? "Uploading..." : `+ Add file${files.length > 0 ? "s" : ""}`}
          </button>
        </div>
      )}

      {/* Error Message */}
      {error && <div className="text-xs text-red-600">{error}</div>}

      {/* Help Text */}
      <div className="text-xs text-gray-500">
        Max {maxFiles} files, {maxSizePerFile / 1024 / 1024}MB each
      </div>
    </div>
  );
}
