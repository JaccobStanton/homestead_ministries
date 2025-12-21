// AboutHomestead.jsx
import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import KitchenRoundedIcon from "@mui/icons-material/KitchenRounded";
import BedRoundedIcon from "@mui/icons-material/BedRounded";
// import ShowerRoundedIcon from "@mui/icons-material/ShowerRounded";
// import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";

import img1 from "../../assets/features/friendly.webp";
import img2 from "../../assets/features/security.webp";
import img3 from "../../assets/features/kitchen.webp";
import img4 from "../../assets/features/cozy.webp";
// import img5 from "../../assets/features/fire.webp";
// import img6 from "../../assets/activities/tattoo.webp";
import img7 from "../../assets/features/fire.webp";
import img8 from "../../assets/features/games.webp";

const items = [
  {
    title: "Friendly & Responsive Service",
    body: "Quick replies and warm help to make your stay effortless.",
    icon: SupportAgentRoundedIcon,
    image: img1,
  },
  {
    title: "Safety & Security for Your Family",
    body: "Thoughtful measures in place so you can relax fully.",
    icon: ShieldRoundedIcon,
    image: img2,
  },
  {
    title: "Functional Kitchen Facilities",
    body: "Well‑equipped spaces for simple meals and slow mornings.",
    icon: KitchenRoundedIcon,
    image: img3,
  },
  {
    title: "Comfortable Sleeping Arrangements",
    body: "Cozy beds and linens for a deep, restful sleep.",
    icon: BedRoundedIcon,
    image: img4,
  },
  //   {
  //     title: "Clean & Well-Maintained Bathrooms",
  //     body: "Bright, tidy spaces with fresh essentials ready to go.",
  //     icon: ShowerRoundedIcon,
  //     image: img5,
  //   },
  //   {
  //     title: "Free High-Speed Wi-Fi Connectivity",
  //     body: "Reliable connection for streaming, calls, or remote work.",
  //     icon: WifiRoundedIcon,
  //     image: img6,
  //   },
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
];

export default function Features({
  eyebrow = "Features & Facilities",
  title = "Everything you need for an amazing get-away",
}) {
  return (
    <Box
      component="section"
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
          {items.map((item) => (
            <Box
              key={item.title}
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
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(11, 20, 16, 0.70)",
                    fontSize: { xs: 14, sm: 15, md: 16 },
                    lineHeight: 1.6,
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
