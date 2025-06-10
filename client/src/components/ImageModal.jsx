import React from "react";

export default function ImageModal({ src, alt, createdAt, onClose }) {
  console.log("Modal image data:", { src, alt, createdAt });

  return (
    <div
      className="fixed inset-0 bg-white/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[80vh] bg-white rounded-lg shadow-xl overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[80vh] object-contain rounded"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-pink-50 bg-opacity-80 text-pink-700 px-3 py-2 text-xs font-medium rounded-b">
          {createdAt && (
            <p className="opacity-70">
              {new Date(createdAt).toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
