type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="font-pjs min-h-screen bg-white text-slate-600">
      {children}
    </div>
  );
}
