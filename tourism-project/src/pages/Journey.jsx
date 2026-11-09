
import React from "react";
import { Link } from "react-router-dom";
import Homenavbar from "../component/Homenavbar";
import Footer from "../component/Footer"

const temples = [
  {
    name: "Kasi Viswanathar Temple",
    location: "Tenkasi",
    description:
      "Discover the magnificent temple dedicated to Lord Shiva, known for its impressive Dravidian architecture and beautiful towering gopuram.",
    image: "/temp1.avif",
    tag: "HISTORIC LANDMARK",
  },
  {
    name: "Thirumalai Kovil",
    location: "Panpoli",
    description:
      "Experience the peaceful spiritual atmosphere of this beautiful hilltop Murugan temple surrounded by scenic natural landscapes.",
    image: "/temp7.avif",
    tag: "HILLTOP TEMPLE",
  },
  {
    name: "Mountain Temple",
    location: "Alangulam",
    description:
      "Admire traditional pillars, intricate carvings and the timeless artistic beauty of South Indian temple architecture.",
    image: "/temp4.avif",
    tag: "CULTURAL HERITAGE",
  },
];

export default function Journey() {
  return (
    <>
    <Homenavbar></Homenavbar>
    <main className="min-h-screen overflow-hidden bg-[#f8f7ef] text-[#294333]">

      {/* HERO IMAGE ANIMATION */}
      <style>{`
        @keyframes sacredHeroZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.12);
          }
        }

        .sacred-hero-image {
          animation: sacredHeroZoom 18s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes sacredReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sacredFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .sacred-reveal {
          animation: sacredReveal 1s ease both;
        }

        .sacred-float {
          animation: sacredFloat 5s ease-in-out infinite;
        }

        .sacred-card img {
          transition: transform .8s ease;
        }

        .sacred-card:hover img {
          transform: scale(1.1);
        }

        @media (prefers-reduced-motion: reduce) {
          .sacred-reveal,
          .sacred-float,
          .sacred-hero-image {
            animation: none;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">

        <img
          src="/temp3.jpg"
          alt="Beautiful South Indian temple architecture"
          className="sacred-hero-image absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#211e15]/85 via-[#281f16]/55 to-transparent" />

        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full border border-white/20 animate-pulse" />
        <div className="absolute -right-8 top-32 h-52 w-52 rounded-full border border-white/20" />

        <div className="sacred-reveal relative z-10 mx-auto w-full max-w-7xl px-6 py-24 text-white">

          <p className="mb-6 text-sm font-bold uppercase tracking-[5px] text-[#e8d5a5]">
            Sacred Trails · Tenkasi
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-bold leading-tight md:text-7xl">
            A Journey
            <span className="block font-light italic text-[#e8d5a5]">
              of Faith and Heritage.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/85 md:text-lg">
            Discover the sacred beauty of Tenkasi,
            where ancient temples, magnificent architecture
            and timeless traditions create a spiritual journey.
          </p>

          <a
            href="#temple-explore"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#e8d5a5] px-8 py-4 font-bold text-[#382e20] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Explore Sacred Places
            <span className="text-xl">↗</span>
          </a>

          <div className="mt-16 flex flex-wrap gap-10">
            <div>
              <h3 className="text-3xl font-bold">Faith</h3>
              <p className="mt-1 text-sm text-white/65">Spiritual beauty</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">History</h3>
              <p className="mt-1 text-sm text-white/65">Ancient stories</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Culture</h3>
              <p className="mt-1 text-sm text-white/65">Timeless heritage</p>
            </div>
          </div>

        </div>

        <div className="absolute bottom-8 right-10 hidden animate-bounce text-white/80 md:block">
          SCROLL TO EXPLORE ↓
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">

        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-[4px] text-[#a1844d]">
              The Spiritual Side of Tenkasi
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl">
              Where Every Temple
              <span className="block font-light italic text-[#a78b51]">
                Tells a Story.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-[#788477]">
              Tenkasi is a beautiful destination where spirituality
              and history come together. From grand temple towers
              to peaceful hilltop shrines, every sacred place reflects
              the rich culture and traditions of Tamil Nadu.
            </p>

            <p className="mt-4 leading-8 text-[#788477]">
              Take a journey through remarkable architecture,
              ancient stories and peaceful spiritual surroundings.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-[2px] w-14 bg-[#a78b51]" />
              <span className="text-sm font-semibold italic text-[#a78b51]">
                Discover the stories behind every sacred place
              </span>
            </div>
          </div>

          {/* FLOATING IMAGES */}
          <div className="relative mx-auto h-[420px] w-full max-w-[480px]">

            <div className="absolute right-5 top-0 h-[300px] w-[68%] overflow-hidden rounded-t-full rounded-b-[35px] border-[7px] border-white shadow-2xl">

              <img
                src="/temp4.avif"
                alt="Temple surrounded by nature"
                className="h-full w-full object-cover"
              />

            </div>

            <div className="sacred-float absolute bottom-5 left-0 h-[190px] w-[48%] overflow-hidden rounded-[28px] border-[7px] border-white shadow-2xl">

              <img
                src="/temp6.jpg"
                alt="Traditional temple architecture"
                className="h-full w-full object-cover"
              />

            </div>

            <div className="absolute bottom-7 right-0 rounded-full bg-[#e8d5a5] px-5 py-3 text-xs font-bold text-[#473a25] shadow-xl">
              Sacred Heritage
            </div>

          </div>

        </div>
      </section>

      {/* TEMPLE DESTINATIONS */}
      <section
        id="temple-explore"
        className="bg-[#f0eee4] px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-sm font-bold uppercase tracking-[4px] text-[#a1844d]">
              Discover the Divine
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
              Sacred Places to Explore
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#788477]">
              Explore beautiful temples, historic landmarks
              and cultural treasures of the Tenkasi region.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {temples.map((temple, index) => (

              <article
                key={temple.name}
                className="sacred-card group relative min-h-[460px] overflow-hidden rounded-[30px] shadow-lg"
              >

                <img
                  src={temple.image}
                  alt={temple.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#211e15]/95 via-[#211e15]/20 to-transparent" />

                {/* Small category pill */}
                <div className="absolute left-6 top-6 rounded-full border border-white/50 bg-white/15 px-3 py-1.5 text-[9px] font-bold tracking-[2px] text-white backdrop-blur-md">
                  {temple.tag}
                </div>

                <div className="absolute right-7 top-6 text-5xl font-bold text-white/50">
                  0{index + 1}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 text-white">

                  <p className="text-sm font-medium tracking-wider text-[#e8d5a5]">
                    {temple.location}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                    {temple.name}
                  </h3>

                  <p className="mt-4 leading-7 text-white/80">
                    {temple.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[3px] text-white/65">
                      EXPLORE 0{index + 1}
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

      {/* HERITAGE GALLERY */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#a1844d]">
            The Beauty of Tradition
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
            Timeless Temple Heritage
          </h2>
        </div>

        <div className="grid h-auto gap-5 md:h-[450px] md:grid-cols-3">

          <div className="group relative h-[300px] overflow-hidden rounded-[25px] md:col-span-2 md:h-full">
            <img
              src="/temp6.jpg"
              alt="Magnificent temple tower"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-7 left-7 text-2xl font-bold text-white">
              Magnificent Temple Towers
            </p>
          </div>

          <div className="grid gap-5 md:grid-rows-2">

            <div className="group relative h-[220px] overflow-hidden rounded-[25px] md:h-full">
              <img
                src="/temp2.jpg"
                alt="Temple surrounded by nature"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-5 left-5 text-xl font-bold text-white">
                Sacred Hilltop Shrines
              </p>
            </div>

            <div className="group relative h-[220px] overflow-hidden rounded-[25px] md:h-full">
              <img
                src="/temp3.jpg"
                alt="Traditional temple carvings"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-5 left-5 text-xl font-bold text-white">
                Cultural Architecture
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BEST TIME TO VISIT */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid items-center gap-8 rounded-[30px] bg-[#eeebdd] p-9 md:grid-cols-2 md:p-14">

          <div>
            <p className="text-sm font-bold uppercase tracking-[4px] text-[#a1844d]">
              Plan Your Visit
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl">
              Best Time for Temple Visits
            </h2>

            <p className="mt-5 leading-8 text-[#788477]">
              October to March is generally comfortable for
              exploring temples and enjoying outdoor sightseeing.
              Early mornings and evenings are also pleasant times
              for a peaceful temple visit.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="rounded-[25px] bg-white px-12 py-9 text-center shadow-md">
              <p className="text-xs font-bold tracking-[3px] text-[#a1844d]">
                RECOMMENDED SEASON
              </p>

              <p className="mt-4 text-3xl font-bold text-[#31513c]">
                Oct – March
              </p>

              <p className="mt-2 text-sm text-[#788477]">
                Pleasant sightseeing weather
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative mx-6 mb-20 mt-4 overflow-hidden rounded-[35px] bg-[#31513c] px-6 py-20 text-center text-white md:mx-auto md:max-w-7xl md:px-16 md:py-24">

        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">

          <p className="text-xs font-bold uppercase tracking-[3px] text-[#e8d5a5] md:text-sm md:tracking-[5px]">
            Your Spiritual Journey Awaits
          </p>

          <h2 className="mt-7 max-w-3xl font-serif text-3xl font-bold leading-[1.25] md:text-5xl md:leading-[1.2]">
            Discover the sacred beauty and timeless heritage of Tenkasi.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
            Explore magnificent temples, peaceful shrines
            and unforgettable cultural experiences.
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">

            <Link
              to="/tour-packages"
              className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full bg-[#e8d5a5] px-8 py-4 font-bold text-[#382e20] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white"
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

    </main>
    <Footer>

    </Footer>
    </>
  );
}
