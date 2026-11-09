
import React from "react";
import { Link } from "react-router-dom";
import Homenavbar from "../component/Homenavbar";
import Footer from "../component/Footer"

const waterfalls = [
  {
    name: "Main Falls",
    location: "Courtallam",
    category: "THE FAMOUS FALLS",
    description:
      "Experience the refreshing beauty of Courtallam Main Falls, surrounded by scenic hills and natural greenery.",
    image: "/mainfalll.jpg",
    number: "01",
  },
  {
    name: "Five Falls",
    location: "Courtallam",
    category: "FIVE STREAMS OF BEAUTY",
    description:
      "Discover the unique beauty of five separate streams flowing through a beautiful natural setting.",
    image: "/fivefalls.jpg",
    number: "02",
  },
  {
    name: "Old Courtallam",
    location: "Old Courtallam",
    category: "NATURE'S REFRESHMENT",
    description:
      "Enjoy a peaceful waterfall experience with beautiful surroundings and refreshing natural scenery.",
    image: "/mainfalll1.jpg",
    number: "03",
  },
  {
    name: "Tiger Falls",
    location: "Courtallam",
    category: "A HIDDEN WATER ESCAPE",
    description:
      "Explore another beautiful waterfall destination and enjoy the charm of flowing water and greenery.",
    image: "/tiger.jpg",
    number: "04",
  },
];

export default function Chasingwaterfalls() {
  return (
    <>
    <Homenavbar></Homenavbar>
    <div className="min-h-screen overflow-hidden bg-[#f6f8ef] text-[#294333]">

      {/* HERO IMAGE ZOOM ANIMATION */}
      <style>{`
        @keyframes waterfallHeroZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.12);
          }
        }

        .waterfall-hero-image {
          animation: waterfallHeroZoom 18s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">

        {/* Only this hero image will zoom */}
        <img
          src="/natureex5.jpg"
          alt="Beautiful waterfall surrounded by greenery"
          className="waterfall-hero-image absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#102b20]/80 via-[#102b20]/45 to-transparent" />

        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full border border-white/20 animate-pulse" />
        <div className="absolute -right-8 top-32 h-52 w-52 rounded-full border border-white/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">

          <p className="mb-6 text-sm font-bold uppercase tracking-[5px] text-[#d5e8bd]">
            Waterfall Wonders · Tenkasi
          </p>

          <h1 className="max-w-4xl text-5xl font-serif font-bold leading-tight text-white md:text-7xl">
            Chasing Waterfalls,
            <span className="block font-light italic text-[#d5edbd]">
              Finding Nature's Magic.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/85 md:text-lg">
            Follow the sound of flowing water and discover
            the refreshing waterfalls of Tenkasi. Every fall
            has its own beauty, charm and unforgettable experience.
          </p>

          <a
            href="#waterfalls"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#e1edcf] px-8 py-4 font-bold text-[#294333] transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Explore Waterfalls
            <span className="text-xl">↗</span>
          </a>

          <div className="mt-16 flex flex-wrap gap-10 text-white">
            <div>
              <h3 className="text-3xl font-bold">Flow</h3>
              <p className="mt-1 text-sm text-white/65">Natural beauty</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Refresh</h3>
              <p className="mt-1 text-sm text-white/65">Fresh experiences</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Explore</h3>
              <p className="mt-1 text-sm text-white/65">Beautiful falls</p>
            </div>
          </div>

        </div>

        <div className="absolute bottom-8 right-10 hidden animate-bounce text-white/80 md:block">
          SCROLL TO EXPLORE ↓
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">

        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-[4px] text-[#829b70]">
              Listen to nature
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Where water flows,
              <span className="block font-light italic text-[#78966b]">
                beautiful memories begin.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-[#788477]">
              Tenkasi is well known for its beautiful waterfalls
              and refreshing natural surroundings. The sound
              of flowing water, green landscapes and scenic
              mountain views make every visit special.
            </p>

            <p className="mt-4 leading-8 text-[#788477]">
              From the popular Courtallam waterfalls to
              peaceful natural escapes, discover the refreshing
              side of Tenkasi.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-[2px] w-14 bg-[#78966b]" />
              <span className="text-sm font-semibold italic text-[#78966b]">
                Let the water lead your journey
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">

            <div className="absolute -right-5 -top-5 h-full w-full rounded-[30px] border-2 border-[#b5c8a3]" />

            <img
              src="/natureex6.jpg"
              alt="Water flowing through green nature"
              className="relative h-[420px] w-full rounded-[30px] object-cover shadow-xl transition duration-700 hover:scale-[1.02]"
            />

            <div className="absolute -bottom-7 -left-5 rounded-2xl bg-white px-7 py-5 shadow-xl">
              <p className="text-2xl font-bold text-[#315b42]">
                Water Wonders
              </p>
              <p className="mt-1 text-xs tracking-widest text-[#829080]">
                FEEL THE FRESHNESS
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WATERFALL DESTINATIONS */}
      <section id="waterfalls" className="bg-[#edf2e5] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[4px] text-[#829b70]">
              Discover the flowing beauty
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Waterfall Wonders
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#788477]">
              Explore the beautiful waterfalls of Tenkasi
              and experience the magic of nature's flowing water.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">

            {waterfalls.map((fall) => (
              <article
                key={fall.number}
                className="group relative min-h-[460px] overflow-hidden rounded-[30px] shadow-lg"
              >
                <img
                  src={fall.image}
                  alt={fall.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10291c]/95 via-[#10291c]/20 to-transparent" />

                {/* Small category pill */}
                <div className="absolute left-6 top-6 rounded-full border border-white/50 bg-white/15 px-3 py-1.5 text-[9px] font-bold tracking-[2px] text-white backdrop-blur-md">
                  {fall.category}
                </div>

                <div className="absolute right-7 top-6 text-5xl font-bold text-white/50">
                  {fall.number}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">

                  <p className="text-sm font-medium tracking-wider text-[#d5e8bd]">
                    {fall.location}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                    {fall.name}
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-white/80">
                    {fall.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[3px] text-white/65">
                      EXPLORE {fall.number}
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 text-2xl transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#315b42]">
                      ↗
                    </span>
                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#829b70]">
            Nature's refreshing moments
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Feel the Flow
          </h2>
        </div>

        <div className="grid h-auto gap-5 md:h-[450px] md:grid-cols-3">

          <div className="group relative h-[300px] overflow-hidden rounded-[25px] md:col-span-2 md:h-full">
            <img
              src="/natureex5.jpg"
              alt="Waterfall in the forest"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-7 left-7 text-2xl font-bold text-white">
              Nature's Waterfall
            </p>
          </div>

          <div className="grid gap-5 md:grid-rows-2">

            <div className="group relative h-[220px] overflow-hidden rounded-[25px] md:h-full">
              <img
                src="/intoo1.jpg"
                alt="Water and mountain landscape"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-5 left-5 text-xl font-bold text-white">
                Scenic Views
              </p>
            </div>

            <div className="group relative h-[220px] overflow-hidden rounded-[25px] md:h-full">
              <img
                src="/natureex2.jpg"
                alt="Green forest"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-5 left-5 text-xl font-bold text-white">
                Green Escapes
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative mx-6 mb-20 mt-16 overflow-hidden rounded-[35px] bg-[#315b42] px-6 py-20 text-center text-white md:mx-auto md:max-w-7xl md:px-16 md:py-24">

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">

          <p className="text-xs font-bold uppercase tracking-[3px] text-[#d5e8bd] md:text-sm md:tracking-[5px]">
            Your waterfall adventure awaits
          </p>

          <h2 className="mt-7 max-w-3xl text-3xl font-bold leading-[1.25] md:text-5xl md:leading-[1.2]">
            Follow the water. Discover the beauty of Tenkasi.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
            Experience refreshing waterfalls, beautiful landscapes
            and unforgettable moments in the heart of nature.
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">

            <Link
              to="/tour-packages"
              className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full bg-[#e1edcf] px-8 py-4 font-bold text-[#294333] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Explore Tour Packages <span>→</span>
            </Link>

            <Link
              to="/destination"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/50 px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Explore Destinations ↗
            </Link>

          </div>
        </div>
      </section>

    </div>
    <Footer></Footer>
    </>
  );
}
