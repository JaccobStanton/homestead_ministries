import * as React from "react";
import { Box } from "@mui/material";
import Hero from "../components/hero/Hero";
import AboutHomestead from "../components/about/AboutHomestead";
import Accommodations from "../components/accomodations/Accomodations";
import Banner from "../components/banner/Banner";
import ThingsToDo from "../components/services/ThingsToDo";
import Features from "../components/features/Features";
import ActivitiesGallery from "../components/activities/ActivitiesGallery";
import Operation from "../components/operation/Operation";

export default function Home() {
  const sectionSx = { scrollMarginTop: { xs: 90, md: 120 } };

  return (
    <>
      <Hero />
      <Box id="about" component="section" sx={sectionSx}>
        <AboutHomestead />
      </Box>
      <Box id="things-to-do" component="section" sx={sectionSx}>
        <ThingsToDo />
      </Box>
      <Box id="accommodations" component="section" sx={sectionSx}>
        <Accommodations />
      </Box>
      <Banner />
      <Box id="features" component="section" sx={sectionSx}>
        <Features />
      </Box>
      <Box id="activities" component="section" sx={sectionSx}>
        <ActivitiesGallery />
      </Box>
      <Box id="membership" component="section" sx={sectionSx}>
        <Operation />
      </Box>
    </>
  );
}
