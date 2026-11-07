import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <>
      {/* Existing Navbar */}

      <main className="w-full min-w-0 m-0 p-0">
        <Routes>
          {/* Other existing routes */}

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>

      {/* Existing Footer */}
    </>
  );
}

export default App;