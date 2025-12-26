import { Routes, Route } from "react-router-dom";

import SiteLayout from "./layouts/SiteLayout";
import Home from "./layouts/Home";
import About from "./components/about/About";
import AboutFrank from "./components/about/AboutFrank";
import AccommodationsAll from "./components/accomodations/AccommodationsAll";
import LionManesLodge from "./components/accomodations/LionManesLodge";
import PortabelloPlace from "./components/accomodations/PortabelloPlace";
// import About from "./pages/About";
// import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-frank" element={<AboutFrank />} />
        <Route path="/accommodations" element={<AccommodationsAll />} />
        <Route
          path="/accommodations/lion-manes-lodge"
          element={<LionManesLodge />}
        />
        <Route
          path="/accommodations/portabello-place"
          element={<PortabelloPlace />}
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}
