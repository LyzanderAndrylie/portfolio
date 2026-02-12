import { SECTIONS, type SectionId } from "@/data/sections";
import {
  type ReactNode,
  type RefObject,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface ActiveSectionContextValue {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  scrollToSection: (section: SectionId) => void;
  timeOfLastClick: RefObject<number>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ActiveSectionContext =
  createContext<ActiveSectionContextValue | null>(null);

let validSectionIds: Set<string> | null = null;
function getValidSectionIds(): Set<string> {
  if (!validSectionIds) {
    validSectionIds = new Set<string>(SECTIONS.map((s) => s.id));
  }
  return validSectionIds;
}

function getHashSectionId(): SectionId | null {
  const hash = window.location.hash.slice(1);
  return getValidSectionIds().has(hash) ? (hash as SectionId) : null;
}

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const initialHashId = getHashSectionId();
  const [activeSection, setActiveSection] = useState<SectionId>(
    () => initialHashId ?? SECTIONS[0].id,
  );
  // Ref-based guard: updating a ref doesn't trigger re-renders, so
  // changing it won't cause every useSectionInView hook to re-evaluate.
  const timeOfLastClick = useRef(0);

  // Scroll to the hash section on initial page load
  useEffect(() => {
    const id = getHashSectionId();
    if (id) {
      timeOfLastClick.current = Date.now();
      // Delay to ensure DOM sections are rendered
      const timeout = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          timeOfLastClick.current = Date.now();
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, []);

  const scrollToSection = useCallback(
    (id: SectionId) => {
      const element = document.getElementById(id);
      if (element) {
        timeOfLastClick.current = Date.now();
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
        window.history.replaceState(null, "", `#${id}`);
      }
    },
    [setActiveSection],
  );

  return (
    <ActiveSectionContext
      value={{
        activeSection,
        setActiveSection,
        scrollToSection,
        timeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext>
  );
}
