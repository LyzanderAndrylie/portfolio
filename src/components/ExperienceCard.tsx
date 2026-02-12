import SkillBadge from "@/components/SkillBadge";
import type { Experience } from "@/types";
import { FiArrowUpRight } from "react-icons/fi";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <li>
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-sm"></div>

        <div className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2">
          <div>{experience.date}</div>
          <div className="mb-4 text-[11px] font-semibold text-slate-400">
            {experience.location}
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-200 bg-white text-[10px] font-bold text-slate-400">
            <img
              src={experience.imgUrl}
              alt={experience.companyImageLabel}
              className="h-full w-full rounded-xl object-contain"
            />
          </div>
        </div>

        <div className="z-10 sm:col-span-6">
          <h3 className="leading-snug font-medium text-slate-900">
            <div>
              <a
                className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-900 hover:text-blue-600 focus-visible:text-blue-600"
                href={experience.link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {experience.title}{" "}
                  <span className="inline-block text-slate-400">·</span>{" "}
                  {experience.company}{" "}
                  <FiArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </span>
              </a>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {experience.desc}
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {experience.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
