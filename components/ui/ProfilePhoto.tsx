"use client";

import Image from "next/image";
import { profile } from "@/data/profile";

interface ProfilePhotoProps {
  className?: string;
}

export function ProfilePhoto({ className = "" }: ProfilePhotoProps) {
  return (
    <div className={`mx-auto w-full max-w-[280px] sm:max-w-[300px] ${className}`}>
      <div className="relative">
        <div className="absolute -inset-3 rounded-2xl bg-gradient-accent opacity-15 blur-2xl" />
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated shadow-glow">
          <Image
            src={profile.photo}
            alt={`${profile.name} — Full-Stack Web Developer`}
            width={400}
            height={500}
            className="block h-auto w-full object-cover object-[center_15%]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
