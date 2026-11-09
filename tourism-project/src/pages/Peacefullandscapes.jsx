import React from "react";
import { Link } from "react-router-dom";
import Homenavbar from "../component/Homenavbar";
import Footer from "../component/Footer"
const style = document.createElement("style");
style.innerHTML = `
@keyframes zoomEffect {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.15);
  }
}
`;
if (!document.getElementById("zoom-animation")) {
  style.id = "zoom-animation";
  document.head.appendChild(style);
}

const places = [
  {
    name: "Sundarapandiyapuram Sunflowern Garden",
    subtitle: "A peaceful escape near our home town",
    image:
      "sun.jpeg",
    tag: "GREEN ESCAPE",
  },
  {
    name: "Ottakal Viewpoint",
    subtitle: "Calm waters surrounded by green hills",
    image:
      "ottakal.jpg",
    tag: "SCENIC VIEW",
  },
  {
    name: "Anniyan Parai Viewpoint",
    subtitle: "Beautiful mountain views and fresh air",
    image:
      "anniyan.jpg",
    tag: "MOUNTAIN BEAUTY",
  },
  {
    name: "Karuppanadhi Dam",
    subtitle: "A relaxing spot surrounded by nature",
    image:
      "kadana.jpg",
    tag: "SERENE SPOT",
  },
];

export default function Peacefullandscapes() {
  return (
    <>
    <Homenavbar></Homenavbar>
    <div className="min-h-screen bg-[#f7f8ef] text-[#294333]">
      {/* Hero */}
     <section className="relative flex min-h-screen items-center overflow-hidden">
      <img
  src="hid9.jpg"
  alt="Peaceful mountain landscape"
  className="absolute inset-0 h-full w-full object-cover animate-[zoomEffect_15s_ease-in-out_infinite_alternate]"
/>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
          <p className="mb-5 text-sm font-bold uppercase tracking-[5px] text-[#d7e8b5]">
            Discover Tenkasi
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Find Your Peace in Nature
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
            Slow down, breathe fresh air and explore the peaceful landscapes
            hidden among the beautiful hills of Tenkasi.
          </p>
          <a
            href="#places"
            className="mt-9 inline-block rounded-full bg-[#dce9c5] px-8 py-4 font-bold text-[#294333] transition hover:-translate-y-1 hover:bg-white"
          >
            Explore Landscapes →
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <p className="text-sm font-bold uppercase tracking-[4px] text-[#78966b]">
          A breath of fresh air
        </p>
        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
          Where Nature Meets Peace
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#718071]">
          From beautiful mountain views to calm reservoirs, Tenkasi has
          wonderful places where you can take a break from busy city life.
        </p>
      </section>

      {/* Places */}
      <section id="places" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold uppercase tracking-[3px] text-[#78966b]">
              Explore the beauty
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Peaceful Places
            </h2>
          </div>
          <span className="text-sm text-[#829080]">
            Discover • Relax • Reconnect
          </span>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {places.map((place, index) => (
            <article
              key={place.name}
              className="group overflow-hidden rounded-[25px] bg-white shadow-[0_12px_35px_rgba(42,75,48,0.08)] transition duration-500 hover:-translate-y-3 hover:shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold tracking-widest text-[#456448]">
                  {place.tag}
                </span>
                <span className="absolute bottom-4 right-4 text-4xl font-bold text-white/70">
                  0{index + 1}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{place.name}</h3>
                <p className="mt-3 min-h-[52px] text-sm leading-6 text-[#829080]">
                  {place.subtitle}
                </p>
                <div className="mt-5 h-[2px] w-10 bg-[#91a982] transition-all duration-500 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
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