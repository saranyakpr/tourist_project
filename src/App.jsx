import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import TasteTrails from "./pages/TasteTrails";
import PlanYourTrip from "./pages/PlanYourTrip";
import TravelGuide from "./pages/TravelGuide";

export default function App() {
  return (
    <BrowserRouter>
     

      <Routes>
        <Route path="/" element={<Navigate to="/taste-trails" replace />} />
        <Route path="/taste-trails" element={<TasteTrails />} />
        <Route path="/plan-your-trip" element={<PlanYourTrip />} />
        <Route path="/travel-guide" element={<TravelGuide />} />
      </Routes>
    </BrowserRouter>
  );
}