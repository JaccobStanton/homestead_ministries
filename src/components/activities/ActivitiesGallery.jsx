import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

import img1 from "../../assets/activities/good_views.webp";
import img3 from "../../assets/activities/river_access.webp";
import img4 from "../../assets/activities/trail.webp";
import img5 from "../../assets/activities/river_view.webp";

const items = [
  {
    title: "Scenic Views",
    image: img1,
    offset: { md: 0 },
  },
  {
    title: "River Access",
    image: img3,
    offset: { md: 3 },
  },
  {
    title: "Woodland Retreat",
    image: img4,
    offset: { md: 8 },
  },
  {
    title: "Hiking/Exploring",
    image: img5,
    offset: { md: 4 },
  },
];

export default function ActivitiesGallery({
  eyebrow = "A Place To Unwind",
  title = "Let the landscape carry the story",
  body = "Wander past the venues, cabin, and hidden corners that make Whittington Homestead feel like a true retreat. Each space is designed to slow the pace and invite you to stay awhile.",
}) {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 9, sm: 11, md: 13 },
        backgroundColor: "rgba(237, 240, 237, 0.98)",
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, md: 6 } }}>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 4, md: 6 },
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              position: { md: "sticky" },
              top: { md: 120 },
              alignSelf: "start",
            }}
          >
            <Typography
              sx={{
                color: "rgba(11, 20, 16, 0.60)",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontSize: { xs: 12, sm: 12, md: 13, lg: 14, xl: 15 },
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
                fontSize: { xs: 36, sm: 48, md: 60, lg: 72, xl: 80 },
                lineHeight: { xs: 1.08, md: 1.03 },
                letterSpacing: -0.6,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                mt: 2.2,
                maxWidth: "100%",
                color: "rgba(11, 20, 16, 0.70)",
                fontSize: { xs: 14, sm: 15, md: 16, lg: 18, xl: 19 },
                lineHeight: 1.65,
              }}
            >
              {body}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: { xs: 2.2, sm: 2.6, md: 3.2 },
            }}
          >
            {items.map((item) => (
              <Box
                key={item.title}
                sx={{
                  display: "grid",
                  gap: 1.2,
                  mt: { xs: 0, md: item.offset.md },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: { xs: "16/10", md: "16/9" },
                    borderRadius: "var(--radius)",
                    overflow: "hidden",
                    border: "1px solid rgba(16,28,22,0.10)",
                    backgroundColor: "rgba(255,255,255,0.90)",
                    boxShadow: "0 22px 70px rgba(0,0,0,0.12)",
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

                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "rgba(11, 20, 16, 0.92)",
                      fontWeight: 600,
                      fontSize: { xs: 20, sm: 22, md: 24, lg: 28, xl: 32 },
                      lineHeight: 1.2,
                      textDecoration: "underline",
                      textDecorationColor: "#6A8C5F",
                      textUnderlineOffset: "6px",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
