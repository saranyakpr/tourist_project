
import React, { useMemo, useState, useEffect } from "react";
import Homenavbar from "../component/Homenavbar";
import Footer from "../component/Footer";

const packages = [
  {
    id: 1,
    name: "Courtallam Waterfall Escape",
    category: "Waterfalls",
    tag: "BEST SELLER",
    duration: "1 Day",
    price: 1299,
    rating: "4.9",
    location: "Courtallam",
    people: "2–6 People",
    image: "photo1.avif",
    description: "Discover the refreshing beauty of Courtallam, surrounded by lush greenery and beautiful waterfalls.",
    highlights: ["Main Falls", "Five Falls", "Old Courtallam", "Nature Photography"],
    itinerary: [
      ["07:00 AM", "Departure from Tenkasi"],
      ["08:00 AM", "Visit Courtallam Main Falls"],
      ["11:00 AM", "Explore Five Falls"],
      ["01:00 PM", "Lunch break"],
      ["03:00 PM", "Old Courtallam visit, subject to access"],
      ["05:00 PM", "Return to Tenkasi"]
    ]
  },
  {
    id: 2,
    name: "Western Ghats Adventure",
    category: "Nature",
    tag: "NATURE LOVER",
    duration: "2 Days",
    price: 3499,
    rating: "4.8",
    location: "Shenkottai",
    people: "2–8 People",
    image: "photo2.avif",
    description: "Escape into the peaceful mountain landscapes and beautiful green surroundings of the Western Ghats.",
    highlights: ["Mountain Views", "Gundar Dam Area", "Sunrise View", "Photography"],
    itinerary: [
      ["DAY 1 · 09:00 AM", "Start from Tenkasi"],
      ["DAY 1 · 12:00 PM", "Explore the Gundar Dam surroundings"],
      ["DAY 1 · 04:00 PM", "Sunset and photography"],
      ["DAY 2 · 06:00 AM", "Morning scenic drive"],
      ["DAY 2 · 11:00 AM", "Return towards Tenkasi"]
    ]
  },
  {
    id: 3,
    name: "Sacred Temple Trail",
    category: "Temples",
    tag: "CULTURAL PICK",
    duration: "1 Day",
    price: 1599,
    rating: "4.9",
    location: "Tenkasi",
    people: "2–10 People",
    image: "photo3.avif",
    description: "Experience the spiritual charm, ancient architecture and cultural heritage of Tenkasi.",
    highlights: ["Kasi Viswanathar Temple", "Kuttralanathar Temple", "Chitra Sabha Area", "Heritage Walk"],
    itinerary: [
      ["08:00 AM", "Meet at Tenkasi"],
      ["09:00 AM", "Visit Kasi Viswanathar Temple"],
      ["11:30 AM", "Explore heritage streets"],
      ["02:00 PM", "Visit Kuttralanathar Temple"],
      ["04:30 PM", "Return to Tenkasi"]
    ]
  },
  {
    id: 4,
    name: "Hidden Gems Discovery",
    category: "Hidden Gems",
    tag: "OFFBEAT ESCAPE",
    duration: "1 Day",
    price: 1899,
    rating: "4.7",
    location: "Gundar",
    people: "2–6 People",
    image: "photo4.avif",
    description: "Discover peaceful reservoir surroundings, scenic roads and lesser-known natural escapes.",
    highlights: ["Gundar Reservoir", "Adavinainar Dam Area", "Scenic Stops", "Picnic Time"],
    itinerary: [
      ["08:00 AM", "Departure from Tenkasi"],
      ["09:30 AM", "Explore Gundar surroundings"],
      ["12:00 PM", "Lunch break"],
      ["02:00 PM", "Visit Adavinainar Dam area"],
      ["04:30 PM", "Return to Tenkasi"]
    ]
  },
  {
    id: 5,
    name: "Tenkasi Family Holiday",
    category: "Family",
    tag: "FAMILY SPECIAL",
    duration: "2 Days",
    price: 4299,
    rating: "4.8",
    location: "Tenkasi District",
    people: "4–10 People",
    image: "photo5.avif",
    description: "Enjoy a relaxed family holiday with sightseeing, nature stops and memorable experiences.",
    highlights: ["Family Sightseeing", "Nature Stops", "Temple Visit Option", "Flexible Schedule"],
    itinerary: [
      ["DAY 1 · 09:00 AM", "Tenkasi town sightseeing"],
      ["DAY 1 · 12:00 PM", "Heritage and temple visit"],
      ["DAY 1 · 04:00 PM", "Scenic drive"],
      ["DAY 2 · 09:00 AM", "Optional waterfall visit"],
      ["DAY 2 · 03:00 PM", "Return journey"]
    ]
  },
  {
    id: 6,
    name: "The Grand Tenkasi Circuit",
    category: "All-in-One",
    tag: "ULTIMATE EXPERIENCE",
    duration: "3 Days",
    price: 6499,
    rating: "5.0",
    location: "Tenkasi District",
    people: "2–8 People",
    image: "photo6.avif",
    description: "One unforgettable journey through waterfalls, sacred temples, mountain views and hidden escapes.",
    highlights: ["Courtallam", "Temple Heritage", "Dam Views", "Nature Experiences"],
    itinerary: [
      ["DAY 1", "Tenkasi town and temple heritage"],
      ["DAY 2", "Explore Courtallam waterfall region"],
      ["DAY 3", "Scenic dam views and return journey"]
    ]
  }
];

const categories = [
  "All Packages",
  "Waterfalls",
  "Nature",
  "Temples",
  "Hidden Gems",
  "Family",
  "All-in-One"
];

const money = (price) => "₹" + price.toLocaleString("en-IN");

export default function Tourpackages() {
  const [category, setCategory] = useState("All Packages");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [saved, setSaved] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  // Prevent background scrolling when package modal is open
useEffect(() => {
  if (selected) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [selected]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    travellers: "2",
    packageName: "",
    message: ""
  });

  const filteredPackages = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    return packages.filter((item) => {
      const categoryMatch =
        category === "All Packages" || item.category === category;

      const searchMatch =
        !keyword ||
        `${item.name} ${item.location} ${item.category} ${item.description}`
          .toLowerCase()
          .includes(keyword);

      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const goToEnquiry = (packageName = "") => {
    setForm((old) => ({ ...old, packageName }));
    setSelected(null);
    document.getElementById("tp-enquiry")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const submitEnquiry = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleSaved = (id) => {
    setSaved((old) =>
      old.includes(id)
        ? old.filter((item) => item !== id)
        : [...old, id]
    );
  };

  return (
    <>
    <Homenavbar></Homenavbar>
    <main className="tp-page overflow-hidden bg-[#f7f8f1] text-[#1d3b2b]">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700;800&display=swap');

        .tp-page {
          font-family: 'DM Sans', sans-serif;
        }

        .tp-heading {
          font-family: 'Playfair Display', serif;
        }

        .tp-hero {
  min-height: 680px;
  height: 560px;
}

        .tp-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tp-animate {
          animation: tpAppear .8s ease both;
        }

        .tp-delay-1 { animation-delay: .15s; }
        .tp-delay-2 { animation-delay: .3s; }
        .tp-delay-3 { animation-delay: .45s; }

        .tp-float {
          animation: tpFloat 5s ease-in-out infinite;
        }

        .tp-card-image {
          transition: transform .8s cubic-bezier(.2,.7,.2,1);
        }

        .tp-card:hover .tp-card-image {
          transform: scale(1.09);
        }

        .tp-card {
          transition: transform .4s ease, box-shadow .4s ease;
        }

        .tp-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 25px 55px rgba(26,65,42,.14);
        }

        .tp-button {
          transition: all .3s ease;
        }

        .tp-button:hover {
          transform: translateY(-3px);
        }

        .tp-marquee {
          animation: tpMarquee 28s linear infinite;
        }

        .tp-modal {
          animation: tpModal .3s ease both;
        }

        @keyframes tpAppear {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes tpFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes tpMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes tpModal {
          from { opacity: 0; transform: translateY(20px) scale(.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .tp-page *, .tp-page *::before, .tp-page *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* HERO SECTION */}

      <section className="tp-hero relative isolate flex items-center bg-[#123b29] text-white">

        <video
          className="tp-hero-video -z-20"
          autoPlay
          muted
          loop
          playsInline
          poster="photo2.avif"
        >
          <source
            src="https://videos.pexels.com/video-files/3129595/3129595-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#092619]/95 via-[#123b29]/75 to-[#123b29]/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#102c20]/60 to-transparent" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-28 sm:px-8 lg:grid-cols-2 lg:px-12">

          <div className="tp-animate">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-[11px] font-bold uppercase tracking-[.2em] backdrop-blur-lg">
              <span className="h-2 w-2 rounded-full bg-[#cce8a7]" />
              Explore Tenkasi · Tamil Nadu
            </span>

            <h1 className="tp-heading mt-8 text-5xl font-bold leading-[1.12] sm:text-6xl lg:text-7xl">
              Your journey.
              <br />
              Your <span className="italic text-[#cce8a7]">kind of</span>
              <br />
              wonder.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              From magical waterfalls to peaceful mountain escapes,
              discover the beauty, culture and hidden stories of Tenkasi.
              Your next unforgettable journey starts here.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/tour-packages"
                className="tp-button rounded-full bg-[#d5edb7] px-8 py-4 text-sm font-extrabold text-[#183b29] shadow-xl"
              >
                Explore packages ↗
              </a>

              <a
                href="/planyourtrip"
                className="tp-button rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur"
              >
                Trip Type →
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-9 border-t border-white/20 pt-7">
              <div>
                <p className="text-2xl font-extrabold">06+</p>
                <p className="mt-1 text-xs text-white/60">Curated trips</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold">03</p>
                <p className="mt-1 text-xs text-white/60">Travel moods</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold">01</p>
                <p className="mt-1 text-xs text-white/60">Beautiful district</p>
              </div>
            </div>
          </div>

          <div className="relative hidden h-[470px] lg:block">
            <div className="tp-float absolute right-8 top-3 h-[410px] w-[300px] overflow-hidden rounded-[160px] border-[7px] border-white/20 shadow-2xl">
              <img
                src="photo4.avif"
                alt="Green mountain landscape"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="tp-float absolute bottom-0 left-0 w-60 rounded-3xl border border-white/30 bg-white/15 p-3 shadow-2xl backdrop-blur-xl" style={{ animationDelay: "1s" }}>
              <img
                src="ottakal.jpg"
                alt="Waterfall"
                className="h-32 w-full rounded-2xl object-cover"
              />
              <p className="tp-heading px-2 py-3 text-2xl">
                Find your escape.
              </p>
            </div>

            <div className="absolute right-0 top-0 rounded-full bg-[#d5edb7] px-5 py-3 text-xs font-extrabold uppercase tracking-widest text-[#183b29]">
              Take the scenic route
            </div>
          </div>

        </div>

        <a href="#tp-intro" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-[10px] font-bold uppercase tracking-[.3em] text-white/70">
          Scroll to discover
          <span className="mt-2 block text-xl">↓</span>
        </a>
      </section>

      {/* MOVING TEXT */}

      <div className="overflow-hidden border-b border-[#dce7d5] bg-[#eaf1e3] py-5">
        <div className="tp-marquee flex w-max gap-10 whitespace-nowrap text-xs font-extrabold uppercase tracking-[.25em] text-[#59765c]">
          {Array.from({ length: 2 }).map((_, i) => (
            <React.Fragment key={i}>
              {["Waterfall Adventures", "Mountain Escapes", "Temple Stories", "Hidden Gems", "Beautiful Memories"].map((word) => (
                <span key={word + i}>
                  {word} <span className="mx-5 text-[#a0b98a]">✳</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* INTRODUCTION */}

      <section id="tp-intro" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-end lg:px-12">

        <div className="tp-animate">
          <p className="text-xs font-extrabold uppercase tracking-[.25em] text-[#829b70]">
            More than just a destination
          </p>

          <h2 className="tp-heading mt-5 text-4xl leading-tight text-[#1d422e] sm:text-5xl">
            Tenkasi is a place
            <span className="block italic text-[#829b70]">to feel alive.</span>
          </h2>
        </div>

        <div className="tp-animate tp-delay-2">
          <p className="text-base leading-8 text-[#718174]">
            Let the Western Ghats set your pace. Wake up to fresh mountain
            air, explore beautiful waterfalls and discover the timeless
            heritage of Tenkasi. Choose a journey that matches your mood.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {["Thoughtful routes", "Nature experiences", "Flexible trips"].map((item) => (
              <span key={item} className="rounded-full border border-[#d8e4d1] bg-white px-4 py-3 text-xs font-bold text-[#567257]">
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EXPERIENCE */}

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
        <div className="tp-animate grid overflow-hidden rounded-[2rem] bg-[#173d2b] lg:grid-cols-2">

          <div className="min-h-[330px] overflow-hidden">
            <img
              src="lake.jpg"
              alt="Sunlight in a green forest"
              className="h-full min-h-[330px] w-full object-cover transition duration-1000 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-16">
            <p className="text-xs font-extrabold uppercase tracking-[.25em] text-[#cce8a7]">
              The Tenkasi experience
            </p>

            <h2 className="tp-heading mt-5 text-4xl leading-tight sm:text-5xl">
              Slow down.
              <br />
              Look around.
              <br />
              <span className="italic text-[#cce8a7]">Feel everything.</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/70">
              Every road has a story. Every destination has something
              special waiting for you.
            </p>

            <a href="#tp-packages" className="mt-8 w-fit border-b border-[#cce8a7] pb-2 text-sm font-bold text-[#d5edb7]">
              Discover your journey →
            </a>
          </div>
        </div>
      </section>

      {/* PACKAGE COLLECTION */}

      <section id="tp-packages" className="scroll-mt-20 bg-[#edf3e8] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="tp-animate flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.25em] text-[#829b70]">
                Made for your next adventure
              </p>

              <h2 className="tp-heading mt-4 text-4xl text-[#1d422e] sm:text-5xl">
                Choose your
                <span className="italic text-[#829b70]"> journey.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#718174]">
                Find your perfect escape from our handpicked travel experiences.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d8e4d1] bg-white px-6 py-4 text-sm text-[#718174]">
              <span className="text-xl font-extrabold text-[#214b34]">
                {filteredPackages.length}
              </span>{" "}
              experiences available
            </div>
          </div>

          {/* SEARCH */}

          <div className="tp-animate mt-10 flex flex-col gap-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full px-5 py-3 text-xs font-bold transition ${
                      category === item
                        ? "bg-[#214b34] text-white shadow-lg"
                        : "border border-[#d7e3d1] bg-white text-[#627765] hover:border-[#78946b] hover:text-[#214b34]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 rounded-full border border-[#d7e3d1] bg-white px-5 py-3.5 lg:w-72">
                <span className="text-xl text-[#829b70]">⌕</span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search destinations..."
                  className="w-full bg-transparent text-sm text-[#214b34] outline-none placeholder:text-[#9aa99b]"
                />
                {search && (
                  <button onClick={() => setSearch("")} type="button" className="text-xs font-bold text-[#78946b]">
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* PACKAGE CARDS */}

          {filteredPackages.length > 0 ? (
            <div className="mt-10 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">

              {filteredPackages.map((item, index) => (
                <article
                  key={item.id}
                  className="tp-card overflow-hidden rounded-[1.7rem] border border-[#dce6d7] bg-white shadow-[0_12px_40px_rgba(33,75,52,.06)]"
                  style={{ animation: `tpAppear .7s ease ${index * 100}ms both` }}
                >
                  <div className="group relative h-64 overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="tp-card-image h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                    <span className="absolute left-5 top-5 rounded-full bg-[#d5edb7] px-3 py-2 text-[10px] font-extrabold tracking-wider text-[#214b34]">
                      {item.tag}
                    </span>

                    <button
                      type="button"
                      onClick={() => toggleSaved(item.id)}
                      aria-label="Save package"
                      className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-black/20 text-xl text-white backdrop-blur"
                    >
                      {saved.includes(item.id) ? "♥" : "♡"}
                    </button>

                    <div className="absolute bottom-5 left-5 text-white">
                      <p className="text-xs text-white/75">{item.location}</p>
                      <h3 className="tp-heading mt-1 text-2xl font-bold">{item.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">

                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-[#89958a]">
                      <span>◷ {item.duration}</span>
                      <span>♧ {item.people}</span>
                      <span className="text-[#ad823e]">★ {item.rating}</span>
                    </div>

                    <p className="mt-5 min-h-[66px] text-sm leading-6 text-[#758276]">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.highlights.slice(0, 2).map((highlight) => (
                        <span key={highlight} className="rounded-full bg-[#f0f5eb] px-3 py-2 text-[10px] font-bold text-[#627965]">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-end justify-between border-t border-[#edf1e9] pt-5">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9aa79b]">
                          Starting price / person
                        </p>
                        <p className="mt-1 text-2xl font-extrabold text-[#214b34]">
                          {money(item.price)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelected(item)}
                        className="tp-button rounded-full bg-[#214b34] px-5 py-3 text-xs font-extrabold text-white"
                      >
                        Explore ↗
                      </button>
                    </div>
                  </div>
                </article>
              ))}

            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-dashed border-[#bdceb8] bg-white px-6 py-16 text-center">
              <div className="text-4xl">⌕</div>
              <h3 className="tp-heading mt-4 text-2xl text-[#214b34]">
                No journeys found
              </h3>
              <p className="mt-2 text-sm text-[#829084]">
                Try a different search or category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All Packages");
                }}
                className="mt-5 rounded-full bg-[#214b34] px-6 py-3 text-xs font-bold text-white"
              >
                Show all packages
              </button>
            </div>
          )}

          <p className="mt-8 text-center text-xs leading-6 text-[#8a998c]">
            Prices are illustrative starting estimates per person.
            Final rates, inclusions and destination access must be confirmed.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">

        <div className="tp-animate mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.25em] text-[#829b70]">
            Why travel with us
          </p>

          <h2 className="tp-heading mt-4 text-4xl text-[#1d422e] sm:text-5xl">
            More than a trip.
            <span className="italic text-[#829b70]"> A memory.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#718174]">
            We believe the best journeys are the ones you remember long after
            the journey ends.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            ["01", "Thoughtful journeys", "Explore carefully planned routes with room for spontaneous discoveries."],
            ["02", "Local experiences", "Discover the natural beauty and cultural character of Tenkasi."],
            ["03", "Flexible plans", "Tell us your group size and preferred date to discuss a suitable trip."]
          ].map(([number, title, description], index) => (
            <div
              key={number}
              className="tp-animate rounded-[1.7rem] border border-[#e0e8db] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <p className="tp-heading text-5xl italic text-[#a9c294]">{number}</p>
              <h3 className="tp-heading mt-7 text-2xl text-[#214b34]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#7b897d]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO / IMAGE BANNER */}

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="tp-animate relative mx-auto flex min-h-[400px] max-w-7xl items-center overflow-hidden rounded-[2rem] bg-[#153b29]">

          <img
            src="natureex1.jpg"
            alt="Beautiful forest landscape"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b291b]/95 via-[#0b291b]/65 to-transparent" />

          <div className="relative max-w-2xl px-8 py-16 sm:px-14">
            <p className="text-xs font-extrabold uppercase tracking-[.25em] text-[#d5edb7]">
              Your next adventure awaits
            </p>

            <h2 className="tp-heading mt-5 text-4xl leading-tight text-white sm:text-5xl">
              Take a break from ordinary.
              <span className="block italic text-[#d5edb7]">Find extraordinary.</span>
            </h2>

            <a
              href="#tp-enquiry"
              className="tp-button mt-9 inline-flex rounded-full bg-[#d5edb7] px-7 py-4 text-sm font-extrabold text-[#173b2a]"
            >
              Start planning ↗
            </a>
          </div>
        </div>
      </section>
      

      {/* ENQUIRY FORM */}

      <section id="tp-enquiry" className="scroll-mt-16 bg-[#eaf1e3] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:px-12">

          <div className="flex flex-col justify-center">
            <p className="text-xs font-extrabold uppercase tracking-[.25em] text-[#829b70]">
              Let's plan something beautiful
            </p>

            <h2 className="tp-heading mt-5 text-4xl leading-tight text-[#1d422e] sm:text-5xl">
              Your journey begins with
              <span className="italic text-[#829b70]"> one hello.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-[#718174]">
              Tell us your travel plans. Share your preferred date, group size
              and destination. Let's start planning your Tenkasi experience.
            </p>

            <div className="mt-9 space-y-4 text-sm text-[#607565]">
              <p>✦ Choose your favourite package</p>
              <p>✦ Share your travel date</p>
              <p>✦ Ask about a custom trip</p>
            </div>
          </div>

          <form
            onSubmit={submitEnquiry}
            className="rounded-[2rem] border border-[#dce6d7] bg-white p-6 shadow-xl sm:p-9"
          >

            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e8f3dd] text-3xl text-[#315d3e]">
                  ✓
                </div>
                <h3 className="tp-heading mt-6 text-3xl text-[#214b34]">
                  Thank you, {form.name}!
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#7b897d]">
                  Your demo enquiry has been submitted on this page.
                  Connect a backend or form service to receive actual enquiries.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full bg-[#214b34] px-7 py-3 text-sm font-bold text-white"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#8aa07f]">
                  Trip enquiry
                </p>

                <h3 className="tp-heading mt-2 text-3xl text-[#214b34]">
                  Tell us your plan.
                </h3>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                  <label className="text-xs font-bold text-[#607565]">
                    Your name *
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={updateForm}
                      placeholder="Enter your name"
                      className="tp-input"
                    />
                  </label>

                  <label className="text-xs font-bold text-[#607565]">
                    Mobile number *
                    <input
                      required
                      name="phone"
                      type="tel"
                      pattern="[0-9+ ()-]{8,18}"
                      value={form.phone}
                      onChange={updateForm}
                      placeholder="Your contact number"
                      className="tp-input"
                    />
                  </label>

                  <label className="text-xs font-bold text-[#607565]">
                    Email address
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={updateForm}
                      placeholder="you@example.com"
                      className="tp-input"
                    />
                  </label>

                  <label className="text-xs font-bold text-[#607565]">
                    Travel date *
                    <input
                      required
                      name="date"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={form.date}
                      onChange={updateForm}
                      className="tp-input"
                    />
                  </label>

                  <label className="text-xs font-bold text-[#607565]">
                    Number of travellers
                    <select
                      name="travellers"
                      value={form.travellers}
                      onChange={updateForm}
                      className="tp-input"
                    >
                      {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </label>

                  <label className="text-xs font-bold text-[#607565]">
                    Select package
                    <select
                      name="packageName"
                      value={form.packageName}
                      onChange={updateForm}
                      className="tp-input"
                    >
                      <option value="">Choose a package</option>
                      {packages.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                      <option value="Custom trip">Custom trip</option>
                    </select>
                  </label>

                  <label className="text-xs font-bold text-[#607565] sm:col-span-2">
                    Additional message
                    <textarea
                      rows="4"
                      name="message"
                      value={form.message}
                      onChange={updateForm}
                      placeholder="Tell us about your travel preferences..."
                      className="tp-input resize-y"
                    />
                  </label>

                </div>

                <button
                  type="submit"
                  className="tp-button mt-7 w-full rounded-full bg-[#214b34] px-7 py-4 text-sm font-extrabold text-white shadow-lg"
                >
                  Submit your enquiry ↗
                </button>

                <p className="mt-4 text-center text-[10px] text-[#9aa79b]">
                  Demo form. Connect a backend to receive and store enquiries.
                </p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#153b29] px-5 py-12 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
          <div>
            <h2 className="tp-heading text-3xl">Tenkasi, your way.</h2>
            <p className="mt-2 text-sm text-white/55">
              Nature · Heritage · Beautiful journeys
            </p>
          </div>

          <a
            href="#tp-packages"
            className="tp-button w-fit rounded-full border border-white/30 px-6 py-3 text-sm font-bold hover:bg-white hover:text-[#153b29]"
          >
            Back to packages ↑
          </a>
        </div>

        <div className="mx-auto mt-9 max-w-7xl border-t border-white/15 pt-5 text-xs text-white/40">
          © {new Date().getFullYear()} Tenkasi Tourism. All rights reserved.
        </div>
      </footer>

      {/* PACKAGE DETAILS MODAL */}

      
      {/* PACKAGE DETAILS MODAL */}

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071b12]/80 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} package details`}
            className="tp-modal max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[1.7rem] bg-[#fbfcf9] shadow-2xl"
          >
            {/* MODAL HERO */}

            <div className="relative h-60 sm:h-80">
              <img
                src={selected.image}
                alt={selected.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071b12]/90 via-black/20 to-black/10" />

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/40 text-2xl text-white backdrop-blur"
                aria-label="Close details"
              >
                ×
              </button>

              <div className="absolute bottom-7 left-6 right-6 text-white sm:left-9">
                <span className="inline-block rounded-full bg-[#d5edb7] px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-[#214b34]">
                  {selected.tag}
                </span>

                <p className="mt-4 text-xs font-bold uppercase tracking-[.2em] text-white/75">
                  {selected.category} · {selected.duration}
                </p>

                <h3 className="tp-heading mt-2 text-3xl font-bold sm:text-5xl">
                  {selected.name}
                </h3>

                <p className="mt-3 text-sm text-white/80">
                  📍 {selected.location} · ★ {selected.rating}/5
                </p>
              </div>
            </div>

            {/* MAIN CONTENT */}

            <div className="grid gap-9 p-5 sm:p-8 lg:grid-cols-[1fr_280px]">

              {/* LEFT CONTENT */}

              <div className="min-w-0">

                {/* OVERVIEW */}

                <section>
                  <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#91a47f]">
                    Discover this journey
                  </p>

                  <h4 className="tp-heading mt-2 text-3xl text-[#214b34]">
                    Package overview
                  </h4>

                  <p className="mt-4 text-sm leading-8 text-[#718174]">
                    {selected.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      ["◷", "Duration", selected.duration],
                      ["♧", "Group size", selected.people],
                      ["⌖", "Destination", selected.location],
                      ["★", "Guest rating", `${selected.rating}/5`]
                    ].map(([icon, label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-[#e1e9dc] bg-white p-4"
                      >
                        <span className="text-xl text-[#829b70]">{icon}</span>
                        <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-[#9aa79b]">
                          {label}
                        </p>
                        <p className="mt-1 text-xs font-extrabold text-[#315d3e]">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* HIGHLIGHTS */}

                <section className="mt-10">
                  <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#91a47f]">
                    What makes it special
                  </p>

                  <h4 className="tp-heading mt-2 text-2xl text-[#214b34]">
                    Experience highlights
                  </h4>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {selected.highlights.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl bg-[#edf3e8] p-4"
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-sm text-[#64835b]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-semibold text-[#557354]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ITINERARY */}

                <section className="mt-10">
                  <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#91a47f]">
                    Your journey, step by step
                  </p>

                  <h4 className="tp-heading mt-2 text-2xl text-[#214b34]">
                    Your itinerary
                  </h4>

                  <div className="relative mt-6 space-y-6">
                    <div className="absolute bottom-3 left-[15px] top-3 w-px bg-[#dce8d4]" />

                    {selected.itinerary.map(([time, activity], index) => (
                      <div key={`${time}-${index}`} className="relative flex gap-4">
                        <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border-4 border-[#fbfcf9] bg-[#dcebd0] text-[10px] font-extrabold text-[#315d3e]">
                          {index + 1}
                        </span>

                        <div className="flex-1 rounded-xl border border-[#e7ede2] bg-white p-4">
                          <p className="text-xs font-extrabold text-[#78946b]">
                            {time}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#637467]">
                            {activity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* INCLUSIONS */}

                <section className="mt-10 rounded-2xl border border-[#dce9d5] bg-[#f0f6eb] p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-xl text-[#52794b]">
                      ✓
                    </span>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#829b70]">
                        What you get
                      </p>
                      <h4 className="tp-heading text-2xl text-[#214b34]">
                        What's included?
                      </h4>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Planned sightseeing itinerary",
                      "Listed destination visits",
                      "Trip planning assistance",
                      "Basic travel guidance",
                      "Suggested photo stops",
                      "Group travel coordination"
                    ].map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-[#607565]">
                        <span className="font-extrabold text-[#6c965d]">✓</span>
                        {item}
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 border-t border-[#dce8d4] pt-4 text-[10px] leading-6 text-[#879487]">
                    These are proposed package inclusions. Transport, tickets,
                    meals and other services are included only if confirmed
                    in the final booking.
                  </p>
                </section>

                {/* EXCLUSIONS */}

                <section className="mt-5 rounded-2xl border border-[#eee3d8] bg-[#fbf7f1] p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-xl text-[#ad8057]">
                      ×
                    </span>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#ad987e]">
                        Know before booking
                      </p>
                      <h4 className="tp-heading text-2xl text-[#72563e]">
                        What's not included?
                      </h4>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Personal shopping expenses",
                      "Food and refreshments",
                      "Entry tickets unless specified",
                      "Private vehicle upgrades",
                      "Extra activities outside the itinerary",
                      "Personal travel insurance"
                    ].map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-[#806e5c]">
                        <span className="font-bold text-[#b28c65]">×</span>
                        {item}
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 border-t border-[#eee3d8] pt-4 text-[10px] leading-6 text-[#9b8976]">
                    Anything not specifically listed under confirmed inclusions
                    should be treated as an additional expense.
                  </p>
                </section>

                {/* TRAVEL TIPS */}

                <section className="mt-10">
                  <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#91a47f]">
                    Prepare for your adventure
                  </p>

                  <h4 className="tp-heading mt-2 text-2xl text-[#214b34]">
                    Travel tips & essentials
                  </h4>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      ["🎒", "Carry essentials", "Water bottle, personal medicines and a small backpack."],
                      ["👟", "Comfortable footwear", "Choose suitable footwear for walking and uneven paths."],
                      ["👕", "Extra clothing", "Carry an extra set of clothes for outdoor and waterfall visits."],
                      ["📷", "Capture memories", "Bring your camera or phone with enough battery."],
                      ["🌦️", "Check the weather", "Check local weather and destination access before travelling."],
                      ["🧴", "Personal care", "Carry sunscreen, towels and other personal essentials."]
                    ].map(([icon, title, description]) => (
                      <div
                        key={title}
                        className="flex gap-3 rounded-xl border border-[#e5ecdf] bg-white p-4"
                      >
                        <span className="text-2xl">{icon}</span>
                        <div>
                          <h5 className="text-sm font-bold text-[#426449]">{title}</h5>
                          <p className="mt-1 text-xs leading-6 text-[#849184]">
                            {description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* IMPORTANT INFORMATION */}

                <section className="mt-10 rounded-2xl bg-[#214b34] p-6 text-white">
                  <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#cce8a7]">
                    Before you set off
                  </p>

                  <h4 className="tp-heading mt-2 text-2xl">
                    Important travel information
                  </h4>

                  <ul className="mt-5 space-y-3 text-sm leading-7 text-white/75">
                    <li>✦ Follow local instructions and destination safety rules.</li>
                    <li>✦ Waterfall access and bathing permissions may change depending on weather and official restrictions.</li>
                    <li>✦ Respect temples, local customs and protected natural areas.</li>
                    <li>✦ Keep the surroundings clean and avoid littering.</li>
                    <li>✦ Confirm the final itinerary, transport and ticket details before payment.</li>
                  </ul>
                </section>

                {/* FAQ */}

                <section className="mt-10">
                  <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#91a47f]">
                    Need to know?
                  </p>

                  <h4 className="tp-heading mt-2 text-2xl text-[#214b34]">
                    Frequently asked questions
                  </h4>

                  <div className="mt-5 space-y-3">
                    {[
                      [
                        "Can I customise this package?",
                        "Yes. You can send an enquiry with your preferred date, group size and travel requirements to discuss a customised plan."
                      ],
                      [
                        "Are meals and transport included?",
                        "They are not automatically included. Please confirm the final package inclusions before booking."
                      ],
                      [
                        "Can children and families join?",
                        "Suitability depends on the selected destinations and local safety conditions. Please mention the ages of children in your enquiry."
                      ],
                      [
                        "What happens if a destination is closed?",
                        "Access may change due to weather or official restrictions. Confirm available alternatives with the trip organiser."
                      ],
                      [
                        "How can I confirm my trip?",
                        "Submit the enquiry form with your contact details and preferred date. Confirm the final price and booking terms before making payment."
                      ]
                    ].map(([question, answer]) => (
                      <details
                        key={question}
                        className="group rounded-xl border border-[#e3eadd] bg-white p-4"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-[#426449]">
                          {question}
                          <span className="text-lg text-[#829b70] transition-transform group-open:rotate-45">
                            +
                          </span>
                        </summary>

                        <p className="mt-3 border-t border-[#edf1e9] pt-3 text-xs leading-7 text-[#7b897d]">
                          {answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>

              </div>

              {/* RIGHT PRICE & BOOKING CARD */}

              <aside className="h-fit rounded-2xl border border-[#e0e9d9] bg-[#edf3e8] p-5 md:sticky md:top-4 sm:p-6">

                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#81947f]">
                  Your journey awaits
                </p>

                <p className="mt-3 text-4xl font-extrabold text-[#214b34]">
                  {money(selected.price)}
                </p>

                <p className="mt-1 text-xs text-[#879487]">
                  Starting estimate · per person
                </p>

                <div className="my-6 border-t border-[#d8e3d2]" />

                <h4 className="text-sm font-extrabold text-[#47634b]">
                  At a glance
                </h4>

                <div className="mt-4 space-y-4 text-xs text-[#748574]">
                  <div className="flex justify-between gap-2">
                    <span>Destination</span>
                    <span className="text-right font-bold text-[#47634b]">{selected.location}</span>
                  </div>

                  <div className="flex justify-between gap-2">
                    <span>Duration</span>
                    <span className="font-bold text-[#47634b]">{selected.duration}</span>
                  </div>

                  <div className="flex justify-between gap-2">
                    <span>Group size</span>
                    <span className="font-bold text-[#47634b]">{selected.people}</span>
                  </div>

                  <div className="flex justify-between gap-2">
                    <span>Category</span>
                    <span className="text-right font-bold text-[#47634b]">{selected.category}</span>
                  </div>

                  <div className="flex justify-between gap-2">
                    <span>Rating</span>
                    <span className="font-bold text-[#ad823e]">★ {selected.rating}/5</span>
                  </div>
                </div>

                <div className="my-6 border-t border-[#d8e3d2]" />

                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs font-bold text-[#47634b]">
                    Need a custom experience?
                  </p>
                  <p className="mt-2 text-[11px] leading-6 text-[#89978a]">
                    Tell us your preferred travel date and group size. We can discuss a suitable plan.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => goToEnquiry(selected.name)}
                  className="tp-button mt-5 w-full rounded-full bg-[#214b34] px-4 py-4 text-xs font-extrabold text-white shadow-lg"
                >
                  Enquire about this trip ↗
                </button>

                <button
                  type="button"
                  onClick={() => toggleSaved(selected.id)}
                  className="mt-3 w-full rounded-full border border-[#cbdcc3] bg-white px-4 py-3 text-xs font-bold text-[#557354]"
                >
                  {saved.includes(selected.id) ? "♥ Saved to favourites" : "♡ Save this package"}
                </button>

                <p className="mt-4 text-center text-[10px] leading-5 text-[#8b9a8b]">
                  Prices are estimates. Final rates, availability, inclusions and booking conditions must be confirmed.
                </p>
              </aside>

            </div>

            {/* MODAL BOTTOM */}

            <div className="border-t border-[#e5ecdf] bg-[#f0f5eb] px-6 py-5 text-center">
              <p className="tp-heading text-xl text-[#315d3e]">
                Make your next journey a beautiful memory.
              </p>
              <p className="mt-2 text-xs text-[#849184]">
                Explore Tenkasi · Discover nature · Create memories
              </p>
            </div>

          </div>
        </div>
      )}

      

    </main>
    <Footer></Footer>
    </>
  );

}
