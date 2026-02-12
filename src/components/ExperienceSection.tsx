import ExperienceCard from "@/components/ExperienceCard";
import LoadMoreButton from "@/components/LoadMoreButton";
import SectionHeader from "@/components/SectionHeader";
import { EXPERIENCES } from "@/data/experiences";
import { useLoadMore } from "@/hooks/useLoadMore";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function ExperienceSection() {
  const { ref } = useSectionInView("experience");
  const { visibleItems, hasMore, hasLess, loadMore, showLess } =
    useLoadMore(EXPERIENCES);

  return (
    <section
      ref={ref}
      id="experience"
      className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36"
    >
      <SectionHeader title="Experience" />

      <ol className="group/list space-y-12">
        {visibleItems.map((exp) => (
          <ExperienceCard
            key={`${exp.company}-${exp.title}`}
            experience={exp}
          />
        ))}
      </ol>

      <LoadMoreButton
        hasMore={hasMore}
        hasLess={hasLess}
        onLoadMore={loadMore}
        onShowLess={showLess}
      />
    </section>
  );
}
