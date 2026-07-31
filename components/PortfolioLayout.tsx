"use client";

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
  const sectionIds = navItems.map((item) => item.id);
  const { activeId, scrollToSection } = useScrollSpy(sectionIds);

  return (
    <>
      <BackgroundEffects />
      <CursorGlow />

      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        {/* Sidebar — sticky column on desktop */}
        <Sidebar activeId={activeId} onNavigate={scrollToSection} />

        {/* Scrollable content */}
        <div className="flex min-w-0 flex-1 flex-col">
          <MobileNav activeId={activeId} onNavigate={scrollToSection} />

          <main className="min-w-0 overflow-x-hidden">
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
    </>
  );
}
