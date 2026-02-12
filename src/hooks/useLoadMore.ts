import { useCallback, useState } from "react";

export function useLoadMore<T>(items: T[], initialCount = 3) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;
  const hasLess = visibleCount > initialCount;

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + initialCount, items.length));
  }, [initialCount, items.length]);

  const showLess = useCallback(() => {
    setVisibleCount((prev) => Math.max(prev - initialCount, initialCount));
  }, [initialCount]);

  const reset = useCallback(() => {
    setVisibleCount(initialCount);
  }, [initialCount]);

  return { visibleItems, hasMore, hasLess, loadMore, showLess, reset };
}
