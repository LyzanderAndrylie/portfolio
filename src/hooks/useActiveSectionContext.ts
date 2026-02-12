import { ActiveSectionContext } from "@/context/ActiveSectionContext";
import { use } from "react";

export function useActiveSectionContext() {
  const context = use(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionProvider",
    );
  }
  return context;
}
