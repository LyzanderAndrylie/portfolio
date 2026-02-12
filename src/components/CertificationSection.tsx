import CertificationCard from "@/components/CertificationCard";
import LoadMoreButton from "@/components/LoadMoreButton";
import SectionHeader from "@/components/SectionHeader";
import { CERTIFICATIONS } from "@/data/certifications";
import { useLoadMore } from "@/hooks/useLoadMore";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function CertificationSection() {
  const { ref } = useSectionInView("certifications");
  const { visibleItems, hasMore, hasLess, loadMore, showLess } =
    useLoadMore(CERTIFICATIONS);

  return (
    <section
      ref={ref}
      id="certifications"
      className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36"
    >
      <SectionHeader title="Certifications" />

      <ol className="group/list space-y-12">
        {visibleItems.map((cert) => (
          <CertificationCard
            key={`${cert.issuer}-${cert.title}`}
            certification={cert}
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
