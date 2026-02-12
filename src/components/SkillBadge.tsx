interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <li className="mt-2 mr-1.5">
      <div className="flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs leading-5 font-medium text-blue-700">
        {skill}
      </div>
    </li>
  );
}
