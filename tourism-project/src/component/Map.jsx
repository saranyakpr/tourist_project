import React from "react";

export default function Map() {
  return (
    <section className="w-full py-12 px-5 bg-[#FAF9F2]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-green-900 text-center mb-6 font-serif">
          Explore Tenkasi Location
        </h2>

        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Tenkasi Google Map"
            src="https://maps.google.com/maps?q=Tenkasi,Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}