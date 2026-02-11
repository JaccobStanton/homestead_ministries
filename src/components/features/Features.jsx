// AboutHomestead.jsx
import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import KitchenRoundedIcon from "@mui/icons-material/KitchenRounded";
import BedRoundedIcon from "@mui/icons-material/BedRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";

import img1 from "../../assets/features/friendly.webp";
import img2 from "../../assets/features/security.webp";
import img3 from "../../assets/features/kitchen.webp";
import img4 from "../../assets/features/cozy.webp";
import img7 from "../../assets/features/fire.webp";
import img8 from "../../assets/features/games.webp";
import img9 from "../../assets/features/wifi.webp";

const items = [
  {
    title: "Friendly & Responsive Service",
    body: "Quick replies and warm help to make your stay effortless.",
    icon: SupportAgentRoundedIcon,
    image: img1,
  },
  {
    title: "Functional Kitchen Facilities",
    body: "Well‑equipped spaces for simple meals and slow mornings.",
    icon: KitchenRoundedIcon,
    image: img3,
  },
  {
    title: "Safety & Security for Your Family",
    body: "Thoughtful measures in place so you can relax fully.",
    icon: ShieldRoundedIcon,
    image: img2,
  },

  {
    title: "Comfortable Sleeping Arrangements",
    body: "Cozy beds and linens for a deep, restful sleep.",
    icon: BedRoundedIcon,
    image: img4,
  },

  {
    title: "Firepit Access",
    body: "Evenings by the fire with s'mores and starry skies.",
    icon: LocalFireDepartmentRoundedIcon,
    image: img7,
  },
  {
    title: "Indoor Games & More",
    body: "Pool games and cozy options for a slower night in.",
    icon: SportsEsportsRoundedIcon,
    image: img8,
  },
  {
    title: "Free High-Speed Wi-Fi Connectivity",
    body: "Stay connected when you need it with reliable, fast Wi-Fi.",
    icon: WifiRoundedIcon,
    image: img9,
  },
];

export default function Features({
  eyebrow = "Features & Facilities",
  title = "Everything you need for an amazing get-away",
}) {
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
      { threshold: 0.2 },
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
      { threshold: 0.2 },
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
        backgroundColor: "rgba(255,255,255,0.95)",
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, md: 6 } }}>
        {/* Titles */}
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
            {eyebrow}
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
            {title}
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
                minHeight: { xs: 360, sm: 380, md: 420 },
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
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "999px",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "rgba(132, 164, 119, 0.18)",
                    border: "1px solid rgba(39,58,36,0.18)",
                  }}
                >
                  <item.icon sx={{ color: "rgba(39,58,36,0.86)" }} />
                </Box>
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
                    transitionDelay: "140ms",
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
                    transitionDelay: "220ms",
                  }}
                >
                  {item.body}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
