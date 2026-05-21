"use client";

import { useCallback } from "react";

const NAVBAR_OFFSET = 88;

export function useScrollTo() {
  return useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const top =
      element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  }, []);
}
