import SectionHeader from "@/components/SectionHeader";
import { useSectionInView } from "@/hooks/useSectionInView";

import { ExternalLink } from "./ExternalLink";

export default function AboutSection() {
  const { ref } = useSectionInView("about");

  return (
    <section
      ref={ref}
      id="about"
      className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36"
    >
      <SectionHeader title="About" />
      <div className="space-y-4 text-base leading-relaxed text-slate-600">
        <p>
          I am passionate about{" "}
          <span className="font-semibold">web development</span>,{" "}
          <span className="font-semibold">software engineering</span>, and{" "}
          <span className="font-semibold">artificial intelligence</span>. I am
          constantly{" "}
          <span className="font-semibold">
            seeking opportunities to learn, grow, and make meaningful
            contributions
          </span>{" "}
          through my work. As a{" "}
          <span className="font-semibold">lifelong learner</span>, I
          continuously explore emerging technologies and methodologies to
          sharpen my skills, foster personal growth, and advance professionally.
        </p>
        <p>
          Currently, I am reading{" "}
          <ExternalLink href="">
            "The Things You Can See Only When You Slow Down"
          </ExternalLink>
          and <ExternalLink href="">"The Miracle Morning"</ExternalLink>. These
          books have significantly shaped my mindset, discipline, and approach
          to productivity. Inspired by their lessons, I am committed to the
          following principles:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            I am in control of my destiny and committed to doing what it takes
            each day to achieve my goals.
          </li>
          <li>
            I am worthy and capable, and I prove it through consistent action.
          </li>
          <li>
            I am committed to continuous learning to expand my knowledge and
            seize future opportunities.
          </li>
        </ul>
      </div>
    </section>
  );
}
