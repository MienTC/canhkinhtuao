import React from "react";
import { cn } from "@/lib/utils";
import { Image as ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  className?: string;
  text?: string;
  aspectRatio?: string;
}

export const PlaceholderImage = ({
  className,
  text = "Ảnh sản phẩm",
  aspectRatio = "aspect-video",
}: PlaceholderImageProps) => {
  return (
    <div
      className={cn(
        "bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 p-4 overflow-hidden",
        aspectRatio,
        className
      )}
    >
      <ImageIcon size={48} strokeWidth={1} className="mb-2 opacity-50" />
      <p className="text-sm font-medium uppercase tracking-wider">{text}</p>
    </div>
  );
};
