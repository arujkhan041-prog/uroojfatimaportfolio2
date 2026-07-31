"use client";

import Image from "next/image";
import { profile } from "@/data/profile";

interface ProfilePhotoProps {
  variant?: "about" | "home";
  className?: string;
}

export function ProfilePhoto({ variant = "about", className = "" }: ProfilePhotoProps) {
  const isHome = variant === "home";

  return (
    <div className={`relative ${className}`}>
      {/* Soft accent glow behind photo */}
      <div
        className={`absolute rounded-2xl bg-gradient-accent blur-2xl ${
          isHome
            ? "-inset-2 opacity-20"
            : "-inset-4 opacity-15"
        }`}
      />

      <div
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated shadow-glow ${
          isHome ? "aspect-[3/4] w-64" : "aspect-[3/4] w-full max-w-sm"
        }`}
      >
        <Image
          src={profile.photo}
          alt={`${profile.name} — Full-Stack Web Developer`}
          fill
          sizes={isHome ? "256px" : "(max-width: 768px) 100vw, 384px"}
          className="object-cover object-[center_20%] scale-[1.02]"
          priority={!isHome}
        />
        {/* Subtle vignette for polish */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
      </div>
    </div>
  );
}
