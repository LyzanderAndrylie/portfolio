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
  lastClickSectionId: RefObject<SectionId | null>;
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
  const [activeSection, setActiveSection] = useState<SectionId>(SECTIONS[0].id);
  const lastClickSectionId = useRef<SectionId | null>(null);

  // Clear the click guard when scrolling finishes
  useEffect(() => {
    const handleScrollEnd = () => {
      lastClickSectionId.current = null;
    };
    window.addEventListener("scrollend", handleScrollEnd);
    return () => window.removeEventListener("scrollend", handleScrollEnd);
  }, []);

  // Scroll to the hash section on initial page load
  useEffect(() => {
    const id = getHashSectionId();

    if (!id) {
      return;
    }

    const timeout = setTimeout(() => {
      const element = document.getElementById(id);

      if (!element) {
        return;
      }

      lastClickSectionId.current = id;
      setActiveSection(id);
      element.scrollIntoView({ behavior: "smooth" });
    }, 150);

    return () => clearTimeout(timeout);
  }, []);

  const scrollToSection = useCallback(
    (id: SectionId) => {
      const element = document.getElementById(id);

      if (!element) {
        return;
      }

      lastClickSectionId.current = id;
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      window.history.replaceState(null, "", `#${id}`);
    },
    [setActiveSection],
  );

  return (
    <ActiveSectionContext
      value={{
        activeSection,
        setActiveSection,
        scrollToSection,
        lastClickSectionId,
      }}
    >
      {children}
    </ActiveSectionContext>
  );
}
