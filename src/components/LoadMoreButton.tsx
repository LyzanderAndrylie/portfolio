import { FiArrowDown, FiArrowUp } from "react-icons/fi";

interface LoadMoreButtonProps {
  hasMore: boolean;
  hasLess: boolean;
  onLoadMore: () => void;
  onShowLess: () => void;
}

export default function LoadMoreButton({
  hasMore,
  hasLess,
  onLoadMore,
  onShowLess,
}: LoadMoreButtonProps) {
  if (!hasMore && !hasLess) return null;

  return (
    <div className="mt-12 flex gap-4">
      {hasMore && (
        <button
          className="group inline-flex items-center leading-tight font-bold text-slate-900 underline-offset-4 hover:text-blue-600"
          type="button"
          onClick={onLoadMore}
        >
          <FiArrowDown className="mr-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-y-1" />
          <span>Load more</span>
        </button>
      )}
      {hasLess && (
        <button
          className="group inline-flex items-center leading-tight font-bold text-slate-900 underline-offset-4 hover:text-blue-600"
          type="button"
          onClick={onShowLess}
        >
          <FiArrowUp className="mr-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1" />
          <span>Show less</span>
        </button>
      )}
    </div>
  );
}
