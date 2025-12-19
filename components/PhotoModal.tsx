"use client";
import Image from "next/image";
import { X } from "lucide-react";
import type { PhotoMetadata } from "@/lib/data";

interface PhotoModalProps {
  selectedPhoto: PhotoMetadata | null;
  onClose: () => void;
}

export default function PhotoModal({ selectedPhoto, onClose }: PhotoModalProps) {
  if (!selectedPhoto) return null;

  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-[100dvw] h-[100dvh] bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-6xl w-full max-h-[90dvh] cursor-default flex flex-col items-center justify-center"
      >
        <button
          onClick={onClose}
          className="absolute -top-14 right-4 md:right-0 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>

        {/* The change starts here */}
        <div className="relative group mx-auto flex items-center justify-center">
          <div 
            className={`relative overflow-hidden rounded-lg shadow-2xl ${
              selectedPhoto.orientation === "portrait"
                ? "aspect-[3/4] h-[70dvh] w-auto" // Portrait: Fix height, let width be auto
                : "aspect-video w-full max-w-4xl"  // Landscape: Fix width
            }`}
          >
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              // Use object-cover here because the DIV now matches the image ratio perfectly
              className="object-cover" 
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
            
            {/* Metadata bar is now pinned to the visual edge of the photo */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-t border-white/10">
              <div className="flex justify-between items-center text-[10px] md:text-sm font-mono text-gray-200">
                <span>{selectedPhoto.aperture}</span>
                <span>{selectedPhoto.focalLength}</span>
                <span>{selectedPhoto.camera}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




