import { useCallback, useEffect, useState } from "react";

export function useImageZoom() {
  const [isZoomed, setIsZoomed] = useState(false);

  const openZoom = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsZoomed(true);
  }, []);

  const closeZoom = useCallback(() => {
    setIsZoomed(false);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!isZoomed) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeZoom();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isZoomed, closeZoom]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  return { isZoomed, openZoom, closeZoom };
}
