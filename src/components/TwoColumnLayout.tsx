export default function TwoColumns({
  firstColumn,
  secondColumn,
}: {
  firstColumn: React.ReactNode;
  secondColumn: React.ReactNode;
}) {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-12">
        {firstColumn}
        {secondColumn}
      </div>
    </div>
  );
}
