import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import heroUrl from "../../assets/about/frankhero.webp";

import img1 from "../../assets/about/frankabout1.webp";
import img2 from "../../assets/about/frankabout2.webp";
import img3 from "../../assets/about/FrankNic1.webp";
import img4 from "../../assets/about/aboutfrank4.webp";

const sections = [
  {
    eyebrow: "The man, the myth, the legend",
    title: "'Little Frank' Whittington",
    body: "Frank Whittington, known in the industry as “Little Frank,” began his journey in body art at just 22 years old in Decatur, IL. He launched his first studio, It’s Just a Little Prick, in April 1999, specializing in professional body piercing and suspension work. Committed to excellence, Frank traveled extensively to expand his knowledge — studying sterilization practices, cross-contamination prevention, and advanced piercing techniques. He attended annual conventions with the Association of Professional Piercers (APP) in Las Vegas and even helped rewrite local health codes to improve body art regulations in his community.",
    image: img1,
  },
  {
    eyebrow: "Tattooing Journey",
    title: "A craft refined across decades and continents",
    body: "In 2001, Frank transitioned into tattooing at IJALP in Decatur. While continuing to mentor others, including apprenticing his former partner in piercing, he poured his focus into mastering the tattoo craft. Over the years, he has worked at conventions and tattoo studios across the United States and abroad, collaborating with world-renowned artists and continually refining his skills.  Frank has also worked internationally at some of Europe’s most respected studios, including Terry’s Tattoo (Glasgow, Scotland), Relentless Tattoo, and Andy Engel’s Tattoo in Germany.",
    image: img2,
  },
  {
    eyebrow: "Looking Ahead",
    title: "Continuing the story together",
    body: "In 2015, following a divorce-related split of his original shop, Frank co-founded Oakwood Tattoo in Decatur with fellow artist Chris Stonecipher. He later relocated to Tennessee in 2020 with his wife, Nicole, where they now run a Private Membership Association homestead.",
    image: img3,
  },
  {
    eyebrow: "Today",
    title: "A life of purpose, health, and discipline",
    body: "Today, at 47, Frank lives a quiet, purpose-driven life homesteading in West Tennessee. Outside of tattooing, he is passionate about personal health and martial arts. He holds a 4th-degree black belt in GoJu-Ryu Sabaki and serves as Vice President of the American GoJu Karate Association (AGKA). He is also a proud member of the Odd Fellows.",
    image: img4,
  },
];

export default function AboutFrank() {
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
      { threshold: 0.2 }
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
          minHeight: "100vh",
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
              "linear-gradient(90deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.50) 40%, rgba(0,0,0,0.28) 70%, rgba(0,0,0,0.14) 100%)",
          }}
        />

        <Container
          sx={{
            position: "relative",
            zIndex: 1,
            pt: { xs: 10, md: 14 },
            px: { xs: 2, sm: 3, md: 6 },
          }}
        >
          <Box sx={{ maxWidth: { xs: "100%", md: 820 } }}>
            <Typography
              variant="h1"
              sx={{
                color: "rgba(255,255,255,0.96)",
                fontWeight: 500,
                fontSize: { xs: 44, sm: 58, md: 74 },
                lineHeight: { xs: 1.05, md: 1.02 },
              }}
            >
              Frank's Story
            </Typography>

            <Typography
              sx={{
                mt: 2.2,
                maxWidth: 720,
                color: "rgba(255,255,255,0.88)",
                fontWeight: 600,
                fontSize: { xs: 14, sm: 15, md: 16 },
              }}
            >
              A closer look at the heart behind Whittington Homestead. Share the
              journey, the values, and the story that shaped this place.
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
                    aspectRatio: { xs: "5/4", md: "4/3" },
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
                    maxWidth: 560,
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(11, 20, 16, 0.60)",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontSize: { xs: 12, sm: 12, md: 13 },
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
                      fontSize: { xs: 30, sm: 40, md: 48 },
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
                      fontSize: { xs: 14, sm: 15, md: 16 },
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
