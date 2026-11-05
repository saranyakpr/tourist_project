
import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedHero({
  title,
  subtitle,
  image,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative left-1/2 isolate flex min-h-[480px] w-screen max-w-none -translate-x-1/2 items-center justify-center overflow-hidden rounded-none">
      <motion.img
        src={image}
        alt="Explore Tenkasi"
        className="absolute inset-0 h-full w-full object-cover object-center"
        initial={false}
        animate={
          reduceMotion
            ? { scale: 1 }
            : { scale: [1, 1.07, 1] }
        }
        transition={{
          duration: 22,
          repeat: reduceMotion ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/50" />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center text-white"
        initial={reduceMotion ? false : { opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-green-200">
          Discover Tenkasi
        </p>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
          {title}
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-8 text-white/90 md:text-lg">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}
