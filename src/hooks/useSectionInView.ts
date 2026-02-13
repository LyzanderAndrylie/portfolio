import type { SectionId } from "@/data/sections";
import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionId: SectionId) {
  const { setActiveSection, lastClickSectionId } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -50% 0px",
  });

  useEffect(() => {
    if (lastClickSectionId.current !== null) {
      return;
    }

    if (inView) {
      setActiveSection(sectionId);
    }
  }, [inView, sectionId, setActiveSection, lastClickSectionId]);

  return { ref };
}
