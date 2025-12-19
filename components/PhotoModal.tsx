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
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-6xl w-full cursor-default"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>

        <div className="relative group max-w-4xl mx-auto">
          <div className={`relative overflow-hidden rounded-lg ${selectedPhoto.orientation === "portrait"
            ? "aspect-[3/4]"
            : "aspect-video"
            }`}>
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-between items-center text-xs md:text-sm font-mono text-gray-300">
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
