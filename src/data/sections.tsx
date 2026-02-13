import AboutSection from "@/components/AboutSection";
import CertificationSection from "@/components/CertificationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";
import type React from "react";

export interface SectionConfig {
  id: string;
  label: string;
  component: React.ReactNode;
}

export const SECTIONS = [
  { id: "about", label: "About", component: <AboutSection /> },
  { id: "experience", label: "Experience", component: <ExperienceSection /> },
  {
    id: "certifications",
    label: "Certifications",
    component: <CertificationSection />,
  },
  { id: "projects", label: "Projects", component: <ProjectSection /> },
] as const satisfies readonly SectionConfig[];

export type SectionId = (typeof SECTIONS)[number]["id"];
