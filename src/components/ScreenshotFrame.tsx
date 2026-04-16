"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  variant?: "dark" | "light";
}

export default function ScreenshotFrame({ src, alt, caption, variant = "dark" }: Props) {
  const dk = variant === "dark";

  return (
    <div
      className={`rounded-2xl shadow-2xl border overflow-hidden ${
        dk
          ? "bg-white/[0.06] backdrop-blur-sm border-white/10 shadow-gold/10"
          : "bg-white border-gold/10 shadow-gold/10"
      }`}
    >
      {/* Chrome bar */}
      <div className={`flex items-center gap-2 px-4 py-2.5 ${dk ? "bg-white/[0.03]" : "bg-bg-light"}`}>
        <div className="w-2.5 h-2.5 rounded-full bg-coral/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-gold/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-teal/50" />
        {caption && (
          <span className={`ml-2 text-[10px] font-medium ${dk ? "text-white/25" : "text-text-muted/60"}`}>
            {caption}
          </span>
        )}
      </div>

      {/* Screenshot */}
      <div className="relative w-full">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto block"
          quality={90}
          priority
        />
      </div>
    </div>
  );
}
