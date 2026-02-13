import CertificationCard from "@/components/CertificationCard";
import LoadMoreButton from "@/components/LoadMoreButton";
import { CERTIFICATIONS } from "@/data/certifications";
import { useLoadMore } from "@/hooks/useLoadMore";

export default function CertificationSection() {
  const { visibleItems, hasMore, hasLess, loadMore, showLess } =
    useLoadMore(CERTIFICATIONS);

  return (
    <>
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
    </>
  );
}
