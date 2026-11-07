
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const foods = [
  {
    id: 1,
    name: "Senkottai Border Parotta",
    category: "Main Course",
    description:
      "Border parotta is a popular local favourite, usually served with salna or spicy gravy.",
    location: "Sengottai, Tenkasi",
    image: "/images/senkottai%20border%20parotta.jpg",
  },
  {
    id: 2,
    name: "Chilli Parotta & Kothu Parotta",
    category: "Main Course",
    description:
      "Popular at roadside hotels in Courtallam and Tenkasi town.",
    location: "Courtallam, Tenkasi",
    image: "/images/chilli-parotta.jpg",
  },
  {
    id: 3,
    name: "Naatu Kozhi Kuzhambu & Varuval",
    category: "Main Course",
    description:
      "Country chicken curry and fry, spicy and rich in the southern Tamil Nadu style.",
    location: "Tenkasi Region",
    image: "/images/Naatu Kozhi Kuzhambu & Varuval.jpg",
  },
  {
    id: 4,
    name: "Mutton Chukka",
    category: "Main Course",
    description: "A spicy, flavourful dry mutton dish to try in the region.",
    location: "Tenkasi",
    image: "/images/Mutton%20Chukka.jpg",
  },
  {
    id: 5,
    name: "Kadayanallur Biryani",
    category: "Biryani",
    description:
      "Kadayanallur is known for its Muslim-style biryani and non-veg dishes.",
    location: "Kadayanallur",
    image: "/images/Kadayanallur%20Biryani.jpg",
  },
  {
    id: 6,
    name: "Puliyankudi Lemon Pickle",
    category: "Local Special",
    description:
      "Puliyankudi is famous for its lemons, pickles and lemon products.",
    location: "Puliyankudi",
    image: "/images/Puliyankudi%20Lemon%20Pickle.jpg",
  },
  {
    id: 7,
    name: "Karupatti Coffee & Sweets",
    category: "Drinks",
    description:
      "Palm-jaggery coffee and sweets are a local favourite, especially in the evening.",
    location: "Tenkasi Region",
    image: "/images/Karupatti Coffee & Sweets.webp",
  },
  {
    id: 8,
    name: "Banana Chips & Local Snacks",
    category: "Snacks",
    description:
      "Find banana chips and local snacks in small shops around Sengottai and Tenkasi.",
    location: "Sengottai, Tenkasi",
    image: "/images/Banana Chips & Local Snacks.jpg",
  },
];

const categories = [
  "All Foods",
  "Main Course",
  "Biryani",
  "Snacks",
  "Drinks",
  "Local Special",
];

// Hero slideshow images
const heroSlides = foods.slice(0, 5);

// Food gallery images
const galleryFoods = [
  foods[0],
  foods[4],
  foods[7],
  foods[6],
];

export default function TasteTrails() {
  const [activeCategory, setActiveCategory] = useState("All Foods");
  const [search, setSearch] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  const [gallerySlide, setGallerySlide] = useState(0);

  const foodSectionRef = useRef(null);

  // Hero automatic slideshow - 4 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide(
        (currentSlide) => (currentSlide + 1) % heroSlides.length
      );
    }, 4000);

    return () => clearInterval(slideInterval);
  }, []);

  // Food gallery automatic slideshow - 1 second
  useEffect(() => {
    const galleryInterval = setInterval(() => {
      setGallerySlide(
        (current) => (current + 1) % galleryFoods.length
      );
    }, 1000);

    return () => clearInterval(galleryInterval);
  }, []);

  // Food search and category filter
  const filteredFoods = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return foods.filter((food) => {
      const matchesCategory =
        activeCategory === "All Foods" ||
        food.category === activeCategory;

      const searchableText =
        `${food.name} ${food.description} ${food.location}`.toLowerCase();

      return matchesCategory && searchableText.includes(searchText);
    });
  }, [activeCategory, search]);

  const currentSlide = heroSlides[activeSlide];

  // Scroll to food section
  const exploreFoods = () => {
    setActiveCategory("All Foods");
    setSearch("");

    foodSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Select category and scroll
  const exploreCategory = (category) => {
    setActiveCategory(category);
    setSearch("");

    foodSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50 text-slate-900">

      {/* ================= HERO SECTION ================= */}

      <section className="bg-gradient-to-r from-green-50 via-white to-green-100">

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 md:grid-cols-2 md:px-8 md:py-16">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 font-bold uppercase tracking-widest text-green-700">
              Taste Trails • Tenkasi
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Discover the
              <span className="mt-2 block italic text-[#d5edbd]">
                Beauty of Tenkasi
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              From border parotta to Karupatti coffee, explore traditional
              dishes, local snacks and flavours of the Tenkasi region.
            </p>
          </motion.div>

          {/* Automatic Hero Slideshow */}

          <div className="relative">

            <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-xl md:h-80">

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide.id}
                  src={currentSlide.image}
                  alt={currentSlide.name}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-6 pt-12">

                <p className="text-sm font-medium text-white/80">
                  Explore local favourites
                </p>

                <p className="text-xl font-bold text-white">
                  {currentSlide.name}
                </p>

              </div>

              {/* Slideshow Indicators */}

              <div className="absolute right-4 top-4 flex gap-2">

                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      activeSlide === index
                        ? "w-7 bg-white"
                        : "w-2.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}

              </div>
            </div>

            <div className="absolute -bottom-4 left-4 rounded-2xl bg-white px-5 py-3 shadow-lg">

              <p className="text-sm text-slate-500">
                Taste Trails
              </p>

              <p className="font-bold text-green-800">
                Taste Tenkasi
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ================= FOOD SECTION ================= */}

      <section
        ref={foodSectionRef}
        className="mx-auto max-w-7xl scroll-mt-6 px-5 py-10 md:px-8"
      >

        {/* Search and Category Filters */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-wrap gap-2">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 ${
                  activeCategory === category
                    ? "border-green-700 bg-green-700 text-white shadow-md"
                    : "border-green-200 bg-white text-green-800 hover:bg-green-50"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search food or location..."
            className="w-full rounded-full border border-slate-300 px-5 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 lg:max-w-sm"
          />

        </div>

        {/* Existing Food Cards */}

        <motion.div
          layout
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >

          <AnimatePresence mode="popLayout">

            {filteredFoods.map((food, index) => (
              <motion.article
                layout
                key={food.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
              >

                <div className="relative h-48 overflow-hidden bg-green-50">

                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.35 }}
                    src={food.image}
                    alt={food.name}
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-green-800 shadow">
                    {food.category}
                  </span>

                </div>

                <div className="p-4">

                  <h2 className="text-lg font-bold leading-snug">
                    {food.name}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {food.description}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-green-800">
                    <span aria-hidden="true">⌖ </span>
                    {food.location}
                  </p>

                </div>

              </motion.article>
            ))}

          </AnimatePresence>

        </motion.div>

        {filteredFoods.length === 0 && (
          <p className="py-12 text-center text-slate-600">
            No matching food found. Try another search or category.
          </p>
        )}

      </section>

      {/* ================= EXPLORE MORE BANNER ================= */}

      <section className="overflow-hidden px-5 py-12 md:px-8 md:py-16">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-gradient-to-r from-green-950 via-emerald-900 to-green-800 shadow-2xl"
        >

          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />

          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-lime-300/10 blur-3xl" />

          <div className="relative grid items-center gap-8 p-7 sm:p-10 md:grid-cols-2 md:p-14">

            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >

              <p className="font-bold uppercase tracking-[0.2em] text-lime-300">
                Discover More • Taste More
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                Your Food Journey
                <span className="block text-lime-300">
                  Doesn't End Here!
                </span>
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-green-100">
                Discover the authentic taste of Tenkasi.
                From traditional favourites to local specialities,
                every dish has a story to tell.
              </p>

              <motion.button
                type="button"
                onClick={exploreFoods}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.96 }}
                className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-bold text-green-900 shadow-lg transition hover:bg-lime-200"
              >
                Explore More Foods

                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                  }}
                >
                  →
                </motion.span>

              </motion.button>

            </motion.div>

            {/* Banner Image */}

            <motion.div
              initial={{ opacity: 0, x: 45, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative"
            >

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-[25px] border-4 border-white/20 shadow-2xl"
              >

                <motion.img
                  src="/images/Kadayanallur%20Biryani.jpg"
                  alt="Traditional Kadayanallur Biryani"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  className="h-64 w-full object-cover sm:h-80"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16">

                  <p className="text-sm font-medium text-white/80">
                    A taste of tradition
                  </p>

                  <h3 className="mt-1 text-xl font-extrabold text-white">
                    Taste the Tenkasi Special
                  </h3>

                </div>

              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -bottom-4 -left-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-5"
              >

                <p className="text-xs text-slate-500">
                  Local Favourite
                </p>

                <p className="font-extrabold text-green-800">
                  Made with Tradition
                </p>

              </motion.div>

            </motion.div>

          </div>
        </motion.div>

      </section>

      {/* ================= FOOD GALLERY SLIDESHOW ================= */}

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">

        {/* Gallery Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-9 text-center"
        >

          <p className="font-bold uppercase tracking-[0.2em] text-green-700">
            A Culinary Journey
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            A Taste Worth{" "}
            <span className="text-green-700">Remembering</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            Explore the special flavours and traditional food
            experiences of the Tenkasi region.
          </p>

        </motion.div>

        {/* Animated Slideshow */}

        <motion.div
          initial={{ opacity: 0, y: 65, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-4xl"
        >

          <div className="relative h-[300px] overflow-hidden rounded-3xl shadow-2xl sm:h-[430px]">

            <AnimatePresence mode="wait">

              <motion.img
                key={galleryFoods[gallerySlide].id}
                src={galleryFoods[gallerySlide].image}
                alt={galleryFoods[gallerySlide].name}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 h-full w-full object-cover"
              />

            </AnimatePresence>

            {/* Dark Overlay */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            {/* Food Details */}

            <AnimatePresence mode="wait">

              <motion.div
                key={galleryFoods[gallerySlide].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 right-0 p-6 sm:p-10"
              >

                <p className="text-sm font-bold uppercase tracking-wider text-lime-300">
                  {galleryFoods[gallerySlide].category}
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-4xl">
                  {galleryFoods[gallerySlide].name}
                </h3>

                <p className="mt-2 text-sm text-white/80 sm:text-base">
                  {galleryFoods[gallerySlide].location}
                </p>

              </motion.div>

            </AnimatePresence>

            {/* Slideshow Indicators */}

            <div className="absolute right-5 top-5 flex gap-2">

              {galleryFoods.map((food, index) => (

                <button
                  key={food.id}
                  type="button"
                  onClick={() => setGallerySlide(index)}
                  aria-label={`Show ${food.name}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    gallerySlide === index
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/60 hover:bg-white"
                  }`}
                />

              ))}

            </div>

            {/* Slide Counter */}

            

          </div>

        </motion.div>

        {/* Bottom Text */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-7 text-center text-sm font-medium text-slate-500"
        >
          Discover the authentic taste of Tenkasi, one dish at a time.
        </motion.p>

      </section>

      {/* ================= ANIMATED FOOTER ================= */}

      <footer className="relative mt-10 overflow-hidden bg-[#103D2C] text-white">

        {/* Decorative Background */}

        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">

          
{/* Footer Heading */}
<div className="mb-12 grid items-center gap-8 border-b border-white/20 pb-9 md:grid-cols-2">
  <motion.div
    initial={{ opacity: 0, x: -35 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
      Taste Trails • Tenkasi
    </p>

    <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
      Discover Taste
      <span className="block text-lime-300">Explore</span>
    </h2>

    <p className="mt-4 max-w-xl text-base leading-7 text-green-100/80">
      Every flavour tells a story. Experience the traditional food culture
      of Tenkasi with TasteTrails.
    </p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 35, scale: 0.95 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="overflow-hidden rounded-2xl shadow-xl"
  >
    <motion.img
      src="/images/Kadayanallur%20Biryani.jpg"
      alt="Kadayanallur Biryani"
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.5 }}
      className="h-52 w-full object-cover sm:h-64"
    />
  </motion.div>
</div>

          {/* Footer Columns */}

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <h3 className="text-2xl font-extrabold">
                Taste<span className="text-lime-300">Trails</span>
              </h3>

              <p className="mt-4 max-w-xs text-sm leading-7 text-green-100/80">
                Your guide to traditional dishes, local snacks
                and unforgettable flavours of Tenkasi.
              </p>

              <p className="mt-5 text-sm font-semibold text-lime-300">
                Taste the tradition!
              </p>

            </motion.div>

            {/* Explore */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >

              <h3 className="text-lg font-bold">
                Explore
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-green-100/80">

               

                <li>
                  <button
                    type="button"
                    onClick={exploreFoods}
                    className="transition hover:translate-x-1 hover:text-lime-300"
                  >
                    Explore Foods
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => exploreCategory("Local Special")}
                    className="transition hover:translate-x-1 hover:text-lime-300"
                  >
                    Local Specials
                  </button>
                </li>

              </ul>

            </motion.div>

            {/* Food Categories */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >

              <h3 className="text-lg font-bold">
                Food Categories
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-green-100/80">

                {categories.slice(1).map((category) => (

                  <li key={category}>

                    <button
                      type="button"
                      onClick={() => exploreCategory(category)}
                      className="transition hover:translate-x-1 hover:text-lime-300"
                    >
                      {category}
                    </button>

                  </li>

                ))}

              </ul>

            </motion.div>

            {/* Location */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.36 }}
            >

              <h3 className="text-lg font-bold">
                Discover Tenkasi
              </h3>

              <p className="mt-5 text-sm leading-7 text-green-100/80">
                Explore the local food culture of:
              </p>

              <ul className="mt-3 space-y-3 text-sm text-green-100/80">

                <li>⌖ Tenkasi</li>
                <li>⌖ Courtallam</li>
                <li>⌖ Kadayanallur</li>
                <li>⌖ Sengottai</li>

              </ul>

            </motion.div>

          </div>

          {/* Footer Bottom */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-7 text-center sm:flex-row sm:text-left"
          >

            <p className="text-sm text-green-100/70">
              © 2026 TasteTrails. All rights reserved.
            </p>

            <p className="text-sm font-semibold text-lime-300">
              Made to celebrate the flavours of Tenkasi.
            </p>

          </motion.div>

        </div>

      </footer>

    </main>
  );
}
