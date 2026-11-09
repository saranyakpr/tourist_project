
import React from "react";
import { Link } from "react-router-dom";
import Homenavbar from "../component/Homenavbar";
import Footer from "../component/Footer"

const hiddenPlaces = [
  {
    name: "Ramanathi Dam",
    location: "Near Kadayam",
    category: "Hidden Water Escape",
    description:
      "Discover a peaceful reservoir surrounded by green hills and beautiful natural scenery.",
    image:
      "hid4.jpg",
    number: "01",
  },
  {
    name: "Mekkarai",
    location: "Tenkasi Region",
    category: "Countryside Beauty",
    description:
      "A scenic countryside destination with mountain views, fresh air and peaceful surroundings.",
    image:
      "adavi.jpg",
    number: "02",
  },
  {
    name: "Gundar Dam",
    location: "Near Courtallam",
    category: "Nature Retreat",
    description:
      "Enjoy the charm of calm waters, green landscapes and the beauty of the Western Ghats.",
    image:
      "hid3.avif",
    number: "03",
  },
  {
    name: "Thenmalai Dam",
    location: "Near Tenkasi",
    category: "Hill Side Escape",
    description:
      "Explore beautiful hill surroundings and experience the peaceful charm of this region.",
    image:
      "hid6.jpg",
    number: "04",
  },
];

export default function Dam() {
  return (
    <>
    <Homenavbar></Homenavbar>
    <div className="min-h-screen overflow-hidden bg-[#f6f8ef] text-[#294333]">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">

        <img
  src="hid1.jpg"
  alt="Beautiful hidden mountain destination"
  className="absolute inset-0 h-full w-full object-cover animate-[damZoom_16s_ease-in-out_infinite_alternate]"
/>

        <div className="absolute inset-0 bg-gradient-to-r from-[#102b20]/80 via-[#102b20]/45 to-transparent" />

        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full border border-white/20 animate-pulse" />
        <div className="absolute -right-8 top-32 h-52 w-52 rounded-full border border-white/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
          <p className="mb-6 text-sm font-bold uppercase tracking-[5px] text-[#d5e8bd]">
            Beyond the Ordinary · Tenkasi
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Hidden Places,
            <span className="block font-light italic text-[#d5e8bd]">
              Endless Discoveries.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/85 md:text-lg">
            Not every beautiful place is found on a map.
            Discover the unexplored corners, quiet landscapes
            and secret natural escapes of Tenkasi.
          </p>

          <a
            href="#discover"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#e1edcf] px-8 py-4 font-bold text-[#294333] transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Discover Hidden Gems
            <span className="text-xl">↗</span>
          </a>

          <div className="mt-16 flex flex-wrap gap-10 text-white">
            <div>
              <h3 className="text-3xl font-bold">Nature</h3>
              <p className="mt-1 text-sm text-white/65">Beautiful escapes</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Peace</h3>
              <p className="mt-1 text-sm text-white/65">Quiet surroundings</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Explore</h3>
              <p className="mt-1 text-sm text-white/65">New experiences</p>
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
              The unexplored side
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Some places are
              <span className="block font-light italic text-[#78966b]">
                meant to be discovered.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-[#788477]">
              Away from the busy tourist spots, Tenkasi has
              many beautiful corners waiting to be explored.
              From peaceful reservoirs to scenic countryside
              routes, every journey brings a new experience.
            </p>

            <p className="mt-4 leading-8 text-[#788477]">
              Take a different road, explore at your own pace
              and discover the natural beauty beyond the usual
              destinations.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-[2px] w-14 bg-[#78966b]" />
              <span className="text-sm font-semibold italic text-[#78966b]">
                Explore beyond the ordinary
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">

            <div className="absolute -right-5 -top-5 h-full w-full rounded-[30px] border-2 border-[#b5c8a3]" />

            <img
              src="hid2.jpg"
              alt="Peaceful nature escape"
              className="relative h-[420px] w-full rounded-[30px] object-cover shadow-xl transition duration-700 hover:scale-[1.02]"
            />

            <div className="absolute -bottom-7 -left-5 rounded-2xl bg-white px-7 py-5 shadow-xl">
              <p className="text-2xl font-bold text-[#315b42]">
                Discover
              </p>
              <p className="mt-1 text-xs tracking-widest text-[#829080]">
                THE HIDDEN BEAUTY
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* HIDDEN DESTINATIONS */}
      <section id="discover" className="bg-[#edf2e5] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[4px] text-[#829b70]">
              Secret corners of Tenkasi
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Explore Hidden Gems
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#788477]">
              Discover beautiful places that make your journey
              more special, peaceful and unforgettable.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">

            {hiddenPlaces.map((place) => (
              <article
                key={place.number}
                className="group relative min-h-[460px] overflow-hidden rounded-[30px] shadow-lg"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10291c]/95 via-[#10291c]/20 to-transparent" />

                <div className="absolute left-6 top-6 rounded-full border border-white/50 bg-white/15 px-5 py-2 text-xs font-bold tracking-widest text-white backdrop-blur-md">
                  {place.category}
                </div>

                <div className="absolute right-7 top-6 text-5xl font-bold text-white/50">
                  {place.number}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">

                  <p className="text-sm font-medium tracking-wider text-[#d5e8bd]">
                    {place.location}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                    {place.name}
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-white/80">
                    {place.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[3px] text-white/65">
                      DISCOVER THE BEAUTY
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

      {/* FLOATING IMAGE STRIP */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">

        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-[4px] text-[#829b70]">
              Your next adventure
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Take the road
              <span className="block font-light italic text-[#78966b]">
                less travelled.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[#788477]">
              Sometimes the most memorable journeys begin
              when you leave the usual path. Explore the hidden
              beauty of Tenkasi and create your own adventure.
            </p>

            <Link
              to="/tour-packages"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#315b42] px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#426f50]"
            >
              Plan Your Journey →
            </Link>
          </div>

          <div className="relative h-[420px]">

            <img
              src="hid7.jpg"
              alt="Mountain escape"
              className="absolute left-0 top-4 h-64 w-[65%] rounded-[25px] object-cover shadow-xl transition duration-500 hover:-translate-y-3"
            />

            <img
              src="hid8.jpg"
              alt="Lake and mountains"
              className="absolute bottom-0 right-0 h-64 w-[65%] rounded-[25px] border-8 border-[#f6f8ef] object-cover shadow-xl transition duration-500 hover:translate-y-3"
            />

            <div className="absolute right-5 top-0 flex h-20 w-20 animate-bounce items-center justify-center rounded-full bg-[#dce9c5] text-3xl shadow-lg">
              ✦
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
<section className="relative mx-6 mb-16 overflow-hidden rounded-[35px] bg-[#315b42] px-7 py-20 text-center text-white md:mx-auto md:max-w-7xl">

  {/* Background Decorations */}
  <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
  <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full border border-white/10" />

  <div className="relative z-10">

    <p className="text-sm font-bold uppercase tracking-[4px] text-[#d5e8bd]">
      Your story starts here
    </p>

    <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
      The beauty of Tenkasi is waiting to be discovered.
    </h2>

    <p className="mx-auto mt-6 max-w-xl leading-8 text-white/75">
      Explore the unexplored, enjoy the journey and
      make memories beyond the ordinary.
    </p>

    {/* BUTTONS */}
    <div className="mt-10 flex flex-wrap items-center justify-center gap-5">

      {/* Tour Packages */}
      <Link
        to="/tour-packages"
        className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full bg-[#e1edcf] px-8 py-4 font-bold text-[#294333] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
      >
        Explore Tour Packages →
      </Link>

      {/* All Destinations */}
      <Link
        to="/destination"
        className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full border border-white/60 px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#315b42]"
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
