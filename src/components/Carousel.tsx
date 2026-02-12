import { useCarousel } from "@/hooks/useCarousel";
import type { CarouselItem } from "@/types";
import { FaPause, FaPlay } from "react-icons/fa6";

interface CarouselProps {
  items: CarouselItem[];
  intervalMs?: number;
}

export default function Carousel({ items, intervalMs }: CarouselProps) {
  const { currentIndex, progress, isPlaying, handleManualSlide, togglePlay } =
    useCarousel(items.length, intervalMs);

  const currentItem = items[currentIndex];

  return (
    <div className="mt-8 w-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md">
      {/* Image Area */}
      <div className="relative flex h-64 w-full items-center justify-center transition-colors duration-700 ease-in-out">
        <img
          src={currentItem.imgUrl}
          alt={currentItem.label}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

        <div className="absolute bottom-4 left-5 z-10 text-white">
          <div className="text-lg font-bold tracking-wide drop-shadow-md">
            {currentItem.label}
          </div>
        </div>
      </div>

      {/* Content & Controls */}
      <div className="flex flex-col gap-3 p-6">
        <p className="min-h-18 text-sm leading-relaxed text-slate-600">
          {currentItem.content}
        </p>

        {/* Badge Progress + Play/Pause */}
        <div className="flex items-center gap-2">
          {items.map((item, idx) => {
            const isActive = idx === currentIndex;
            const isPast = idx < currentIndex;

            return (
              <button
                key={item.id}
                onClick={() => handleManualSlide(idx)}
                className="relative overflow-hidden rounded-full text-xs font-semibold"
                aria-label={`Go to slide ${idx + 1}: ${item.label}`}
              >
                {/* Base layer: grey bg + grey text (always rendered) */}
                <span className="flex items-center justify-center rounded-full bg-slate-200 px-3 py-1 text-slate-500 hover:bg-slate-100 hover:text-blue-600">
                  {item.label}
                </span>

                {/* Overlay layer: blue bg + white text, revealed via clip-path */}
                <span
                  className="absolute inset-0 flex items-center justify-center rounded-full bg-blue-600 px-3 py-1 text-white transition-all duration-100 ease-linear hover:bg-slate-100 hover:text-blue-600"
                  style={{
                    clipPath: isPast
                      ? "inset(0 0% 0 0)"
                      : isActive
                        ? `inset(0 ${100 - progress}% 0 0)`
                        : "inset(0 100% 0 0)",
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Play / Pause button */}
          <button
            onClick={togglePlay}
            className="ml-auto flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100 hover:text-blue-600"
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
    </div>
  );
}
