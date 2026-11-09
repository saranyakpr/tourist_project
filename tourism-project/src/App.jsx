
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import PlanYourTrip from "./pages/PlanYourTrip";
import TasteTrails from "./pages/TasteTrails";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews"
import About from"./pages/About"
import Destination from"./pages/Destination"
import Chasingwaterfalls from "./pages/Chasingwaterfalls"
import Dam from"./pages/Dam"
import Intogreen from "./pages/Intogreen"
import Journey from "./pages/Journey"
import Peacefullandscapes from "./pages/Peacefullandscapes"
import Shopping from "./pages/Shopping"
import Tourpackages from "./pages/Tourpackages"

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
              <Route path="/destination" element={<Destination></Destination>}/> 
              <Route path="/chasing-waterfalls" element={<Chasingwaterfalls></Chasingwaterfalls>}/>
               <Route path="/dam" element={<Dam></Dam>}/>
                <Route path="/into-green"element={<Intogreen></Intogreen>}/>
                 <Route path="/peaceful-landscapes" element={<Peacefullandscapes></Peacefullandscapes>}/>
                  <Route path="/journey"element={<Journey></Journey>}/>
                  <Route path="/shopping" element={<Shopping></Shopping>}/>
                  <Route path="tour-packages"element={<Tourpackages></Tourpackages>}/>
                   
                  
      </Routes>
    </Router>
  );
}
