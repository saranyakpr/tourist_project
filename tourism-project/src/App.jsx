
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import PlanYourTrip from "./pages/PlanYourTrip";
import TasteTrails from "./pages/TasteTrails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planyourtrip" element={<PlanYourTrip />} />
        <Route path="/taste-trails" element={<TasteTrails />} />
      </Routes>
    </Router>
  );
}
