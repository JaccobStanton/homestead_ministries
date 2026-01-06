import * as React from "react";
import { Box, Container, Typography, Button, Dialog } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import heroUrl from "../../assets/tattoo/tattoo_shop_inside.webp";

import img1 from "../../assets/about/frankabout1.webp";
import img2 from "../../assets/about/frankabout2.webp";
import img3 from "../../assets/about/FrankNic1.webp";
import img4 from "../../assets/about/aboutfrank4.webp";
import img5 from "../../assets/tattoo/tattoo1.webp";

const galleryImages = Object.entries(
  import.meta.glob("../../assets/tattoo/*.{webp,png,jpg,jpeg}", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

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
    eyebrow: "Little Frank Tours & Collabs",
    title: "Guest spots across the country and abroad",
    body: (
      <Box>
        <Typography sx={{ mb: 2 }}>
          His journey has included guest spots at iconic shops like:
        </Typography>
        <Box
          component="ul"
          sx={{
            pl: 3,
            m: 0,
            display: "grid",
            gap: 1,
            color: "rgba(11, 20, 16, 0.70)",
            fontSize: { xs: 14, sm: 15, md: 16 },
            lineHeight: 1.6,
          }}
        >
          <li>
            <Box component="span" sx={{ fontWeight: 700 }}>
              Trader Bob’s Tattoo
            </Box>{" "}
            - St. Louis, MO
          </li>
          <li>
            <Box component="span" sx={{ fontWeight: 700 }}>
              Elm Street Tattoo
            </Box>{" "}
            - Dallas, TX
          </li>
          <li>
            <Box component="span" sx={{ fontWeight: 700 }}>
              True Tattoo
            </Box>{" "}
            - Hollywood, CA
          </li>
          <li>
            <Box component="span" sx={{ fontWeight: 700 }}>
              Suffer City Tattoo
            </Box>{" "}
            - Dallas, TX
          </li>
          <li>
            <Box component="span" sx={{ fontWeight: 700 }}>
              Ignition Tattoo
            </Box>{" "}
            - Apple Valley, CA
          </li>
          <li>
            <Box component="span" sx={{ fontWeight: 700 }}>
              R&D Tattoo / Grandview Tattoo
            </Box>{" "}
            - New York City
          </li>
          <li>
            <Box component="span" sx={{ fontWeight: 700 }}>
              Chrome Gypsy Tattoo
            </Box>{" "}
            - Las Vegas, NV
          </li>
          <li>
            <Box component="span" sx={{ fontWeight: 700 }}>
              Golden Skull Tattoo
            </Box>{" "}
            - Las Vegas, NV
          </li>
        </Box>
      </Box>
    ),
    image: img5,
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

function CardPillAction({ variant = "contained", children, sx, href }) {
  return (
    <Button
      component={href ? "a" : "button"}
      href={href}
      variant={variant}
      endIcon={
        <Box
          aria-hidden
          className="card-arrow"
          sx={{
            ml: 0.25,
            width: 34,
            height: 34,
            borderRadius: "999px",
            display: "grid",
            placeItems: "center",
            backgroundColor:
              variant === "contained"
                ? "rgba(132, 164, 119, 0.22)"
                : "rgba(255,255,255,0.10)",
            border:
              variant === "contained"
                ? "1px solid rgba(39,58,36,0.12)"
                : "1px solid rgba(255,255,255,0.18)",
            transition:
              "background-color 170ms ease, border-color 170ms ease, transform 170ms ease",
          }}
        >
          <ArrowOutwardRoundedIcon sx={{ fontSize: 18 }} />
        </Box>
      }
      sx={[
        {
          gap: 0.75,
          px: "var(--btn-px)",
          py: "var(--btn-py)",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "rgba(39, 58, 36, 0.30)",
          minHeight: 46,
          "& .MuiButton-endIcon": { ml: 1 },
          "&:hover": {
            borderColor: "rgba(39, 58, 36, 0.45)",
            transform: "translateY(-1px)",
          },
          "&:hover .card-arrow": {
            backgroundColor: "rgba(59, 86, 53, 0.45)",
            borderColor: "rgba(39,58,36,0.35)",
            transform: "translateX(2px)",
          },
        },
        sx,
      ]}
    >
      {children}
    </Button>
  );
}

export default function Tattoos() {
  const sectionRefs = React.useRef([]);
  const [sectionInView, setSectionInView] = React.useState([]);
  const galleryRef = React.useRef(null);
  const [galleryInView, setGalleryInView] = React.useState(false);
  const [activeGalleryImage, setActiveGalleryImage] = React.useState(null);

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

  React.useEffect(() => {
    const node = galleryRef.current;
    if (!node) {
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setGalleryInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGalleryInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Box
        component="section"
        sx={{
          minHeight: { xs: "70vh", md: "80vh" },
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
            transform: "scale(1.05)",
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
            "@keyframes tattooHeroFadeUp": {
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
                animation: "tattooHeroFadeUp 700ms ease forwards",
                animationDelay: "0ms",
                willChange: "opacity, transform",
                "@media (prefers-reduced-motion: reduce)": {
                  animation: "none",
                  opacity: 1,
                  transform: "none",
                },
              }}
            >
              Tattoo Studio
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
                animation: "tattooHeroFadeUp 700ms ease forwards",
                animationDelay: "140ms",
                willChange: "opacity, transform",
                "@media (prefers-reduced-motion: reduce)": {
                  animation: "none",
                  opacity: 1,
                  transform: "none",
                },
              }}
            >
              Experience expert tattoo artistry in a private, serene setting.
              Book your session with 'Little Frank' Whittington today.
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: { xs: 3, sm: 4 },
            }}
          >
            <CardPillAction variant="contained" href="/booking">
              Book Appointment
            </CardPillAction>
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: { xs: 5, md: 7 },
            }}
          >
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

          <Box
            sx={{
              mt: { xs: 4, sm: 5 },
              display: "flex",
            }}
          >
            <CardPillAction variant="contained" href="/booking">
              Book Appointment
            </CardPillAction>
          </Box>

          <Box ref={galleryRef} sx={{ mt: { xs: 5, sm: 6, md: 7 } }}>
            <Typography
              sx={{
                color: "rgba(11, 20, 16, 0.60)",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontSize: { xs: 12, sm: 12, md: 13, lg: 14, xl: 15 },
                mb: 1,
                opacity: galleryInView ? 1 : 0,
                transform: galleryInView ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 700ms ease, transform 700ms ease",
              }}
            >
              Tattoo Gallery
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "rgba(11, 20, 16, 0.92)",
                fontWeight: 500,
                fontSize: { xs: 26, sm: 32, md: 38, lg: 42, xl: 48 },
                lineHeight: { xs: 1.12, md: 1.05 },
                mb: { xs: 2.5, sm: 3 },
                opacity: galleryInView ? 1 : 0,
                transform: galleryInView ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 700ms ease, transform 700ms ease",
                transitionDelay: "120ms",
              }}
            >
              Inkwork From Over The Years
            </Typography>
            <Box
              sx={{
                display: "grid",
                gap: 1.4,
                gridTemplateColumns: {
                  xs: "repeat(2, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(5, minmax(0, 1fr))",
                },
              }}
            >
              {galleryImages.map((src) => (
                <Box
                  key={src}
                  onClick={() => setActiveGalleryImage(src)}
                  sx={{
                    borderRadius: "var(--radius)",
                    overflow: "hidden",
                    border: "1px solid rgba(16,28,22,0.12)",
                    backgroundColor: "rgba(255,255,255,0.90)",
                    cursor: "pointer",
                    position: "relative",
                    aspectRatio: "4/3",
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt="Tattoo gallery"
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
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Dialog
        open={Boolean(activeGalleryImage)}
        onClose={() => setActiveGalleryImage(null)}
        maxWidth={false}
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
            m: 0,
          },
        }}
      >
        <Box
          onClick={() => setActiveGalleryImage(null)}
          sx={{
            p: { xs: 2, sm: 3 },
            display: "grid",
            placeItems: "center",
            cursor: "zoom-out",
          }}
        >
          <Box
            component="img"
            src={activeGalleryImage || ""}
            alt="Tattoo preview"
            sx={{
              maxWidth: "92vw",
              maxHeight: "88vh",
              borderRadius: "var(--radius)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
              backgroundColor: "rgba(0,0,0,0.12)",
            }}
          />
        </Box>
      </Dialog>
    </>
  );
}
