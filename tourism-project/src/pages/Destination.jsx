
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Homenavbar from "../component/Homenavbar";
import Footer from "../component/Footer"

const destinations = [
  {
    id: 1,
    category: "NATURE ESCAPES",
    title: "Into the Green",
    description:
      "Escape into peaceful hills, scenic landscapes and refreshing natural surroundings.",
    places: ["Western Ghats", "Manimuthar"],
    image: "/intoo1.jpg",
   
  },
  {
    id: 2,
    category: "WATERFALL WONDERS",
    title: "Chasing Waterfalls",
    description:
      "Feel the refreshing mist and discover the beautiful waterfalls of the Courtallam region.",
    places: ["Main Falls", "Five Falls", "Old Courtallam", "Tiger Falls"],
    image: "/fall1.jpg",
   
  },
  {
    id: 3,
    category: "SACRED TRAILS",
    title: "A Journey of Faith",
    description:
      "Explore beautiful temples, ancient architecture and the spiritual heritage of Tenkasi.",
    places: ["Kasi Viswanathar Temple", "Thirumalai Kovil",  "Mountain Temple"],
    image: "/temp1.avif",
    
  },
  {
    id: 4,
    category: "DAM",
    title: "Beyond the Ordinary",
    description:
      "Discover quieter corners, scenic viewpoints and memorable places away from the usual routes.",
    places: ["Gundar Dam","Ramanathi Dam","Mekkarai Dam","Thenmalai Dam"],
    image: "/bey1.avif",
    
  },
  {
    id: 5,
    category: "NATURE ESCAPES",
    title: "Peaceful Landscapes",
    description:
      "Enjoy calm surroundings, green landscapes and relaxing outdoor experiences.",
    places: ["Sunflower Garden", "Ottakal viewpoints", "Anniyan Parai Viewpoint","Karuppanadhi" ],
    image:
      "/natureex1.jpg",
    
  },
  {
    id: 8,
    category: "HIDDEN GEMS",
    title: "Offbeat Discoveries",
    description:
      "Find beautiful surroundings and peaceful places for a memorable getaway.",
    places: ["North Maasi Street", "Municipal Market","Swami sannathi Bazaar","Amman Sannathi Bazaar"],
    image:
      "/natureex2.jpg",
    
  },
];

const categories = [
  "ALL",
  "NATURE ESCAPES",
  "WATERFALL WONDERS",
  "SACRED TRAILS",
  "HIDDEN GEMS",
];

export default function Destination() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Search and category filtering
  const filteredDestinations = destinations.filter((place) => {
    const matchesCategory =
      activeCategory === "ALL" ||
      place.category === activeCategory;

    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      place.title.toLowerCase().includes(searchText) ||
      place.category.toLowerCase().includes(searchText) ||
      place.description.toLowerCase().includes(searchText) ||
      place.places.some((spot) =>
        spot.toLowerCase().includes(searchText)
      );

    return matchesCategory && matchesSearch;
  });

  // Show first four or all matching destinations
  const visibleDestinations = showAll
    ? filteredDestinations
    : filteredDestinations.slice(0, 3);

  // Reset filters
  const clearFilters = () => {
    setSearch("");
    setActiveCategory("ALL");
    setShowAll(false);
  };

  return (
    <>
    <Homenavbar></Homenavbar>
    <main className="destination-page">
      {/* PAGE ANIMATIONS */}
      <style>{`
        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slowZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.09);
          }
        }

        @keyframes floatDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(9px);
          }
        }

        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .destination-hero-text {
          animation: heroReveal 1s ease both;
        }

        .destination-hero-video {
          animation: slowZoom 18s ease-in-out infinite alternate;
        }

        .destination-scroll {
          animation: floatDown 1.8s ease-in-out infinite;
        }

        .destination-card {
          animation: cardReveal .7s ease both;
        }

        .destination-card:nth-child(2) {
          animation-delay: .08s;
        }

        .destination-card:nth-child(3) {
          animation-delay: .16s;
        }

        .destination-card:nth-child(4) {
          animation-delay: .24s;
        }

        .destination-card:hover .destination-image {
          transform: scale(1.09);
        }

        .destination-image {
          transition: transform .8s cubic-bezier(.2,.7,.2,1);
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}

      <section className="relative flex min-h-[650px] h-screen items-center justify-center overflow-hidden bg-[#183b2b] text-white">

        {/* Background Video */}
        <video
          className="destination-hero-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/fall1.jpg"
        >
          <source
            src="/video/tenkasi.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-[#102c20]/45 to-[#102c20]/80" />

        {/* Hero Content */}
        <div className="destination-hero-text relative z-10 mx-auto max-w-5xl px-5 text-center">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-xs font-semibold tracking-[3px] text-white backdrop-blur-md sm:text-sm">
            <span className="text-green-300">✦</span>
            WELCOME TO TENKASI
            <span className="text-green-300">✦</span>
          </div>

          <p className="mb-4 text-sm font-medium tracking-[5px] text-green-100 sm:text-base">
            WHERE NATURE MEETS PEACE
          </p>

          <h1 className="font-serif text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
            Discover the
            <span className="mt-2 block italic text-[#d5edbd]">
              Beauty of Tenkasi
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/85 sm:text-base md:text-lg">
            From breathtaking waterfalls and misty mountains
            to sacred temples and hidden treasures,
            let Tenkasi become your next unforgettable journey.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="#explore-destinations"
              className="rounded-full bg-[#d8edc5] px-8 py-4 text-sm font-bold text-[#244333] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Explore Destinations
              <span className="ml-2">↓</span>
            </a>

            <Link
              to="/tour-packages"
              className="rounded-full border border-white/70 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#244333]"
            >
              Discover Packages →
            </Link>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-7 text-xs font-medium tracking-wider text-white/80 sm:gap-12">
            <span>🌿 GREEN ESCAPES</span>
            <span>💧 WATERFALLS</span>
            <span>🛕 HERITAGE</span>
          </div>

        </div>

        {/* Scroll Button */}
        <a
          href="#explore-destinations"
          aria-label="Scroll to destinations"
          className="destination-scroll absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-center text-white/80"
        >
          <span className="block text-[10px] tracking-[4px]">
            SCROLL
          </span>
          <span className="mt-2 block text-2xl">↓</span>
        </a>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#d8edc5] to-transparent" />

      </section>

      {/* ================= DESTINATION CONTENT ================= */}

      <section
        id="explore-destinations"
        className="bg-[#f7f8ef] px-5 py-20 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mb-14 text-center">

            <p className="mb-3 text-xs font-bold tracking-[4px] text-green-700 sm:text-sm">
              ✦ EXPLORE TENKASI ✦
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#244333] md:text-6xl">
              Find Your Kind of Escape
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-gray-600 sm:text-base">
              Every destination has a story. Discover misty
              waterfalls, peaceful landscapes, timeless temples
              and beautiful hidden places waiting for you.
            </p>

          </div>

          {/* Search Bar */}
          <div className="mx-auto mb-8 max-w-xl">

            <div className="flex items-center gap-3 rounded-full border border-green-100 bg-white px-5 py-4 shadow-sm transition focus-within:border-green-500 focus-within:shadow-md">

              <span className="text-xl">⌕</span>

              <input
                type="text"
                placeholder="Search destinations, temples, waterfalls..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowAll(false);
                }}
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setShowAll(false);
                  }}
                  className="font-bold text-green-700"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}

            </div>

          </div>

          {/* Category Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
                className={`rounded-full px-5 py-3 text-xs font-bold tracking-wide transition duration-300 ${
                  activeCategory === category
                    ? "bg-[#315b42] text-white shadow-lg"
                    : "border border-green-200 bg-white text-[#315b42] hover:-translate-y-1 hover:bg-green-100"
                }`}
              >
                {category === "ALL" ? "All Places" : category}
              </button>
            ))}

          </div>

          {/* Result Count */}
          <div className="mb-6 flex items-center justify-between">

            <p className="text-sm font-semibold text-[#315b42]">
              Explore Destinations
            </p>

            <p className="text-xs text-gray-500">
              {filteredDestinations.length} places found
            </p>

          </div>

          {/* Destination Cards */}
          {visibleDestinations.length > 0 ? (

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {visibleDestinations.map((place) => (

                <article
                  key={place.id}
                  className="destination-card group flex h-full flex-col overflow-hidden rounded-[25px] border border-[#e9eee3] bg-white shadow-[0_8px_30px_rgba(36,67,51,0.07)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(36,67,51,0.15)]"
                >

                  {/* Card Image */}
                  <div className="relative h-64 overflow-hidden bg-[#e4eddf]">

                    <img
                      src={place.image}
                      alt={place.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/fall1.jpg";
                      }}
                      className="destination-image h-full w-full object-cover"
                    />

                    {place.category === "WATERFALL WONDERS" && (
                      <div className="waterfall-shimmer pointer-events-none absolute inset-0" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/90 px-3 py-2 text-[10px] font-bold tracking-wider text-green-800">
                      {place.category}
                    </span>

                    <span className="absolute bottom-4 right-4 text-3xl drop-shadow-lg">
                      {place.icon}
                    </span>

                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-6">

                    <h3 className="text-xl font-bold text-[#315b42]">
                      {place.title}
                    </h3>

                    <p className="mt-3 min-h-[100px] text-sm leading-7 text-gray-600">
                      {place.description}
                    </p>

                    {/* Places List */}
                    <div className="mt-4 border-t border-gray-100 pt-4">

                      <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-green-700">
                        Places to explore
                      </p>

                      <div className="flex flex-wrap gap-2">

                        {place.places.map((spot) => (
                          <span
                            key={spot}
                            className="rounded-full bg-[#edf4e9] px-3 py-2 text-xs font-medium text-[#315b42]"
                          >
                            {spot}
                          </span>
                        ))}

                      </div>

                    </div>

                    {/* Explore Link */}
                   
<Link
  to={
    place.id === 1 ? "/into-green" :
    place.id === 2 ? "/chasing-waterfalls" :
    place.id === 3 ? "/journey" :
    place.id === 4 ? "/dam" :
    place.id === 5 ? "/peaceful-landscapes" :
    place.id === 8 ? "/shopping" :
    "/destination"
  }
  className="mt-auto inline-flex items-center gap-2 pt-6 font-bold text-[#547c4e] transition-all duration-300 hover:gap-4"
>
  Explore Places
  <span>→</span>
</Link>


                  </div>

                </article>

              ))}

            </div>

          ) : (

            /* No Results */
            <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm">

              <p className="text-4xl">🔎</p>

              <h3 className="mt-4 text-xl font-bold text-[#315b42]">
                No destinations found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another place name or select a different category.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 rounded-full bg-[#315b42] px-6 py-3 text-sm font-bold text-white transition hover:bg-green-800"
              >
                Clear Filters
              </button>

            </div>

          )}

          {/* View More / View Less */}
          {filteredDestinations.length > 3 && (

            <div className="mt-12 text-center">

              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="rounded-full border-2 border-[#315b42] px-8 py-3 font-bold text-[#315b42] transition duration-300 hover:bg-[#315b42] hover:text-white"
              >
                {showAll
                  ? "View Less ↑"
                  : "View More Destinations ↓"}
              </button>

            </div>

          )}

          {/* ================= BOTTOM CTA ================= */}

          <div className="relative mt-24 overflow-hidden rounded-[35px] bg-[#244d38] px-7 py-14 md:px-14 md:py-20">

            {/* Background Decorations */}
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-10 -top-14 h-60 w-60 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-green-300/10 blur-3xl" />

            <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">

              {/* LEFT CONTENT */}
              <div className="max-w-xl">

                <p className="text-xs font-bold tracking-[4px] text-[#c5e9a5]">
                  DISCOVER THE MAGIC OF TENKASI
                </p>

                <h3 className="mt-5 font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Little places.
                  <br />
                  <span className="italic text-[#c5e9a5]">
                    Big memories.
                  </span>
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-8 text-green-100 md:text-base">
                  From the refreshing waterfalls of Courtallam to peaceful
                  mountain views and ancient temples, Tenkasi has a beautiful
                  story waiting for you.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">

                  <Link
                    to="/tour-packages"
                    className="inline-flex items-center gap-3 rounded-full bg-[#dff0c9] px-8 py-4 font-bold text-[#244d38] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white"
                  >
                    Explore Tour Packages
                    <span className="text-lg">→</span>
                  </Link>

                  <span className="text-sm text-green-100">
                    Your Tenkasi adventure awaits
                  </span>

                </div>

              </div>

              {/* RIGHT FLOATING IMAGES */}
              <div className="relative mx-auto mt-4 h-[340px] w-full max-w-[420px] sm:h-[370px] md:mt-0 md:h-[390px]">

                {/* Main Image */}
                <div className="tenkasi-float-one absolute right-5 top-5 h-[220px] w-[175px] overflow-hidden rounded-[90px] border-4 border-white/20 shadow-2xl md:right-12 md:h-[270px] md:w-[205px]">

                  <img
                    src="/fall1.jpg"
                    alt="Courtallam waterfall"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* Small Left Image */}
                <div className="tenkasi-float-two absolute left-2 top-20 h-[145px] w-[145px] overflow-hidden rounded-[25px] border-4 border-white/20 shadow-2xl md:left-5 md:h-[165px] md:w-[165px]">

                  <img
                    src="/fall2.jpg"
                    alt="Beautiful waterfall in Tenkasi"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* Bottom Image */}
                <div className="tenkasi-float-three absolute bottom-0 right-16 h-[125px] w-[165px] overflow-hidden rounded-[25px] border-4 border-white/20 shadow-2xl md:bottom-0 md:right-20 md:h-[145px] md:w-[185px]">

                  <img
                    src="/temp1.avif"
                    alt="Tenkasi destination"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* Floating Labels */}
                <div className="absolute left-0 top-5 rounded-full bg-[#e2f0d6] px-4 py-2 text-xs font-bold text-[#315b42] shadow-lg md:left-4">
                  Nature escapes
                </div>

                <div className="absolute bottom-5 left-0 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                  Explore Tenkasi
                </div>

              </div>

            </div>

          </div>

        </div>
      
      </section>

    </main>
    <Footer></Footer>
  
    </>
  );
}
