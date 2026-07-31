"use client";

import { useCallback, useEffect, useState } from "react";

export function useScrollSpy(
  sectionIds: string[],
  options?: {
    offset?: number;
    scrollRoot?: HTMLElement | null;
  }
) {
  const offset = options?.offset ?? 120;
  const scrollRoot = options?.scrollRoot ?? null;
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const [observerRoot, setObserverRoot] = useState<Element | null>(null);

  useEffect(() => {
    const updateRoot = () => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      setObserverRoot(isDesktop && scrollRoot ? scrollRoot : null);
    };

    updateRoot();
    window.addEventListener("resize", updateRoot);
    return () => window.removeEventListener("resize", updateRoot);
  }, [scrollRoot]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        setActiveId(visible[0].target.id);
      }
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(handleIntersect, {
        root: observerRoot,
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      });

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sectionIds, offset, observerRoot]);

  const scrollToSection = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (!element) return;

      if (observerRoot) {
        const container = observerRoot as HTMLElement;
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const top =
          elementRect.top - containerRect.top + container.scrollTop - offset;

        container.scrollTo({ top, behavior: "smooth" });
        return;
      }

      element.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [offset, observerRoot]
  );

  return { activeId, scrollToSection };
}
