import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import SkillFilterBar from "@/components/SkillFilterBar";
import { PROJECTS } from "@/data/projects";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export default function ProjectSection() {
  const { ref } = useSectionInView("projects");
  const [filterSkill, setFilterSkill] = useState<string | null>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [isAnimating, setIsAnimating] = useState(false);

  const allSkills = useMemo(
    () => Array.from(new Set(PROJECTS.flatMap((p) => p.skills))),
    [],
  );

  const filteredProjects = useMemo(
    () =>
      filterSkill
        ? PROJECTS.filter((p) => p.skills.includes(filterSkill))
        : PROJECTS,
    [filterSkill],
  );

  useEffect(() => {
    if (!innerRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });
    observer.observe(innerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36"
    >
      <SectionHeader title="Projects" />

      <SkillFilterBar
        skills={allSkills}
        activeSkill={filterSkill}
        onFilter={setFilterSkill}
      />

      <motion.div
        animate={{ height: height ?? "auto" }}
        initial={false}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: isAnimating ? "hidden" : "visible" }}
        onAnimationStart={() => setIsAnimating(true)}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div ref={innerRef}>
          <ul className="group/list space-y-12">
            {filteredProjects.map((project) => (
              <motion.li
                key={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
