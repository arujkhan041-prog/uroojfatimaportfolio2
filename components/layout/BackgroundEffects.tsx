"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Scene3DCanvas = dynamic(
  () =>
    import("@/components/layout/Scene3D").then((mod) => mod.Scene3DCanvas),
  { ssr: false }
);

function StaticBackgroundLayers() {
  return (
    <>
      <div className="absolute inset-0 bg-background" />
      <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-accent-blue/10 blur-[100px]" />
      <div className="absolute -right-32 top-1/2 h-[450px] w-[450px] rounded-full bg-accent-violet/10 blur-[110px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('/noise.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </>
  );
}

export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1023px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {!mounted && <StaticBackgroundLayers />}

      {mounted && !isMobile && (
        <div className="absolute inset-0">
          <Scene3DCanvas />
        </div>
      )}

      {mounted && isMobile && (
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 100%, rgba(99,102,241,0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 80% 20%, rgba(139,92,246,0.1) 0%, transparent 50%)
            `,
          }}
        />
      )}

      {/* Soft vignette — lighter on left for sidebar readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/70" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A0A0F_0%,transparent_28%,transparent_72%,#0A0A0F_100%)] opacity-80" />

      {mounted && (
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "url('/noise.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
      )}
    </div>
  );
}
