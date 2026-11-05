import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Mountain,
  Heart,
  Compass,
  Leaf,
  MapPin,
  Camera,
  Route,
  Utensils,
  BookOpen,
  CalendarDays,
  Eye,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Waves,
  Landmark,
  Trees,
  Star,
  Quote,
} from "lucide-react";

import "./About.css";

// Existing testimonials preserved exactly
const testimonials = [
  {
    name: "Arun Kumar",
    place: "Courtallam Waterfalls",
    rating: 5,
    review:
      "We had a wonderful experience visiting Courtallam. The natural beauty and refreshing waterfalls made our trip memorable. Really enjoyed the visit!",
  },
  {
    name: "Priya",
    place: "Kasi Viswanathar Temple",
    rating: 4,
    review:
      "A beautiful and peaceful place to visit with family. The temple architecture was amazing, and we enjoyed exploring the surroundings.",
  },
  {
    name: "Rahul",
    place: "Five Falls",
    rating: 5,
    review:
      "Five Falls was an amazing experience! The surroundings were beautiful, and we had a great time with friends. Definitely worth visiting.",
  },
];

// Existing mission & vision preserved exactly
const missionVision = [
  {
    title: "Our Mission",
    icon: Leaf,
    short:
      "Make discovering Tenkasi simple, enjoyable and accessible for every traveller.",
    details:
      "We bring useful destination information, travel guides, local food experiences and trip-planning resources together in one place. Our aim is to help visitors explore Tenkasi with better information and confidence.",
  },
  {
    title: "Our Vision",
    icon: Mountain,
    short:
      "Introduce the natural beauty and cultural richness of Tenkasi to more people.",
    details:
      "We aim to build a helpful digital tourism platform that highlights popular attractions, lesser-known destinations, local culture and responsible travel around Tenkasi.",
  },
];

// Existing services preserved exactly
const services = [
  {
    icon: MapPin,
    title: "Tourist Place Discovery",
    description:
      "Explore waterfalls, temples, dams, viewpoints and other attractions around Tenkasi.",
  },
  {
    icon: CalendarDays,
    title: "Trip Planning Assistance",
    description:
      "Organise your travel ideas with destination details and suggested itineraries.",
  },
  {
    icon: Route,
    title: "Tour Packages & Routes",
    description:
      "Explore available package information and useful travel routes for your journey.",
  },
  {
    icon: Utensils,
    title: "Local Food Experiences",
    description:
      "Discover local dishes, food spots and the flavours of the Tenkasi region.",
  },
  {
    icon: Eye,
    title: "Hidden Gems Discovery",
    description:
      "Find interesting places beyond the popular tourist attractions.",
  },
  {
    icon: BookOpen,
    title: "Travel Guides & Tips",
    description:
      "Read helpful information about travel, local culture and things to know before visiting.",
  },
];

// Existing reasons preserved exactly
const reasons = [
  {
    icon: Compass,
    title: "Easy to Explore",
    description:
      "Find destination information and travel inspiration in one organised platform.",
  },
  {
    icon: Heart,
    title: "Local Experiences",
    description:
      "Discover the region's nature, food, culture and memorable experiences.",
  },
  {
    icon: Trees,
    title: "Nature-Focused Travel",
    description:
      "Explore beautiful landscapes, waterfalls and peaceful natural destinations.",
  },
  {
    icon: ShieldCheck,
    title: "Helpful Information",
    description:
      "Use clear travel guides and practical details to prepare for your journey.",
  },
];

// Existing gallery images preserved exactly
const galleryImages = [
  {
    src: "/images/courtallam-waterfalls.jpg",
    title: "Courtallam Waterfalls",
    alt: "Courtallam waterfalls in Tenkasi",
  },
  {
    src: "/images/tenkasi-temple.jpg",
    title: "Tenkasi Temple",
    alt: "Kasi Viswanathar temple in Tenkasi",
  },
  {
    src: "/images/mekkarai-nature.jpg",
    title: "Mekkarai",
    alt: "Green mountain landscape near Tenkasi",
  },
  {
    src: "/images/papanasam-dam.jpg",
    title: "Papanasam",
    alt: "Papanasam dam and surrounding hills",
  },
];

/* -------------------------------------------------------------------------- */
/* Dedicated About-Specific 3D Tilt Card Component                            */
/* -------------------------------------------------------------------------- */
function AboutTiltCard({
  children,
  className = "",
  maxTilt = 10,
  glare = true,
  onClick,
}) {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    setRotateX(rotX);
    setRotateY(rotY);

    cardRef.current.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
    cardRef.current.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={
        reduceMotion
          ? {}
          : {
              rotateX,
              rotateY,
              transformPerspective: 1200,
            }
      }
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className={`card-container relative ${className}`}
    >
      {children}
      {glare && <div className="card-shine-overlay" />}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Dedicated Scroll Reveal with Stagger & Spring Physics                      */
/* -------------------------------------------------------------------------- */
function AboutSectionReveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* 1. UPGRADED HERO SECTION (3D Parallax, Cinematic Zoom, Text Reveal)        */
/* -------------------------------------------------------------------------- */
function AboutHeroSection({ title, subtitle, image }) {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imgScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const textScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Mouse 3D parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const mouseImgX = useTransform(springMouseX, [-0.5, 0.5], [-16, 16]);
  const mouseImgY = useTransform(springMouseY, [-0.5, 0.5], [-12, 12]);
  const mouseTextX = useTransform(springMouseX, [-0.5, 0.5], [10, -10]);
  const mouseTextY = useTransform(springMouseY, [-0.5, 0.5], [8, -8]);

  const handleHeroMouseMove = (e) => {
    if (reduceMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleHeroMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative left-1/2 isolate flex min-h-[540px] w-screen max-w-none -translate-x-1/2 items-center justify-center overflow-hidden rounded-none md:min-h-[640px]"
    >
      {/* Cinematic 3D Parallax Background Image */}
      <motion.div
        className="absolute inset-[-8%] h-[116%] w-[116%]"
        style={
          reduceMotion
            ? {}
            : {
                y: imgScrollY,
                x: mouseImgX,
                translateY: mouseImgY,
                scale: imgScale,
              }
        }
      >
        <motion.img
          src={image}
          alt="Explore Tenkasi"
          className="h-full w-full object-cover object-center"
          initial={false}
          animate={
            reduceMotion
              ? { scale: 1 }
              : { scale: [1, 1.06, 1] }
          }
          transition={{
            duration: 24,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Atmospheric Cinematic Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-emerald-950/40 to-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#10251A] via-transparent to-black/40" />

      {/* Subtle Ambient Light Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />

      {/* Foreground Content with Smooth Text Reveal */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white"
        style={
          reduceMotion
            ? {}
            : {
                y: textScrollY,
                opacity: textOpacity,
                x: mouseTextX,
                translateY: mouseTextY,
              }
        }
      >
        {/* Reveal Badge */}
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-900/60 px-5 py-2 backdrop-blur-md"
        >
          <Sparkles className="text-emerald-300" size={16} />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-200">
            Discover Tenkasi
          </span>
        </motion.div>

        {/* Reveal Title */}
        <motion.h1
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-4xl font-extrabold leading-tight tracking-tight drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-white via-green-50 to-emerald-200 bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h1>

        {/* Reveal Subtitle */}
        <motion.p
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-50/90 drop-shadow md:text-lg"
        >
          {subtitle}
        </motion.p>

        {/* Floating Quick Feature Indicators */}
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-emerald-200/90"
        >
          <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
            <Waves size={14} className="text-emerald-400" /> Cascading Falls
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
            <Mountain size={14} className="text-emerald-400" /> Western Ghats
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
            <Landmark size={14} className="text-emerald-400" /> Ancient Temples
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. WHO WE ARE (Floating Image, Mouse 3D Tilt, Smooth Hover Zoom)           */
/* -------------------------------------------------------------------------- */
function WhoWeAreSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="grid items-center gap-10 py-20 md:grid-cols-2 md:gap-16">
      {/* 3D Tilt Image with Floating Badge */}
      <AboutSectionReveal>
        <AboutTiltCard
          maxTilt={14}
          className="group overflow-hidden rounded-3xl border border-green-200/50 bg-white/20 p-2 shadow-2xl backdrop-blur-sm dark:border-green-800/40 dark:bg-green-950/20"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <motion.img
              src="/images/tenkasi-nature.jpg"
              alt="Beautiful green nature in Tenkasi"
              className="h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 md:h-[460px]"
            />

            {/* Specular Light Highlight */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/20" />

            {/* 3D Floating Pill Badge */}
            <motion.div
              style={{
                transform: reduceMotion ? "none" : "translateZ(45px)",
              }}
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [-4, 4, -4],
                    }
              }
              transition={{
                duration: 4,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-6 left-6 rounded-2xl border border-white/50 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md dark:border-green-800/70 dark:bg-[#152e20]/95"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                  <Trees size={20} />
                </div>
                <div>
                  <p className="font-bold text-green-900 dark:text-green-200">
                    Explore Tenkasi
                  </p>
                  <p className="text-xs font-medium text-gray-600 dark:text-green-100/70">
                    Nature • Culture • Experiences
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </AboutTiltCard>
      </AboutSectionReveal>

      {/* Content Details */}
      <AboutSectionReveal delay={0.15}>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-300">
            About Our Platform
          </p>

          <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Who We Are
          </h2>

          <p className="mb-5 text-base leading-8 text-gray-600 dark:text-green-100/75">
            Welcome to Tenkasi Tourism, your digital guide to
            exploring the beauty of Tenkasi. We bring together
            information about tourist attractions, local food,
            culture and travel experiences.
          </p>

          <p className="text-base leading-8 text-gray-600 dark:text-green-100/75">
            Whether you are planning a family trip, a weekend
            getaway or a nature-filled adventure, our platform
            helps you discover places and prepare for your journey
            with ease.
          </p>

          {/* Interactive Badges with 3D Hover Depth */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Waves, label: "Waterfalls" },
              { icon: Mountain, label: "Nature" },
              { icon: Landmark, label: "Heritage" },
            ].map(({ icon: Icon, label }) => (
              <motion.span
                key={label}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -3,
                        scale: 1.05,
                        boxShadow: "0 10px 25px -5px rgba(22, 101, 52, 0.25)",
                      }
                }
                whileTap={{ scale: 0.96 }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-green-200/60 bg-green-100/80 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm transition-colors duration-200 hover:border-green-400 dark:border-green-800 dark:bg-green-900/60 dark:text-green-200"
              >
                <Icon size={16} />
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </AboutSectionReveal>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. MISSION & VISION (Interactive 3D Cards, Animated Icons, Expandable)     */
/* -------------------------------------------------------------------------- */
function MissionVisionSection({ activeCard, setActiveCard }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-16">
      <AboutSectionReveal>
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-300">
            What Guides Us
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            Our Mission & Vision
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-green-100/70">
            Our purpose is to make Tenkasi easier to discover
            and more enjoyable to explore.
          </p>

          <p className="mt-3 flex items-center justify-center gap-1 text-sm font-medium text-green-700 dark:text-green-300">
            <Sparkles size={16} />
            Click a card to discover more
          </p>
        </div>
      </AboutSectionReveal>

      <div className="grid gap-7 md:grid-cols-2">
        {missionVision.map((item, index) => {
          const Icon = item.icon;
          const isOpen = activeCard === index;

          return (
            <AboutSectionReveal key={item.title} delay={index * 0.15}>
              <AboutTiltCard
                maxTilt={8}
                onClick={() => setActiveCard(isOpen ? null : index)}
                className={`group cursor-pointer rounded-3xl border p-8 text-left transition-all duration-300 ${
                  isOpen
                    ? "border-green-600 bg-gradient-to-br from-green-800 via-emerald-900 to-green-900 text-white shadow-2xl"
                    : "border-green-100 bg-white text-gray-800 shadow-sm hover:border-green-400 hover:shadow-xl dark:border-green-900 dark:bg-[#1B3526] dark:text-green-50"
                }`}
              >
                <div
                  style={{
                    transform: reduceMotion ? "none" : "translateZ(30px)",
                  }}
                  className="flex items-start justify-between gap-4"
                >
                  {/* Animated Icon with 3D Float */}
                  <motion.div
                    animate={
                      reduceMotion
                        ? {}
                        : {
                            rotate: isOpen ? [0, -10, 10, 0] : [0, 5, 0],
                            y: [-2, 2, -2],
                          }
                    }
                    transition={{
                      duration: 4,
                      repeat: reduceMotion ? 0 : Infinity,
                      ease: "easeInOut",
                    }}
                    className={`grid h-16 w-16 place-items-center rounded-2xl shadow-inner transition-colors duration-300 ${
                      isOpen
                        ? "bg-white/15 text-emerald-200"
                        : "bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-900/80 dark:text-green-200"
                    }`}
                  >
                    <Icon size={32} />
                  </motion.div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className={`grid h-10 w-10 place-items-center rounded-full ${
                      isOpen
                        ? "bg-white/15 text-white"
                        : "bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-200"
                    }`}
                  >
                    <ChevronDown size={22} />
                  </motion.div>
                </div>

                <div
                  style={{
                    transform: reduceMotion ? "none" : "translateZ(20px)",
                  }}
                >
                  <h3 className="mt-7 text-2xl font-bold tracking-tight">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3 leading-7 ${
                      isOpen
                        ? "text-green-50/90"
                        : "text-gray-600 dark:text-green-100/70"
                    }`}
                  >
                    {item.short}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-5 border-t border-white/20 pt-5 leading-8 text-green-50/95">
                          {item.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-bold ${
                      isOpen
                        ? "text-emerald-200"
                        : "text-green-700 group-hover:text-green-900 dark:text-green-300"
                    }`}
                  >
                    <span>{isOpen ? "Show less" : "Read more"}</span>
                    <ArrowRight
                      size={15}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-90" : "group-hover:translate-x-1"
                      }`}
                    />
                  </p>
                </div>
              </AboutTiltCard>
            </AboutSectionReveal>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. SERVICES (Horizontal Sliding Cards, Drag Interaction, 3D Hover Effects) */
/* -------------------------------------------------------------------------- */
function ServicesSection() {
  const reduceMotion = useReducedMotion();
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollByAmount = (distance) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: distance, behavior: "smooth" });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section className="py-20">
      <AboutSectionReveal>
        <div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-300">
              Explore With Us
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              What Services Do We Provide?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600 dark:text-green-100/70">
              Everything you need to discover destinations,
              explore local experiences and plan your Tenkasi trip.
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollByAmount(-340)}
              disabled={!canScrollLeft}
              aria-label="Previous service"
              className={`grid h-12 w-12 place-items-center rounded-full border transition-all duration-300 ${
                canScrollLeft
                  ? "border-green-300 bg-white text-green-900 shadow-md hover:scale-105 hover:bg-green-50 dark:border-green-700 dark:bg-[#1B3526] dark:text-green-100"
                  : "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400 opacity-50 dark:border-green-950 dark:bg-green-950/40"
              }`}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scrollByAmount(340)}
              disabled={!canScrollRight}
              aria-label="Next service"
              className={`grid h-12 w-12 place-items-center rounded-full border transition-all duration-300 ${
                canScrollRight
                  ? "border-green-300 bg-white text-green-900 shadow-md hover:scale-105 hover:bg-green-50 dark:border-green-700 dark:bg-[#1B3526] dark:text-green-100"
                  : "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400 opacity-50 dark:border-green-950 dark:bg-green-950/40"
              }`}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </AboutSectionReveal>

      {/* Horizontal Sliding & Draggable Card Container */}
      <div
        ref={sliderRef}
        onScroll={checkScroll}
        className="no-scrollbar -mx-5 flex cursor-grab gap-6 overflow-x-auto px-5 py-4 active:cursor-grabbing md:-mx-10 md:px-10 lg:-mx-16 lg:px-16"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              style={{ scrollSnapAlign: "start" }}
              className="w-[300px] shrink-0 sm:w-[340px]"
            >
              <AboutTiltCard
                maxTilt={12}
                className="group h-full rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-green-400 hover:shadow-2xl dark:border-green-900 dark:bg-[#1B3526]"
              >
                {/* Card Number Watermark */}
                <div className="absolute right-6 top-6 text-2xl font-black text-green-100 dark:text-green-900/60">
                  0{index + 1}
                </div>

                <div
                  style={{
                    transform: reduceMotion ? "none" : "translateZ(30px)",
                  }}
                  className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-green-100 text-green-800 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-green-800 group-hover:text-white dark:bg-green-900 dark:text-green-200 dark:group-hover:bg-green-700"
                >
                  <Icon size={30} />
                </div>

                <div
                  style={{
                    transform: reduceMotion ? "none" : "translateZ(20px)",
                  }}
                >
                  <h3 className="mb-3 text-xl font-bold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-gray-600 dark:text-green-100/70">
                    {service.description}
                  </p>
                </div>
              </AboutTiltCard>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-3 text-center text-xs text-gray-400 dark:text-green-100/40 md:hidden">
        ← Drag horizontally to view more services →
      </p>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. WHY EXPLORE WITH US (Staggered Card Animations, 3D Tilt, Animated Icons)*/
/* -------------------------------------------------------------------------- */
function WhyExploreSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#EAF4E8] via-[#E4EFE2] to-[#DCECE0] px-6 py-16 dark:from-[#193525] dark:via-[#162f21] dark:to-[#12281c] md:px-12 md:py-20">
      {/* Subtle Background Glow Spheres */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-lime-400/15 blur-3xl" />

      <AboutSectionReveal>
        <div className="relative z-10 mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-300">
            Your Journey, Made Easier
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            Why Explore With Us?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-green-100/70">
            Discover more, plan better and experience the
            special charm of Tenkasi.
          </p>
        </div>
      </AboutSectionReveal>

      {/* Staggered 3D Tilt Cards */}
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;

          return (
            <AboutSectionReveal key={reason.title} delay={index * 0.12}>
              <AboutTiltCard
                maxTilt={12}
                className="group h-full rounded-2xl border border-white/60 bg-white/90 p-7 shadow-sm transition-all duration-300 hover:border-green-400 hover:shadow-2xl dark:border-green-800/40 dark:bg-[#244532]/90"
              >
                {/* 3D Animated Icon */}
                <motion.div
                  style={{
                    transform: reduceMotion ? "none" : "translateZ(35px)",
                  }}
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          y: [-2, 2, -2],
                        }
                  }
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: reduceMotion ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-green-100 text-green-800 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-green-700 group-hover:text-white dark:bg-green-900/80 dark:text-green-200"
                >
                  <Icon size={26} />
                </motion.div>

                <div
                  style={{
                    transform: reduceMotion ? "none" : "translateZ(20px)",
                  }}
                >
                  <h3 className="mb-3 text-lg font-bold tracking-tight">
                    {reason.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600 dark:text-green-100/75">
                    {reason.description}
                  </p>
                </div>
              </AboutTiltCard>
            </AboutSectionReveal>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 6. VISITOR REVIEWS (Automatic Horizontal Slider, Controls & Transitions)   */
/* -------------------------------------------------------------------------- */
function VisitorReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  // Automatic Horizontal Slider
  useEffect(() => {
    if (isPaused || reduceMotion || testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, reduceMotion]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20">
      <AboutSectionReveal>
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-300">
            Visitor Experiences
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            What Our Visitors Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-green-100/70">
            Every journey creates a memory. Discover what our
            visitors have to say about their Tenkasi experience.
          </p>
        </div>
      </AboutSectionReveal>

      {testimonials.length > 0 ? (
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative mx-auto max-w-3xl"
        >
          {/* Active Review Card with Smooth Slide Transition */}
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-green-200/60 bg-white/95 p-8 shadow-xl backdrop-blur-sm dark:border-green-800/60 dark:bg-[#1B3526]/95 md:p-12">
            {/* Background Watermark Quote */}
            <Quote
              size={120}
              className="pointer-events-none absolute -right-6 -top-6 text-green-100/60 dark:text-green-900/30"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col justify-between"
              >
                <div>
                  {/* Star Ratings */}
                  <div className="mb-6 flex items-center gap-1.5">
                    {Array.from({ length: testimonials[currentIndex].rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          size={19}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                    <span className="ml-2 text-sm font-semibold text-gray-600 dark:text-green-200">
                      {testimonials[currentIndex].rating}.0 / 5.0
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-lg leading-8 text-gray-700 italic dark:text-green-100/90 md:text-xl">
                    "{testimonials[currentIndex].review}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 flex items-center gap-4 border-t border-green-100 pt-6 dark:border-green-900/80">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-tr from-green-700 to-emerald-500 text-xl font-bold text-white shadow-md">
                    {testimonials[currentIndex].name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-green-50">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="flex items-center gap-1.5 text-sm font-medium text-green-700 dark:text-green-300">
                      <MapPin size={15} />
                      {testimonials[currentIndex].place}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Auto-Slide Progress Bar */}
            {!isPaused && !reduceMotion && (
              <motion.div
                key={`progress-${currentIndex}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute bottom-0 left-0 h-1 bg-green-600"
              />
            )}
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-green-700 dark:bg-green-400"
                      : "w-2.5 bg-green-200 hover:bg-green-400 dark:bg-green-800"
                  }`}
                />
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous review"
                className="grid h-11 w-11 place-items-center rounded-full border border-green-200 bg-white text-green-800 shadow-sm transition hover:scale-105 hover:bg-green-50 dark:border-green-800 dark:bg-[#1B3526] dark:text-green-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next review"
                className="grid h-11 w-11 place-items-center rounded-full border border-green-200 bg-white text-green-800 shadow-sm transition hover:scale-105 hover:bg-green-50 dark:border-green-800 dark:bg-[#1B3526] dark:text-green-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-sm text-gray-500 dark:text-green-100/60">
          Visitor reviews will appear here.
        </p>
      )}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 7. NATURE GALLERY (Premium 3D Coverflow Carousel, Drag & Transitions)      */
/* -------------------------------------------------------------------------- */
function NatureGallery3DCoverflow({ images }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const count = images.length;

  // Automatic Movement
  useEffect(() => {
    if (isPaused || reduceMotion || count <= 1) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, reduceMotion, count]);

  const next = () => setActive((prev) => (prev + 1) % count);
  const previous = () => setActive((prev) => (prev - 1 + count) % count);

  // Drag Gesture Handling
  const handleDragEnd = (_, info) => {
    if (info.offset.x < -40) {
      next();
    } else if (info.offset.x > 40) {
      previous();
    }
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative mx-auto w-full max-w-5xl select-none py-8"
    >
      {/* 3D Perspective Stage */}
      <div
        style={{ perspective: "1200px" }}
        className="relative flex h-[360px] items-center justify-center overflow-hidden sm:h-[420px] md:h-[480px]"
      >
        <motion.div
          drag={reduceMotion ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="relative flex h-full w-full items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ transformStyle: "preserve-3d" }}
        >
          {images.map((image, idx) => {
            // Calculate distance offset in circular carousel
            let offset = (idx - active + count) % count;
            if (offset > count / 2) offset -= count;

            const isCenter = offset === 0;
            const isLeft = offset === -1 || (count === 4 && offset === 3);
            const isRight = offset === 1 || (count === 4 && offset === -3);
            const isFar = Math.abs(offset) > 1 && !isLeft && !isRight;

            // Calculate 3D transforms
            let xTranslation = 0;
            let zTranslation = 0;
            let yRotation = 0;
            let scaleVal = 1;
            let opacityVal = 1;
            let zIndexVal = 20;

            if (reduceMotion) {
              opacityVal = isCenter ? 1 : 0;
              xTranslation = 0;
            } else {
              if (isCenter) {
                xTranslation = 0;
                zTranslation = 40;
                yRotation = 0;
                scaleVal = 1;
                opacityVal = 1;
                zIndexVal = 30;
              } else if (isLeft || offset < 0) {
                xTranslation = -220;
                zTranslation = -90;
                yRotation = 35;
                scaleVal = 0.82;
                opacityVal = 0.7;
                zIndexVal = 15;
              } else if (isRight || offset > 0) {
                xTranslation = 220;
                zTranslation = -90;
                yRotation = -35;
                scaleVal = 0.82;
                opacityVal = 0.7;
                zIndexVal = 15;
              }

              if (isFar) {
                opacityVal = 0;
                scaleVal = 0.6;
                zIndexVal = 5;
              }
            }

            return (
              <motion.div
                key={image.src}
                onClick={() => setActive(idx)}
                animate={{
                  x: xTranslation,
                  z: zTranslation,
                  rotateY: yRotation,
                  scale: scaleVal,
                  opacity: opacityVal,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  zIndex: zIndexVal,
                  transformStyle: "preserve-3d",
                  position: "absolute",
                }}
                className={`w-[280px] sm:w-[420px] md:w-[540px] cursor-pointer overflow-hidden rounded-3xl border border-white/40 bg-gray-900 shadow-2xl transition-all ${
                  isCenter ? "ring-4 ring-emerald-500/40" : "hover:opacity-90"
                }`}
              >
                <div className="relative h-[250px] sm:h-[320px] md:h-[370px]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center"
                  />

                  {/* Gradient Overlay & Text Details */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-white">
                    <span className="rounded-full bg-emerald-600/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      Tenkasi Destination
                    </span>
                    <h3 className="mt-2 text-xl font-bold tracking-tight md:text-2xl">
                      {image.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/80 line-clamp-1 md:text-sm">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* 3D Carousel Controls */}
      <div className="mt-6 flex items-center justify-between px-4">
        {/* Counter Badge */}
        <div className="rounded-full border border-green-200 bg-white/80 px-4 py-1.5 text-xs font-bold text-green-900 shadow-sm backdrop-blur dark:border-green-800 dark:bg-[#1B3526]/80 dark:text-green-200">
          {active + 1} / {count} Destinations
        </div>

        {/* Carousel Thumbnail Dots */}
        <div className="flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Jump to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                active === i
                  ? "w-8 bg-green-700 dark:bg-green-400"
                  : "w-2.5 bg-green-200 hover:bg-green-400 dark:bg-green-800"
              }`}
            />
          ))}
        </div>

        {/* Previous / Next Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={previous}
            aria-label="Previous gallery image"
            className="grid h-10 w-10 place-items-center rounded-full border border-green-200 bg-white text-green-900 shadow-sm transition hover:scale-110 hover:bg-green-50 dark:border-green-800 dark:bg-[#1B3526] dark:text-green-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next gallery image"
            className="grid h-10 w-10 place-items-center rounded-full border border-green-200 bg-white text-green-900 shadow-sm transition hover:scale-110 hover:bg-green-50 dark:border-green-800 dark:bg-[#1B3526] dark:text-green-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 8. FINAL CTA (Animated Gradient Background, Floating Particles, Button)    */
/* -------------------------------------------------------------------------- */
function FinalCTASection() {
  const reduceMotion = useReducedMotion();

  // Floating Particles configuration
  const particles = [
    { top: "15%", left: "10%", size: 6, delay: 0, duration: 6 },
    { top: "60%", left: "18%", size: 10, delay: 1.2, duration: 8 },
    { top: "25%", left: "80%", size: 8, delay: 0.5, duration: 7 },
    { top: "75%", left: "85%", size: 12, delay: 2, duration: 9 },
    { top: "40%", left: "5%", size: 7, delay: 3, duration: 7.5 },
    { top: "80%", left: "30%", size: 9, delay: 1.8, duration: 6.5 },
    { top: "20%", left: "45%", size: 6, delay: 2.5, duration: 8.5 },
    { top: "70%", left: "60%", size: 11, delay: 0.8, duration: 7 },
  ];

  return (
    <section className="relative mx-auto my-12 w-[92%] max-w-7xl overflow-hidden rounded-[2.5rem] p-1 shadow-2xl md:my-16">
      {/* Animated Gradient Background */}
      <div className="cta-animated-gradient relative overflow-hidden rounded-[2.3rem] px-6 py-14 text-center text-white md:px-12 md:py-20">
        {/* Floating Light Spheres / Ambient Glow */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-10 h-96 w-96 rounded-full bg-lime-300/20 blur-3xl" />

        {/* Animated Floating Particles */}
        {!reduceMotion &&
          particles.map((p, i) => (
            <motion.div
              key={i}
              className="pointer-events-none absolute rounded-full bg-emerald-200/50 blur-[1px]"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
              }}
              animate={{
                y: [-15, 15, -15],
                x: [-10, 10, -10],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* Content Container */}
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto max-w-4xl"
        >
          {/* Animated Sparkles Icon */}
          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    rotate: [0, 12, -12, 0],
                    scale: [1, 1.1, 1],
                  }
            }
            transition={{
              duration: 5,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-emerald-200 shadow-inner backdrop-blur-md"
          >
            <Sparkles size={34} />
          </motion.div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Explore Tenkasi?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-50/90 md:text-lg">
            Discover amazing places, find local experiences and
            start planning your next journey through Tenkasi.
          </p>

          {/* Interactive Button with Shimmer & Spring */}
          <div className="mt-8 flex justify-center">
            <motion.div
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      scale: 1.05,
                      boxShadow: "0 20px 35px -10px rgba(0, 0, 0, 0.4)",
                    }
              }
              whileTap={{ scale: 0.96 }}
            >
              <Link
                to="/places"
                className="cta-button-shimmer group inline-flex items-center justify-center gap-3 rounded-full bg-white px-9 py-4 text-base font-bold text-green-950 shadow-xl transition-colors duration-300 hover:bg-emerald-50"
              >
                <span>Explore Tourist Places</span>
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN ABOUT PAGE COMPONENT                                                  */
/* -------------------------------------------------------------------------- */
export default function About() {
  const [activeCard, setActiveCard] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="about-page overflow-hidden bg-[#F7FAF5] text-gray-800 dark:bg-[#10251A] dark:text-green-50"
    >
      <div className="w-full px-5 pt-6 md:px-10 lg:px-16">
        {/* 1. HERO SECTION */}
        <AboutHeroSection
          title="Discover the Beauty of Tenkasi"
          subtitle="From refreshing waterfalls and green mountains to rich traditions and local flavours, discover everything that makes Tenkasi special."
          image="/images/courtallam-hero.jpg"
        />

        {/* 2. WHO WE ARE */}
        <WhoWeAreSection />

        {/* 3. MISSION & VISION */}
        <MissionVisionSection
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />

        {/* 4. SERVICES */}
        <ServicesSection />

        {/* 5. WHY EXPLORE WITH US */}
        <WhyExploreSection />

        {/* 6. VISITOR REVIEWS */}
        <VisitorReviewsSlider />

        {/* 7. NATURE GALLERY */}
        <section className="py-20">
          <AboutSectionReveal>
            <div className="mb-10 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-green-100 text-green-800 shadow-sm dark:bg-green-900/80 dark:text-green-200">
                <Camera size={28} />
              </div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-300">
                Beautiful Places
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
                Experience the Nature of Tenkasi
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-green-100/70">
                Take a look at the landscapes, waterfalls and
                cultural places that make this region special.
              </p>
            </div>
          </AboutSectionReveal>

          <NatureGallery3DCoverflow images={galleryImages} />
        </section>
      </div>

      {/* 8. FINAL CTA */}
      <FinalCTASection />
    </motion.div>
  );
}
