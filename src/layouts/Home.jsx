import * as React from "react";
import Hero from "../components/hero/Hero";
import AboutHomestead from "../components/about/AboutHomestead";
import Accommodations from "../components/accomodations/Accomodations";
import Banner from "../components/banner/Banner";
import ThingsToDo from "../components/services/ThingsToDo";
import Features from "../components/features/Features";
import ActivitiesGallery from "../components/activities/ActivitiesGallery";
import Operation from "../components/operation/Operation";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutHomestead />
      <ThingsToDo />
      <Accommodations />
      <Banner />
      <Features />
      <ActivitiesGallery />
      <Operation />
    </>
  );
}
