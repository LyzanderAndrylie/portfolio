import SectionHeader from "@/components/SectionHeader";
import { SECTIONS, type SectionId } from "@/data/sections";
import { useSectionInView } from "@/hooks/useSectionInView";

function SectionItem({
  id,
  children,
}: {
  id: SectionId;
  children: React.ReactNode;
}) {
  const { ref } = useSectionInView(id);

  return (
    <section ref={ref} id={id} className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36">
      <SectionHeader title={id} />
      {children}
    </section>
  );
}

export default function Sections() {
  return (
    <main className="pt-24 pr-4 lg:w-[55%] lg:py-24">
      {SECTIONS.map(({ id, component }) => (
        <SectionItem key={id} id={id}>
          {component}
        </SectionItem>
      ))}
    </main>
  );
}
