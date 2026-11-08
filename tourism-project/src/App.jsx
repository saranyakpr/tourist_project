
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import PlanYourTrip from "./pages/PlanYourTrip";
import TasteTrails from "./pages/TasteTrails";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews"
import About from"./pages/About"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planyourtrip" element={<PlanYourTrip />} />
        <Route path="/taste-trails" element={<TasteTrails />} />
          <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
              <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}
