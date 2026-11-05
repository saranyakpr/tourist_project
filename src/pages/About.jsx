
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
  ArrowRight,
  Waves,
  Landmark,
  Trees,
  Star,
} from "lucide-react";

import AnimatedHero from "../components/AnimatedHero";
import ScrollReveal from "../components/ScrollReveal";
import ImageCarousel from "../components/ImageCarousel";

// Add actual client reviews here.
// Do not add example or fictional customer reviews.
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

export default function About() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="overflow-hidden bg-[#F7FAF5] text-gray-800 dark:bg-[#10251A] dark:text-green-50">

      <div className="w-full px-5 pt-6 md:px-10 lg:px-16">

        {/* HERO */}
        <AnimatedHero
          title="Discover the Beauty of Tenkasi"
          subtitle="From refreshing waterfalls and green mountains to rich traditions and local flavours, discover everything that makes Tenkasi special."
          image="/images/courtallam-hero.jpg"
        />

        {/* WHO WE ARE */}
        <section className="grid items-center gap-10 py-20 md:grid-cols-2 md:gap-16">

          <ScrollReveal>
            <div className="group relative overflow-hidden rounded-3xl">
              <img
                src="/images/tenkasi-nature.jpg"
                alt="Beautiful green nature in Tenkasi"
                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110 md:h-[440px]"
              />

              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-4 shadow-lg backdrop-blur">
                <p className="font-bold text-green-800">
                  Explore Tenkasi
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Nature • Culture • Experiences
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-300">
                About Our Platform
              </p>

              <h2 className="mb-6 text-3xl font-extrabold leading-tight md:text-4xl">
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

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
                  <Waves className="mr-2 inline" size={16} />
                  Waterfalls
                </span>
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
                  <Mountain className="mr-2 inline" size={16} />
                  Nature
                </span>
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
                  <Landmark className="mr-2 inline" size={16} />
                  Heritage
                </span>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* MISSION & VISION */}
        <section className="py-16">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-300">
                What Guides Us
              </p>

              <h2 className="text-3xl font-extrabold md:text-4xl">
                Our Mission & Vision
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-green-100/70">
                Our purpose is to make Tenkasi easier to discover
                and more enjoyable to explore.
              </p>

              <p className="mt-3 text-sm text-green-700 dark:text-green-300">
                Click a card to discover more
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-7 md:grid-cols-2">
            {missionVision.map((item, index) => {
              const Icon = item.icon;
              const isOpen = activeCard === index;

              return (
                <ScrollReveal key={item.title} delay={index * 0.15}>
                  <motion.button
                    type="button"
                    onClick={() =>
                      setActiveCard(isOpen ? null : index)
                    }
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full rounded-3xl border p-8 text-left shadow-sm transition-all duration-300 ${
                      isOpen
                        ? "border-green-600 bg-green-800 text-white shadow-xl"
                        : "border-green-100 bg-white text-gray-800 hover:border-green-400 hover:shadow-xl dark:border-green-900 dark:bg-[#1B3526] dark:text-green-50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`grid h-16 w-16 place-items-center rounded-2xl ${
                          isOpen
                            ? "bg-white/15 text-green-100"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        }`}
                      >
                        <Icon size={32} />
                      </div>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={25} />
                      </motion.div>
                    </div>

                    <h3 className="mt-7 text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 leading-7 ${
                        isOpen
                          ? "text-green-50/85"
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
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-5 border-t border-white/20 pt-5 leading-8 text-green-50/90">
                            {item.details}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <p
                      className={`mt-6 text-sm font-bold ${
                        isOpen
                          ? "text-green-100"
                          : "text-green-700 dark:text-green-300"
                      }`}
                    >
                      {isOpen ? "Show less" : "Read more"}
                    </p>
                  </motion.button>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-300">
                Explore With Us
              </p>

              <h2 className="text-3xl font-extrabold md:text-4xl">
                What Services Do We Provide?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-green-100/70">
                Everything you need to discover destinations,
                explore local experiences and plan your Tenkasi trip.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <ScrollReveal key={service.title} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group h-full rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition hover:shadow-xl dark:border-green-900 dark:bg-[#1B3526]"
                  >
                    <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-green-100 text-green-800 transition duration-300 group-hover:rotate-6 group-hover:bg-green-800 group-hover:text-white dark:bg-green-900 dark:text-green-200">
                      <Icon size={30} />
                    </div>

                    <h3 className="mb-3 text-xl font-bold">
                      {service.title}
                    </h3>

                    <p className="leading-7 text-gray-600 dark:text-green-100/70">
                      {service.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* WHY EXPLORE WITH US */}
        <section className="rounded-[2rem] bg-[#EAF4E8] px-5 py-16 dark:bg-[#193525] md:px-10 md:py-20">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-300">
                Your Journey, Made Easier
              </p>

              <h2 className="text-3xl font-extrabold md:text-4xl">
                Why Explore With Us?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-green-100/70">
                Discover more, plan better and experience the
                special charm of Tenkasi.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <ScrollReveal key={reason.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="h-full rounded-2xl bg-white p-7 shadow-sm transition hover:shadow-xl dark:bg-[#244532]"
                  >
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      <Icon size={27} />
                    </div>

                    <h3 className="mb-3 text-lg font-bold">
                      {reason.title}
                    </h3>

                    <p className="text-sm leading-7 text-gray-600 dark:text-green-100/70">
                      {reason.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* VISITOR TESTIMONIALS */}
        <section className="py-20">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-300">
                Visitor Experiences
              </p>

              <h2 className="text-3xl font-extrabold md:text-4xl">
                What Our Visitors Say
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-green-100/70">
                Every journey creates a memory. Discover what our
                visitors have to say about their Tenkasi experience.
              </p>
            </div>
          </ScrollReveal>

          {testimonials.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((review, index) => (
                <motion.div
                  key={review.name + index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.25 },
                  }}
                  className="group relative flex h-full flex-col rounded-2xl border border-green-100 bg-transparent p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-green-900"
                >
                  {/* Customer Name and Avatar */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-green-100 text-lg font-bold text-green-800 dark:bg-green-900 dark:text-green-200">
                      {review.name.charAt(0).toUpperCase()}
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-bold text-gray-800 dark:text-green-50">
                        {review.name}
                      </h3>

                      <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                        {review.place}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="mb-4 flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={17}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}

                    <span className="ml-2 text-sm font-semibold text-gray-600 dark:text-green-100/70">
                      {review.rating}.0 / 5
                    </span>
                  </div>

                  {/* Customer Experience */}
                  <div className="flex-1 border-t border-green-100 pt-4 dark:border-green-900">
                    <p className="text-sm leading-7 text-gray-600 dark:text-green-100/75">
                      "{review.review}"
                    </p>
                  </div>

                  {/* Bottom Hover Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-green-600 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-gray-500 dark:text-green-100/60">
              Visitor reviews will appear here.
            </p>
          )}
        </section>

        {/* NATURE GALLERY */}
        <section className="py-20">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <Camera className="mx-auto mb-4 text-green-700 dark:text-green-300" size={38} />

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-300">
                Beautiful Places
              </p>

              <h2 className="text-3xl font-extrabold md:text-4xl">
                Experience the Nature of Tenkasi
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-green-100/70">
                Take a look at the landscapes, waterfalls and
                cultural places that make this region special.
              </p>
            </div>
          </ScrollReveal>

          <ImageCarousel images={galleryImages} />
        </section>

      </div>

      {/* FULL-WIDTH CTA */}
      <section className="relative mx-auto my-10 w-[92%] max-w-7xl overflow-hidden rounded-3xl bg-green-900 px-5 py-10 text-center text-white md:my-14 md:px-10 md:py-14">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-green-400 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-lime-300 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl"
        >
          <Sparkles className="mx-auto mb-5 text-green-200" size={42} />

          <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
            Ready to Explore Tenkasi?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-50/80">
            Discover amazing places, find local experiences and
            start planning your next journey through Tenkasi.
          </p>

          <Link
            to="/places"
            className="mt-6 inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full bg-white px-8 py-3 font-bold text-green-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-100 hover:shadow-2xl"
          >
            Explore Tourist Places
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
