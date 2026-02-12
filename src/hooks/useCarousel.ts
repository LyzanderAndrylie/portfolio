import { useCallback, useEffect, useRef, useState } from "react";

const TICK_MS = 50;

export function useCarousel(itemCount: number, intervalMs = 6000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0‑100

  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef(0);

  const clearTick = useCallback(() => {
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
  }, []);

  const startTick = useCallback(() => {
    clearTick();

    tickRef.current = setInterval(() => {
      progressRef.current += (TICK_MS / intervalMs) * 100;

      if (progressRef.current >= 100) {
        setCurrentIndex((prev) => {
          const next = prev + 1;
          if (next >= itemCount) {
            // Full cycle complete — reset and pause
            progressRef.current = 0;
            setProgress(0);
            setIsPlaying(false);
            return 0;
          }
          progressRef.current = 0;
          setProgress(0);
          return next;
        });
      } else {
        setProgress(progressRef.current);
      }
    }, TICK_MS);
  }, [clearTick, intervalMs, itemCount]);

  // Start / stop the ticker when isPlaying changes
  useEffect(() => {
    if (isPlaying) {
      startTick();
    } else {
      clearTick();
    }
    return clearTick;
  }, [isPlaying, startTick, clearTick]);

  const handleManualSlide = useCallback(
    (idx: number) => {
      clearTick();
      setIsPlaying(false);
      progressRef.current = 100;
      setProgress(100);
      setCurrentIndex(idx);
    },
    [clearTick],
  );

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  return { currentIndex, progress, isPlaying, handleManualSlide, togglePlay };
}
