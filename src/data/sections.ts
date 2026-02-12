import AboutSection from "@/components/AboutSection";
import CertificationSection from "@/components/CertificationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";
import type { ComponentType } from "react";

export interface SectionConfig {
  id: string;
  label: string;
  component: ComponentType;
}

/**
 * Section registry — single source of truth for all sections.
 *
 * To add a new section:
 *  1. Create the section component (use `useSectionInView(id)` inside it)
 *  2. Add an entry here — order determines render & nav order
 *
 * That's it! The section will automatically appear in the nav and main content.
 */
export const SECTIONS = [
  { id: "about", label: "About", component: AboutSection },
  { id: "experience", label: "Experience", component: ExperienceSection },
  {
    id: "certifications",
    label: "Certifications",
    component: CertificationSection,
  },
  { id: "projects", label: "Projects", component: ProjectSection },
] as const satisfies readonly SectionConfig[];

export type SectionId = (typeof SECTIONS)[number]["id"];
