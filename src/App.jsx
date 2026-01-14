import { Routes, Route } from "react-router-dom";

import SiteLayout from "./layouts/SiteLayout";
import Home from "./layouts/Home";
import About from "./components/about/About";
import AccommodationsAll from "./components/accomodations/AccommodationsAll";
import LionManesLodge from "./components/accomodations/LionManesLodge";
import PortabelloPlace from "./components/accomodations/PortabelloPlace";
import WeddingVenue from "./components/services/WeddingVenue";
import Tattoos from "./components/services/Tattoos";
import CalendlyInline from "./components/booking/CalendlyInline";
import SignAgreement from "./components/booking/SignAgreement";
// import About from "./pages/About";
// import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/wedding-venue" element={<WeddingVenue />} />
        <Route path="/tattoos" element={<Tattoos />} />
        <Route path="/booking" element={<CalendlyInline />} />
        <Route path="/sign-agreement" element={<SignAgreement />} />
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
