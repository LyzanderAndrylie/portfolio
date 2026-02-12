import { SECTIONS } from "@/data/sections";

export default function Sections() {
  return (
    <main className="pt-24 pr-4 lg:w-[55%] lg:py-24">
      {SECTIONS.map(({ id, component: Component }) => (
        <Component key={id} />
      ))}
    </main>
  );
}
