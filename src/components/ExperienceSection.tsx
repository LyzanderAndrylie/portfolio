import ExperienceCard from "@/components/ExperienceCard";
import LoadMoreButton from "@/components/LoadMoreButton";
import { EXPERIENCES } from "@/data/experiences";
import { useLoadMore } from "@/hooks/useLoadMore";

export default function ExperienceSection() {
  const { visibleItems, hasMore, hasLess, loadMore, showLess } =
    useLoadMore(EXPERIENCES);

  return (
    <>
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
    </>
  );
}
