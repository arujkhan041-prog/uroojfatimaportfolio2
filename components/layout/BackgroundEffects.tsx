"use client";

import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Scene3DCanvas = dynamic(
  () =>
    import("@/components/layout/Scene3D").then((mod) => mod.Scene3DCanvas),
  { ssr: false }
);

export function BackgroundEffects() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* 3D WebGL scene — desktop & tablet */}
      {!isMobile && <Scene3DCanvas />}

      {/* Lighter 3D-feel fallback for mobile (performance) */}
      {isMobile && (
        <>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(ellipse 80% 50% at 50% 100%, rgba(99,102,241,0.15) 0%, transparent 60%),
                radial-gradient(ellipse 60% 40% at 80% 20%, rgba(139,92,246,0.12) 0%, transparent 50%)
              `,
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 h-[40vh] w-[120%] -translate-x-1/2 opacity-20"
            style={{
              background: `
                linear-gradient(transparent, rgba(99,102,241,0.08)),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 49px,
                  rgba(99,102,241,0.15) 49px,
                  rgba(99,102,241,0.15) 50px
                )
              `,
              transform: "perspective(500px) rotateX(60deg) translateX(-50%)",
              transformOrigin: "center bottom",
            }}
          />
        </>
      )}

      {/* Depth vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />

      {/* Accent glow orbs */}
      <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-accent-blue/8 blur-[100px]" />
      <div className="absolute -right-32 top-1/2 h-[450px] w-[450px] rounded-full bg-accent-violet/8 blur-[110px]" />

      {/* Noise texture for premium depth */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('/noise.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}
