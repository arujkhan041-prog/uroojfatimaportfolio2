"use client";

import { useCallback, useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { BackgroundEffects } from "@/components/layout/BackgroundEffects";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { Footer } from "@/components/layout/Footer";
import { HomeSection } from "@/components/sections/HomeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { navItems } from "@/data/navigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export function PortfolioLayout() {
  const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(
    null
  );
  const sectionIds = navItems.map((item) => item.id);
  const { activeId, scrollToSection } = useScrollSpy(sectionIds, {
    scrollRoot: scrollContainer,
  });

  const scrollRef = useCallback((node: HTMLDivElement | null) => {
    setScrollContainer(node);
  }, []);

  return (
    <div className="relative min-h-screen bg-background lg:h-screen lg:overflow-hidden">
      <BackgroundEffects />
      <CursorGlow />

      <div className="relative z-10 flex min-h-screen flex-col lg:h-full lg:flex-row lg:overflow-hidden">
        <Sidebar activeId={activeId} onNavigate={scrollToSection} />

        <div
          ref={scrollRef}
          className="flex min-w-0 flex-1 flex-col lg:h-screen lg:overflow-x-hidden lg:overflow-y-auto"
        >
          <MobileNav activeId={activeId} onNavigate={scrollToSection} />

          <main className="relative w-full min-w-0 max-w-full">
            <HomeSection />
            <AboutSection />
            <ExperienceSection />
            <ServicesSection />
            <ProjectsSection />
            <SkillsSection />
            <TestimonialsSection />
            <ContactSection />
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
