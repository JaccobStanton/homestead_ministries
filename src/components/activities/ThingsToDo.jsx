import * as React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import img1 from "../../assets/activities/guest_cabin.webp";
import img2 from "../../assets/activities/teepee.webp";
import img3 from "../../assets/activities/tattoo.webp";
import img4 from "../../assets/activities/kayak.webp";

function CardPillAction({ variant = "contained", children, sx }) {
  return (
    <Button
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
          border:
            variant === "contained"
              ? "1px solid rgba(39,58,36,0.18)"
              : "1px solid rgba(39,58,36,0.30)",
          borderWidth: 1,
          minHeight: 46,
          "& .MuiButton-endIcon": { ml: 1 },
          "&:hover .card-arrow": {
            backgroundColor:
              variant === "contained"
                ? "rgba(59, 86, 53, 0.45)"
                : "rgba(255,255,255,0.16)",
            borderColor:
              variant === "contained"
                ? "rgba(39,58,36,0.35)"
                : "rgba(255,255,255,0.28)",
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

const items = [
  {
    title: "Stay a Night (or More)",
    body: "From our cozy tiny cabin with a lookout deck to primitive hike-in campsites, you'll find comfort with just the right amount of rustic.",
    image: img1,
  },
  {
    title: "Event/Wedding Venue",
    body: "Host your ceremony in our hand-built teepee or celebrate in the fully stocked Mycellium Summit barn. Tattoos for the wedding party? We’ve got that, too.",
    image: img2,
    position: "center 35%",
  },
  {
    title: "Tattoo Appointments",
    body: "Book a private session with our resident artist, Little Frank. Appointments are for members only—and spots fill fast.",
    image: img3,
    position: "center 35%",
  },
  {
    title: "Nature and Recreation",
    body: "Ready to hit the river? We’ve got kayaks and a nearby drop-in point. Or stretch your legs on our private trail.",
    image: img4,
    position: "center 75%",
  },
];

export default function ThingsToDo() {
  const sectionRef = React.useRef(null);
  const cardRefs = React.useRef([]);
  const [inView, setInView] = React.useState(false);
  const [cardInView, setCardInView] = React.useState([]);

  React.useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!items.length) {
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setCardInView(Array(items.length).fill(true));
      return undefined;
    }

    setCardInView(Array(items.length).fill(false));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(entry.target.dataset.cardIndex);
          setCardInView((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="section"
      ref={sectionRef}
      sx={{
        position: "relative",
        py: { xs: 9, sm: 11, md: 13 },
        backgroundColor: "rgba(237, 240, 237, 0.98)",
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, md: 6 } }}>
        <Box sx={{ maxWidth: 980 }}>
          <Typography
            sx={{
              color: "rgba(11, 20, 16, 0.60)",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontSize: { xs: 12, sm: 12, md: 13 },
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 700ms ease, transform 700ms ease",
            }}
          >
            Simple moments, quiet adventures
          </Typography>

          <Typography
            variant="h1"
            sx={{
              mt: 1.4,
              color: "rgba(11, 20, 16, 0.92)",
              fontWeight: 500,
              whiteSpace: "pre-line",
              fontSize: { xs: 36, sm: 48, md: 60 },
              lineHeight: { xs: 1.08, md: 1.03 },
              letterSpacing: -0.6,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 700ms ease, transform 700ms ease",
              transitionDelay: "120ms",
            }}
          >
            Explore Tennesse On Our 14 Acre Property
          </Typography>
        </Box>

        <Box
          sx={{
            mt: { xs: 4.5, sm: 5.5, md: 6.5 },
            display: "grid",
            gap: { xs: 2.2, sm: 2.6, md: 3.0 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
          }}
        >
          {items.map((item, index) => (
            <Box
              key={item.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-card-index={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "var(--radius)",
                border: "1px solid rgba(16,28,22,0.10)",
                backgroundColor: "rgba(255,255,255,0.90)",
                boxShadow: "0 22px 70px rgba(0,0,0,0.12)",
                overflow: "hidden",
                minHeight: { xs: 420, sm: 460, md: 520 },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: { xs: "16/10", md: "16/9" },
                  backgroundColor: "rgba(0,0,0,0.08)",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: item.position || "center",
                    display: "block",
                  }}
                />
              </Box>

              <Box
                sx={{
                  p: { xs: 2.2, sm: 2.6 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.4,
                  height: "100%",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "rgba(11, 20, 16, 0.92)",
                    fontWeight: 600,
                    fontSize: { xs: 20, sm: 22, md: 24 },
                    lineHeight: 1.2,
                    opacity: cardInView[index] ? 1 : 0,
                    transform: cardInView[index]
                      ? "translateY(0)"
                      : "translateY(12px)",
                    transition: "opacity 700ms ease, transform 700ms ease",
                    transitionDelay: "180ms",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(11, 20, 16, 0.70)",
                    fontSize: { xs: 14, sm: 15, md: 16 },
                    lineHeight: 1.6,
                    opacity: cardInView[index] ? 1 : 0,
                    transform: cardInView[index]
                      ? "translateY(0)"
                      : "translateY(12px)",
                    transition: "opacity 700ms ease, transform 700ms ease",
                    transitionDelay: "240ms",
                  }}
                >
                  {item.body}
                </Typography>

                <Box sx={{ mt: "auto" }}>
                  <CardPillAction variant="contained">
                    Learn More
                  </CardPillAction>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
