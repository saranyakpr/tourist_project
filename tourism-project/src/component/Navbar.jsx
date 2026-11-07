import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Taste Trails", path: "/taste-trails" },
  { label: "Plan Your Trip", path: "/plan-your-trip" },
  { label: "Travel Guide", path: "/travel-guide" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-slate-950/90 text-white backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <NavLink to="/taste-trails" className="text-xl font-bold tracking-wide">
          Tenkasi <span className="text-amber-300">Trails</span>
        </NavLink>

        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-white/15 ${
                  isActive
                    ? "bg-amber-300 text-slate-950"
                    : "text-white/90"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}