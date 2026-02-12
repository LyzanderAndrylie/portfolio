import ImageZoom from "@/components/ImageZoom";
import SkillBadge from "@/components/SkillBadge";
import type { Project } from "@/types";
import { FiArrowUpRight } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-sm"></div>

        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-900 hover:text-blue-600 focus-visible:text-blue-600"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {project.title}{" "}
                <FiArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {project.desc}
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {project.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </ul>
        </div>

        {/* Project Image Thumbnail */}
        <div className="group/img relative z-20 mt-1 w-full rounded border border-slate-200 bg-cover bg-center opacity-80 transition group-hover:border-blue-200 group-hover:opacity-100 sm:order-1 sm:col-span-2 sm:h-20">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full rounded object-cover"
          />
          <ImageZoom src={project.imageUrl} alt={project.title} />
        </div>
      </div>
    </>
  );
}
