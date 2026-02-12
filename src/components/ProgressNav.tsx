import { SECTIONS } from "@/data/sections";
import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";

export default function ProgressNav() {
  const { activeSection, scrollToSection } = useActiveSectionContext();

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur transition-all duration-300 lg:hidden">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4 py-3">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
              className={`text-xs font-bold tracking-widest uppercase transition-colors ${
                activeSection === section.id
                  ? "text-blue-600"
                  : "text-slate-400"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <nav className="fixed top-6 right-6 z-50 hidden flex-col items-end gap-3 lg:flex">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section.id);
            }}
            className="group flex items-center gap-2 py-1"
            aria-label={`Scroll to ${section.label}`}
          >
            <span
              className={`text-xs font-bold tracking-widest uppercase transition-all duration-300 lg:rotate-180 lg:[writing-mode:vertical-rl] 2xl:rotate-0 2xl:[writing-mode:horizontal-tb] ${
                activeSection === section.id
                  ? "text-blue-600"
                  : "text-slate-300 group-hover:text-blue-500"
              }`}
            >
              {section.label}
            </span>
            <span
              className={`block w-0.5 rounded-full transition-all duration-300 ease-out ${
                activeSection === section.id
                  ? "h-6 bg-blue-600"
                  : "h-2 bg-slate-200 group-hover:h-4 group-hover:bg-blue-400"
              }`}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
