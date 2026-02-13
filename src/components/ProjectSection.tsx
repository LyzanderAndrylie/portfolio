import ProjectCard from "@/components/ProjectCard";
import SkillFilterBar from "@/components/SkillFilterBar";
import { PROJECTS } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function ProjectSection() {
  const [filterSkill, setFilterSkill] = useState<string | null>(null);
  const [height, setHeight] = useState<number | "auto">("auto");
  const [isAnimating, setIsAnimating] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const handleFilter = useCallback((skill: string | null) => {
    setFilterSkill(skill);
  }, []);

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
    if (!contentRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newHeight = entry.contentRect.height;
        setHeight(newHeight);
      }
    });

    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [filteredProjects]);

  const inBrowser = typeof window !== "undefined";

  return (
    <>
      <SkillFilterBar
        skills={allSkills}
        activeSkill={filterSkill}
        onFilter={handleFilter}
      />

      <motion.div
        animate={{ height }}
        initial={false}
        className="relative w-full"
        style={{ overflow: isAnimating ? "hidden" : "visible" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onAnimationStart={() => setIsAnimating(true)}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div ref={contentRef}>
          <ul className="flex flex-col gap-12 p-1">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredProjects.map((project) => (
                <motion.li
                  key={project.title}
                  layout
                  initial={inBrowser && { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
