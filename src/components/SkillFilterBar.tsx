import { SKILL_ICONS } from "@/data/skillIcons";
import { cn } from "@/lib/utils";

interface SkillFilterBarProps {
  skills: string[];
  activeSkill: string | null;
  onFilter: (skill: string | null) => void;
}

export default function SkillFilterBar({
  skills,
  activeSkill,
  onFilter,
}: SkillFilterBarProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2">
      <span className="mr-2 flex items-center gap-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
        Filter:
      </span>
      <button
        onClick={() => onFilter(null)}
        className={cn(
          "rounded-full border px-3 py-1 text-xs font-medium transition-all",
          activeSkill === null
            ? "border-blue-600 bg-blue-600 text-white shadow-md"
            : "border-slate-200 bg-white text-slate-500 hover:border-blue-400 hover:text-blue-600",
        )}
      >
        All
      </button>
      {skills.map((skill) => {
        const Icon = SKILL_ICONS[skill];
        return (
          <button
            key={skill}
            onClick={() => onFilter(skill === activeSkill ? null : skill)}
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all",
              activeSkill === skill
                ? "border-blue-600 bg-blue-600 text-white shadow-md"
                : "border-slate-200 bg-white text-slate-500 hover:border-blue-400 hover:text-blue-600",
            )}
          >
            {Icon && <Icon className="size-3.5" />}
            {skill}
          </button>
        );
      })}
    </div>
  );
}
