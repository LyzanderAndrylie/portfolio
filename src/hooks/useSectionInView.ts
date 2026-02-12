import type { SectionId } from "@/data/sections";
import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionId: SectionId) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -50% 0px",
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick.current > 1000) {
      setActiveSection(sectionId);
    }
  }, [inView, sectionId, setActiveSection, timeOfLastClick]);

  return { ref };
}
