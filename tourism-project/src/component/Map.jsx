
import React from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function Map() {

  const places = [
    {
      name: "Kasi Viswanathar Temple",
      description: "Famous Shiva temple in Tenkasi.",
      position: [8.9590, 77.3152]
    },
    {
      name: "Courtallam Main Falls",
      description: "One of the most famous waterfalls in Tenkasi.",
      position: [8.9325, 77.2746]
    },
    {
      name: "Five Falls",
      description: "Beautiful waterfall with five separate streams.",
      position: [8.9365, 77.2850]
    },
    {
      name: "Old Courtallam Falls",
      description: "A scenic waterfall surrounded by greenery.",
      position: [8.9145, 77.2655]
    },
    {
      name: "Tiger Falls",
      description: "Popular waterfall near Courtallam Main Falls.",
      position: [8.9295, 77.2767]
    },
    {
      name: "Thirumalai Kovil",
      description: "Famous hilltop Murugan temple at Panpoli.",
      position: [9.0064, 77.2677]
    },
    {
      name: "Ilanji Kumarar Temple",
      description: "Popular Murugan temple near Courtallam.",
      position: [8.9475, 77.2867]
    },
    {
      name: "Gundar Dam",
      description: "Beautiful dam surrounded by Western Ghats.",
      position: [8.9740, 77.2860]
    }
  ];

  return (
    <section className="w-full py-12 px-5 bg-[#FAF9F2]">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-green-900 text-center mb-3 font-serif">
          Explore Tenkasi Location
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Discover the famous tourist places of Tenkasi
        </p>

        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">

          <MapContainer
            center={[8.95, 77.29]}
            zoom={11}
            scrollWheelZoom={true}
            className="w-full h-full"
          >

            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {places.map((place, index) => (

              <CircleMarker
                key={index}
                center={place.position}
                radius={9}
                pathOptions={{
                  color: "#ffffff",
                  fillColor: "#16a34a",
                  fillOpacity: 1,
                  weight: 3
                }}
              >

                <Popup>
                  <div className="text-center">
                    <h3 className="font-bold text-green-900 text-base">
                      {place.name}
                    </h3>

                    <p className="text-gray-600 text-sm mt-1">
                      {place.description}
                    </p>
                  </div>
                </Popup>

              </CircleMarker>

            ))}

          </MapContainer>

        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Click on the green pins to explore famous places in Tenkasi.
        </p>

      </div>

    </section>
  );
}
