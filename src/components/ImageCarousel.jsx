
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const next = () => {
    setActive((current) => (current + 1) % images.length);
  };

  const previous = () => {
    setActive((current) =>
      (current - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (!images || images.length <= 1 || reduceMotion) return;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [images.length, reduceMotion]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-[280px] overflow-hidden rounded-2xl bg-gray-100 shadow-xl md:h-[450px] dark:bg-[#1B3526]">

      <AnimatePresence mode="wait">
        <motion.img
          key={active}
          src={images[active].src}
          alt={images[active].alt}
          className="absolute inset-0 h-full w-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        />
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-6 text-white">
        <h3 className="text-xl font-semibold">
          {images[active].title}
        </h3>

        <p className="mt-1 text-sm text-white/80">
          {images[active].alt}
        </p>
      </div>

      <button
        onClick={previous}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-green-900 shadow transition hover:scale-110 hover:bg-white"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-green-900 shadow transition hover:scale-110 hover:bg-white"
      >
        <ChevronRight />
      </button>

      <div className="absolute right-5 top-5 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
        {active + 1} / {images.length}
      </div>
    </div>
  );
}
