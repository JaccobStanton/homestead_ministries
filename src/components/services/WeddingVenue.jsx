import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import heroImage from "../../assets/wedding/Hero.webp";
import img1 from "../../assets/about/about2.webp";
import img2 from "../../assets/wedding/wedding1.webp";
import img3 from "../../assets/wedding/wedding2.webp";
import img4 from "../../assets/wedding/wedding3.webp";
import img5 from "../../assets/wedding/wedding4.webp";
import img6 from "../../assets/wedding/wedding5.webp";
import img7 from "../../assets/wedding/wedding7.webp";
import img8 from "../../assets/wedding/wedding8.webp";
import img9 from "../../assets/wedding/wedding9.webp";
import img10 from "../../assets/wedding/wedding10.webp";

const gallery = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
          borderWidth: variant === "outlined" ? 1 : 1.5,
          borderStyle: "solid",
          borderColor:
            variant === "contained"
              ? "rgba(39,58,36,0.35)"
              : "rgba(39,58,36,0.32)",
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

export default function WeddingVenue() {
  const [activeImage, setActiveImage] = React.useState(gallery[0]);

  return (
    <>
      <Box
        component="section"
        sx={{
          minHeight: { xs: "70vh", md: "80vh" },
          position: "relative",
          display: "grid",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "#0b0f0d",
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(9,14,11,0.45), rgba(9,14,11,0.65)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            backgroundRepeat: "no-repeat",
          }}
        />

        <Container
          sx={{
            position: "relative",
            zIndex: 1,
            pt: { xs: 10, md: 14 },
            pb: { xs: 10, md: 14 },
            px: { xs: 2, sm: 3, md: 6 },
            "@keyframes venueFadeUp": {
              "0%": { opacity: 0, transform: "translateY(12px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
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
                opacity: 0,
                transform: "translateY(12px)",
                animation: "venueFadeUp 700ms ease forwards",
                animationDelay: "0ms",
                willChange: "opacity, transform",
                "@media (prefers-reduced-motion: reduce)": {
                  animation: "none",
                  opacity: 1,
                  transform: "none",
                },
              }}
            >
              Wedding &
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: "rgba(255,255,255,0.96)",
                fontWeight: 500,
                fontSize: { xs: 44, sm: 58, md: 74 },
                lineHeight: { xs: 1.05, md: 1.02 },
                opacity: 0,
                transform: "translateY(12px)",
                animation: "venueFadeUp 700ms ease forwards",
                animationDelay: "0ms",
                willChange: "opacity, transform",
                "@media (prefers-reduced-motion: reduce)": {
                  animation: "none",
                  opacity: 1,
                  transform: "none",
                },
              }}
            >
              Event Venue
            </Typography>

            <Typography
              sx={{
                mt: 2.2,
                maxWidth: 720,
                color: "rgba(255,255,255,0.88)",
                fontWeight: 600,
                fontSize: { xs: 14, sm: 15, md: 16 },
                opacity: 0,
                transform: "translateY(12px)",
                animation: "venueFadeUp 700ms ease forwards",
                animationDelay: "140ms",
                willChange: "opacity, transform",
                "@media (prefers-reduced-motion: reduce)": {
                  animation: "none",
                  opacity: 1,
                  transform: "none",
                },
              }}
            >
              Host your ceremony in our hand-built teepee or celebrate in the
              fully stocked Mycellium Summit barn.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          position: "relative",
          py: { xs: 9, sm: 11, md: 13 },
          backgroundColor: "rgba(255,255,255,0.96)",
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
              }}
            >
              Golden Teacher Teepee
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
              Ceremony Venue
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "rgba(11, 20, 16, 0.70)",
                fontSize: { xs: 14, sm: 15, md: 16 },
                lineHeight: 1.7,
                maxWidth: 720,
              }}
            >
              Say “I do” in a hand-built teepee surrounded by woodland charm.
              This intimate ceremony space is perfect for micro-weddings,
              elopements, vow renewals, or unique gatherings.
            </Typography>
          </Box>

          <Box
            sx={{
              mt: { xs: 4.5, sm: 5.5, md: 6.5 },
              display: "grid",
              gap: { xs: 3, md: 5 },
              gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
              alignItems: "start",
            }}
          >
            <Box>
              <Box
                sx={{
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                  border: "1px solid rgba(16,28,22,0.10)",
                  backgroundColor: "rgba(255,255,255,0.90)",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                  maxWidth: { xs: "100%", md: 640, lg: 700 },
                  aspectRatio: { xs: "4/3", sm: "4/3", md: "4/3" },
                  maxHeight: { xs: 420, sm: 520, md: 680 },
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={activeImage}
                  alt="Golden Teacher Teepee"
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
                  mt: 2,
                  width: "100%",
                  maxWidth: { xs: "100%", md: 640, lg: 700 },
                  display: "grid",
                  gap: 1.4,
                  gridTemplateColumns: {
                    xs: "repeat(2, minmax(0, 1fr))",
                    sm: "repeat(3, minmax(0, 1fr))",
                    md: "repeat(5, minmax(0, 1fr))",
                  },
                }}
              >
                {gallery.map((src) => (
                  <Box
                    key={src}
                    onClick={() => setActiveImage(src)}
                    sx={{
                      borderRadius: "var(--radius)",
                      overflow: "hidden",
                      border:
                        src === activeImage
                          ? "2px solid rgba(39,58,36,0.45)"
                          : "1px solid rgba(16,28,22,0.12)",
                      cursor: "pointer",
                      position: "relative",
                      aspectRatio: "4/3",
                    }}
                  >
                    <Box
                      component="img"
                      src={src}
                      alt="Golden Teacher Teepee gallery"
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

              <Box sx={{ mt: 2.4 }}>
                <CardPillAction variant="contained">Book Now</CardPillAction>
              </Box>
            </Box>

            <Box
              sx={{
                borderRadius: "var(--radius)",
                border: "1px solid rgba(16,28,22,0.10)",
                backgroundColor: "rgba(255,255,255,0.90)",
                boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                p: { xs: 2.4, sm: 3, md: 3.5 },
              }}
            >
              <Typography
                sx={{
                  color: "rgba(11, 20, 16, 0.60)",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontSize: { xs: 12, sm: 12, md: 13 },
                }}
              >
                Seating Capacity
              </Typography>
              <Typography
                sx={{
                  mt: 0.8,
                  color: "rgba(11, 20, 16, 0.92)",
                  fontWeight: 600,
                  fontSize: { xs: 16, sm: 17, md: 18 },
                }}
              >
                Up to 12 guests
              </Typography>

              <Divider
                sx={{
                  my: { xs: 2, sm: 2.5 },
                  borderColor: "rgba(16,28,22,0.12)",
                }}
              />

              <Typography
                sx={{
                  color: "rgba(11, 20, 16, 0.60)",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontSize: { xs: 12, sm: 12, md: 13 },
                }}
              >
                Optional
              </Typography>
              <Stack
                spacing={1.2}
                sx={{
                  mt: 1.6,
                  color: "rgba(11, 20, 16, 0.70)",
                  fontSize: { xs: 14, sm: 15, md: 16 },
                }}
              >
                <Typography>
                  Wedding party tattoos available upon request (pricing varies)
                </Typography>
              </Stack>

              <Divider
                sx={{
                  my: { xs: 2, sm: 2.5 },
                  borderColor: "rgba(16,28,22,0.12)",
                }}
              />

              <Typography
                sx={{
                  color: "rgba(11, 20, 16, 0.60)",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontSize: { xs: 12, sm: 12, md: 13 },
                }}
              >
                Rates
              </Typography>
              <Stack
                spacing={1.2}
                sx={{
                  mt: 1.6,
                  color: "rgba(11, 20, 16, 0.70)",
                  fontSize: { xs: 14, sm: 15, md: 16 },
                }}
              >
                <Typography>Base Package: $500 (includes officiant)</Typography>
                <Typography>Reception Barn Add-On: Additional $300</Typography>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
