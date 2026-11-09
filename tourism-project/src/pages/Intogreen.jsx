
import React from "react";
import { Link } from "react-router-dom";
import Homenavbar from "../component/Homenavbar";
import Footer from"../component/Footer"
const naturePlaces = [
 
  {
    name: "Manimuthar",
    location: "Near Ambasamudram",
    category: "Nature Retreat",
    description:
      "Explore the scenic surroundings of Manimuthar with its dam, hills and refreshing natural beauty.",
    image:
      "manimuthar.jpg",
    
  },
  {
    name: "Western Ghats",
    location: "Tenkasi Region",
    category: "Mountain Beauty",
    description:
      "Discover breathtaking mountain scenery, rich greenery and the beauty of the Western Ghats.",
    image:
      "western.jpg",
  },
 
];

export default function Intogreen() {
  return (
    <>
    <Homenavbar></Homenavbar>
    <div className="min-h-screen overflow-hidden bg-[#f6f8ef] text-[#294333]">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">

       <img
  src="lake.jpg"
  alt="Beautiful green mountain landscape"
  className="absolute inset-0 h-full w-full object-cover animate-[zoomInOut_16s_ease-in-out_infinite_alternate]"
/>

        <div className="absolute inset-0 bg-gradient-to-r from-[#102b20]/80 via-[#102b20]/45 to-transparent" />

        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full border border-white/20 animate-pulse" />
        <div className="absolute -right-8 top-32 h-52 w-52 rounded-full border border-white/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">

          <p className="mb-6 text-sm font-bold uppercase tracking-[5px] text-[#d5e8bd]">
            Nature Escapes · Tenkasi
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Into the Green,
            <span className="block font-light italic text-[#d5e8bd]">
              Away from the Ordinary.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/85 md:text-lg">
            Escape into the refreshing beauty of Tenkasi.
            Explore green mountains, peaceful landscapes and
            beautiful natural destinations waiting to be discovered.
          </p>

          <a
            href="#nature"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#e1edcf] px-8 py-4 font-bold text-[#294333] transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Explore Nature
            <span className="text-xl">↗</span>
          </a>

          <div className="mt-16 flex flex-wrap gap-10 text-white">
            <div>
              <h3 className="text-3xl font-bold">Green</h3>
              <p className="mt-1 text-sm text-white/65">Fresh landscapes</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Peace</h3>
              <p className="mt-1 text-sm text-white/65">Calm experiences</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Explore</h3>
              <p className="mt-1 text-sm text-white/65">Natural wonders</p>
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
              Breathe in the beauty
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Find your escape
              <span className="block font-light italic text-[#78966b]">
                in the heart of nature.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-[#788477]">
              Tenkasi is blessed with beautiful natural surroundings,
              green valleys, scenic hills and refreshing landscapes.
              Every destination offers a chance to slow down and
              reconnect with nature.
            </p>

            <p className="mt-4 leading-8 text-[#788477]">
              Whether you love peaceful mountain views or scenic
              countryside journeys, discover a greener side of
              Tenkasi through unforgettable experiences.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-[2px] w-14 bg-[#78966b]" />
              <span className="text-sm font-semibold italic text-[#78966b]">
                Let nature be your destination
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">

            <div className="absolute -right-5 -top-5 h-full w-full rounded-[30px] border-2 border-[#b5c8a3]" />

            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000"
              alt="Beautiful green nature"
              className="relative h-[420px] w-full rounded-[30px] object-cover shadow-xl transition duration-700 hover:scale-[1.02]"
            />

            <div className="absolute -bottom-7 -left-5 rounded-2xl bg-white px-7 py-5 shadow-xl">
              <p className="text-2xl font-bold text-[#315b42]">
                Into Nature
              </p>
              <p className="mt-1 text-xs tracking-widest text-[#829080]">
                EXPLORE THE GREEN
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* NATURE DESTINATIONS */}
      <section id="nature" className="bg-[#edf2e5] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[4px] text-[#829b70]">
              Explore the natural beauty
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Into the Green
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#788477]">
              Discover beautiful nature destinations around
              Tenkasi and experience the magic of green landscapes.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">

            {naturePlaces.map((place) => (
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
                      EXPLORE  {place.number}
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
            Nature in every direction
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            A Little More Green
          </h2>
        </div>

        <div className="grid h-auto gap-5 md:h-[450px] md:grid-cols-3">

          <div className="group relative h-[300px] overflow-hidden rounded-[25px] md:col-span-2 md:h-full">
            <img
              src="natureex1.jpg"
              alt="Beautiful green forest"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-7 left-7 text-2xl font-bold text-white">
              Into the Forest
            </p>
          </div>

          <div className="grid gap-5 md:grid-rows-2">
            <div className="group relative h-[220px] overflow-hidden rounded-[25px] md:h-full">
              <img
                src="natureex2.jpg"
                alt="Green valley"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-5 left-5 text-xl font-bold text-white">
                Green Valleys
              </p>
            </div>

            <div className="group relative h-[220px] overflow-hidden rounded-[25px] md:h-full">
              <img
                src="natureex6.jpg"
                alt="Forest greenery"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-5 left-5 text-xl font-bold text-white">
                Nature Trails
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
<section className="relative mx-6 mt-16 mb-16 overflow-hidden rounded-[35px] bg-[#315b42] px-6 py-20 text-center text-white md:mx-auto md:max-w-7xl md:px-16">
  {/* Background Decorations */}
  <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full border border-white/10" />

  <div className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full border border-white/10" />

  <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300/10 blur-3xl" />

  {/* CTA Content */}
  <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center">

    <p className="text-sm font-bold uppercase tracking-[4px] text-[#d5e8bd]">
      Your nature journey awaits
    </p>

    <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
      Leave the noise behind.
      <span className="mt-2 block italic text-[#d5e8bd]">
        Find your peace in Tenkasi.
      </span>
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/75 md:text-base">
      Explore the green landscapes, breathe fresh air
      and create beautiful memories in nature.
    </p>

    {/* Buttons */}
    <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-5">

      <Link
        to="/tour-packages"
        className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full bg-[#e1edcf] px-8 py-4 font-bold text-[#294333] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white"
      >
        Explore Tour Packages →
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
