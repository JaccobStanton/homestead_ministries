import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import AboutHomestead from "./components/about/AboutHomestead";
import Accommodations from "./components/accomodations/Accomodations";
import Banner from "./components/banner/Banner";
import ThingsToDo from "./components/activities/ThingsToDo";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutHomestead />
      <ThingsToDo />
      <Accommodations />
      <Banner />
      <Features />
      <Footer />
    </>
  );
}
