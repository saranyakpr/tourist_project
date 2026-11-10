import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

import Destination from "./pages/Destination";
import Intogreen from "./pages/Intogreen";
import Chasingwaterfalls from "./pages/Chasingwaterfalls";
import Journey from "./pages/Journey";
import Dam from "./pages/Dam";
import Peacefullandscapes from "./pages/Peacefullandscapes";
import Tourpackages from "./pages/Tourpackages";
import Shopping from "./pages/Shopping";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/destination" element={<Destination />} />
        <Route path="/" element={<Destination />} />
        <Route path="/into-green" element={<Intogreen />} />
        <Route path="/chasing-waterfalls" element={<Chasingwaterfalls />} />
       <Route path="/journey" element={<Journey />} />
       <Route path="/dam" element={<Dam />} />
       <Route path="/peaceful-landscapes" element={<Peacefullandscapes />} />
<Route path="/shopping" element={<Shopping />} />
<Route path="/tour-packages" element={<Tourpackages />} />
      </Routes>
    </Router>
  );
}