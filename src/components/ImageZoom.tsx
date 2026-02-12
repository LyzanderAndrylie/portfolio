import { useImageZoom } from "@/hooks/useImageZoom";
import { createPortal } from "react-dom";
import { FiX, FiZoomIn } from "react-icons/fi";

interface ImageZoomProps {
  src: string;
  alt: string;
}

export default function ImageZoom({ src, alt }: ImageZoomProps) {
  const { isZoomed, openZoom, closeZoom } = useImageZoom();

  return (
    <>
      <button
        type="button"
        onClick={openZoom}
        aria-label={`Zoom ${alt} image`}
        className="absolute inset-0 z-20 flex cursor-zoom-in items-center justify-center rounded bg-black/0 opacity-0 transition-opacity group-hover/img:opacity-100 hover:bg-black/30"
      >
        <FiZoomIn className="h-5 w-5 text-white drop-shadow-md" />
      </button>

      {isZoomed &&
        createPortal(
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={closeZoom}
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} image preview`}
          >
            <button
              type="button"
              onClick={closeZoom}
              aria-label="Close image preview"
              className="absolute top-4 right-4 z-100 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            >
              <FiX className="h-6 w-6" />
            </button>
            <img
              src={src}
              alt={alt}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
