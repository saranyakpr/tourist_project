
import React from "react";
import {
  ShieldCheck,
  MapPin,
  Heart,
  Compass,
  ArrowRight
} from "lucide-react";

export default function Promise() {

  const promises = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Safe Travels",
      description:
        "Your safety is our priority. Enjoy every journey with comfort and peace of mind.",
      image:
        "/safe.jpg"
    },
    {
      icon: <MapPin size={32} />,
      title: "Local Experiences",
      description:
        "Explore hidden places, local culture and the natural beauty of Tenkasi.",
      
        image: "/local.jpg"},
    {
      icon: <Heart size={32} />,
      title: "Personal Care",
      description:
        "We make every trip special with friendly support and personal attention.",
      image:
       "/care.jpg"},
    {
      icon: <Compass size={32} />,
      title: "Best Guidance",
      description:
        "Discover amazing destinations with helpful travel information and guidance.",
      image: "/guide.jpg"}
,
  ];

  return (
    <section
      id="promise"
      className="relative w-full min-h-screen py-16 px-5 md:px-12 bg-cover bg-center overflow-hidden flex items-center"
      style={{
       backgroundImage:
  "url('/lake.jpg')"}}
    >

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-green-950/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="text-green-300 uppercase tracking-[4px] font-semibold text-sm mb-3">
            Travel With Confidence
          </p>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Your Journey,
            <span className="text-green-300 font-serif"> Our Promises</span>
          </h2>

          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Every journey deserves special care. We are committed to
            making your Tenkasi travel experience safe, comfortable
            and unforgettable.
          </p>

        </div>

        {/* Promise Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

  {promises.map((item, index) => (

    <div
      key={index}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg
      transition-all duration-500 ease-out
      hover:scale-[1.03] hover:shadow-2xl
      hover:shadow-green-900/20
      hover:rotate-1"
      style={{
        animation: `fadeIn 0.7s ease-out ${index * 0.2}s both`
      }}
    >

      {/* Card Image */}
      <div className="h-44 md:h-40 lg:h-44 overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-center
          transition-transform duration-700 ease-in-out
          group-hover:scale-110 group-hover:brightness-110"
        />
      </div>

      {/* Card Content */}
      <div className="px-5 pb-6 text-center">

        {/* Animated Icon */}
        <div className="relative -mt-8 mb-3">
          <div
            className="w-16 h-16 mx-auto flex items-center justify-center
            rounded-full bg-green-100 text-green-700 border-4 border-white
            shadow-md transition-all duration-500
            group-hover:bg-green-600 group-hover:text-white
            group-hover:rotate-[360deg] group-hover:scale-110"
          >
            {item.icon}
          </div>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-green-950 mb-2
          transition-colors duration-300 group-hover:text-green-600">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm leading-6
          transition-colors duration-300 group-hover:text-gray-800">
          {item.description}
        </p>

      </div>

    </div>

  ))}

</div>

        {/* Bottom Message */}
        <div className="text-center mt-10">

          <p className="text-white text-base md:text-lg font-medium  mb-5">
            Travel with us and turn every moment into a beautiful memory.
          </p>

          <a
            href="#destination"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 hover:scale-105"
          >
            Start Your Plan
            <ArrowRight size={20} />
          </a>

        </div>

      </div>

    </section>
  );
}
