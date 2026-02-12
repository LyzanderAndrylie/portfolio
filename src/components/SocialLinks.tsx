import { SOCIAL_LINKS } from "@/data/socialLinks";

export default function SocialLinks() {
  return (
    <div className="mt-8 flex items-center gap-5 lg:mt-0">
      {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
        <a
          key={href}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          className="text-slate-400 transition-colors hover:text-blue-600"
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}
