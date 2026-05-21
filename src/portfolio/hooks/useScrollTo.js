"use client";

import { useCallback } from "react";

export function useScrollTo() {
  return useCallback((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }, []);
}
