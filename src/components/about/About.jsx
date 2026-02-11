import * as React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import heroUrl from "../../assets/about/abouthero.webp";
import { Link as RouterLink } from "react-router-dom";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import img1 from "../../assets/about/FrankNic1.webp";
import img2 from "../../assets/about/FrankNic2.webp";
import img3 from "../../assets/activities/good_views.webp";
import img4 from "../../assets/accomodations/accom21.webp";

const sections = [
  {
    eyebrow: "Our Story",
    title: "Meet Frank and Nicole",
    body: "In December 2021, Frank and Nicole Whittington set out to fulfill their dream of homesteading. After a few long years of traveling, the couple settled on their beautiful 14-acre property in the small town of Holladay, Tennessee.",
    image: img1,
  },
  {
    eyebrow: "Our Spaces",
    title: "Built for gatherings, weddings, and peaceful stays",
    body: "After establishing their new PMA ministry, they opened their doors to the private sector, welcoming family, friends, and members to join in on the fun. Blending all their favorite activities into one unique homestead experience, they offer camping, hiking, kayaking, weddings, tattoos, and more on this little slice of heaven.",
    image: img2,
  },
  {
    eyebrow: "Our Land",
    title: "Fourteen acres of trails, water, and wide skies",
    body: "Explore the quiet trails, riverside views, and open landscapes that make the homestead feel like a true retreat.",
    image: img3,
  },
  {
    eyebrow: "Our People",
    title: "Hosts who care deeply about your stay",
    body: "We focus on the details so you can focus on rest, clearing your mind, and everything you need to refresh your spirit without the noise of the outside world.",
    image: img4,
  },
];

export default function About() {
  const sectionRefs = React.useRef([]);
  const [sectionInView, setSectionInView] = React.useState([]);
  React.useEffect(() => {
    if (!sections.length) {
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setSectionInView(Array(sections.length).fill(true));
      return undefined;
    }

    setSectionInView(Array(sections.length).fill(false));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(entry.target.dataset.sectionIndex);
          setSectionInView((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Box
        component="section"
        sx={{
          minHeight: "80vh",
          position: "relative",
          overflow: "hidden",
          display: "grid",
          alignItems: "center",
          backgroundColor: "#0b0f0d",
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1)",
          }}
        />

        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.38) 40%, rgba(0,0,0,0.18) 70%, rgba(0,0,0,0.10) 100%)",
          }}
        />

        <Container
          sx={{
            position: "relative",
            zIndex: 1,
            px: { xs: 2, sm: 3, md: 6 },
            pt: { xs: 10, md: 14 },
            "@keyframes aboutHeroFadeUp": {
              "0%": { opacity: 0, transform: "translateY(12px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Box sx={{ maxWidth: "100%" }}>
            <Typography
              variant="h1"
              sx={{
                color: "rgba(255,255,255,0.96)",
                fontWeight: 500,
                fontSize: { xs: 44, sm: 58, md: 74, lg: 82, xl: 90 },
                lineHeight: { xs: 1.05, md: 1.02 },
                opacity: 0,
                transform: "translateY(12px)",
                animation: "aboutHeroFadeUp 700ms ease forwards",
                animationDelay: "0ms",
                willChange: "opacity, transform",
                "@media (prefers-reduced-motion: reduce)": {
                  animation: "none",
                  opacity: 1,
                  transform: "none",
                },
              }}
            >
              Who We Are
            </Typography>

            <Typography
              sx={{
                mt: 2.2,
                maxWidth: "100%",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 600,
                fontSize: { xs: 14, sm: 15, md: 16, lg: 18, xl: 19 },
                opacity: 0,
                transform: "translateY(12px)",
                animation: "aboutHeroFadeUp 700ms ease forwards",
                animationDelay: "140ms",
                willChange: "opacity, transform",
                "@media (prefers-reduced-motion: reduce)": {
                  animation: "none",
                  opacity: 1,
                  transform: "none",
                },
              }}
            >
              Learn more about us, and how we got started on this journey
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          position: "relative",
          py: { xs: 8, sm: 10, md: 12 },
          backgroundColor: "rgba(255,255,255,0.96)",
        }}
      >
        <Container sx={{ px: { xs: 2, sm: 3, md: 6 } }}>
          <Box sx={{ display: "grid", gap: { xs: 5, md: 7 } }}>
            {sections.map((section, index) => (
              <Box
                key={section.title}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                data-section-index={index}
                sx={{
                  display: "grid",
                  gap: { xs: 3, md: 5 },
                  alignItems: "center",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                }}
              >
                <Box
                  sx={{
                    order: { xs: 1, md: index % 2 === 0 ? 1 : 2 },
                    borderRadius: "var(--radius)",
                    overflow: "hidden",
                    border: "1px solid rgba(16,28,22,0.10)",
                    backgroundColor: "rgba(255,255,255,0.90)",
                    boxShadow: "0 22px 70px rgba(0,0,0,0.12)",
                    aspectRatio: { xs: "5/4", md: "3/3" },
                    position: "relative",
                    opacity: sectionInView[index] ? 1 : 0,
                    transform: sectionInView[index]
                      ? "translateY(0)"
                      : "translateY(12px)",
                    transition: "opacity 700ms ease, transform 700ms ease",
                  }}
                >
                  <Box
                    component="img"
                    src={section.image}
                    alt={section.title}
                    loading="lazy"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    order: { xs: 2, md: index % 2 === 0 ? 2 : 1 },
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(11, 20, 16, 0.60)",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontSize: { xs: 12, sm: 12, md: 13, lg: 14, xl: 15 },
                      opacity: sectionInView[index] ? 1 : 0,
                      transform: sectionInView[index]
                        ? "translateY(0)"
                        : "translateY(12px)",
                      transition: "opacity 700ms ease, transform 700ms ease",
                    }}
                  >
                    {section.eyebrow}
                  </Typography>

                  <Typography
                    variant="h1"
                    sx={{
                      mt: 1.2,
                      color: "rgba(11, 20, 16, 0.92)",
                      fontWeight: 500,
                      fontSize: { xs: 30, sm: 40, md: 48, lg: 54, xl: 60 },
                      lineHeight: { xs: 1.08, md: 1.03 },
                      letterSpacing: -0.6,
                      opacity: sectionInView[index] ? 1 : 0,
                      transform: sectionInView[index]
                        ? "translateY(0)"
                        : "translateY(12px)",
                      transition: "opacity 700ms ease, transform 700ms ease",
                      transitionDelay: "120ms",
                    }}
                  >
                    {section.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 2,
                      color: "rgba(11, 20, 16, 0.70)",
                      fontSize: { xs: 14, sm: 15, md: 16, lg: 18, xl: 19 },
                      lineHeight: 1.65,
                      opacity: sectionInView[index] ? 1 : 0,
                      transform: sectionInView[index]
                        ? "translateY(0)"
                        : "translateY(12px)",
                      transition: "opacity 700ms ease, transform 700ms ease",
                      transitionDelay: "240ms",
                    }}
                  >
                    {section.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
