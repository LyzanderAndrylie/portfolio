interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase">
        {title}
      </h2>
      <span className="h-px flex-1 bg-slate-200"></span>
    </div>
  );
}
