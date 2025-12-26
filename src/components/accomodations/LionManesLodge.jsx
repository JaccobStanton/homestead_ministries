import * as React from "react";
import { Box, Container, Typography, Stack, Divider, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import img1 from "../../assets/accomodations/accom1.webp";
import img2 from "../../assets/accomodations/lion1.webp";
import img3 from "../../assets/accomodations/lion2.webp";
import img4 from "../../assets/accomodations/lion3.webp";
import img5 from "../../assets/accomodations/accom21.webp";

const gallery = [img1, img2, img3, img4, img5];

function CardPillAction({ variant = "contained", children, sx, to, href }) {
  return (
    <Button
      component={to ? RouterLink : href ? "a" : "button"}
      to={to}
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
          borderWidth: variant === "outlined" ? 1 : 0,
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

export default function LionManesLodge() {
  const [activeImage, setActiveImage] = React.useState(gallery[0]);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        pt: { xs: 9, sm: 11, md: 13 },
        pb: { xs: 3.5, sm: 4.5, md: 5.5 },
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
            Lion’s Mane Lodge
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
            The Tiny Cabin Escape
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "rgba(11, 20, 16, 0.70)",
              fontSize: { xs: 14, sm: 15, md: 16 },
              lineHeight: 1.65,
              maxWidth: 720,
            }}
          >
            Minimalism meets comfort in this 160 sq ft off-grid-style cabin with
            a 120 sq ft lookout deck—perfect for sunrise coffee or stargazing.
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
                aspectRatio: { xs: "4/3", md: "16/10" },
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={activeImage}
                alt="Lion’s Mane Lodge"
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
                display: "flex",
                gap: 1.4,
                overflowX: "auto",
                pb: 0.5,
                WebkitOverflowScrolling: "touch",
              }}
            >
              {gallery.map((src) => (
                <Box
                  key={src}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveImage(src)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveImage(src);
                    }
                  }}
                  sx={{
                    borderRadius: "var(--radius)",
                    overflow: "hidden",
                    border:
                      activeImage === src
                        ? "2px solid rgba(39,58,36,0.35)"
                        : "1px solid rgba(16,28,22,0.10)",
                    backgroundColor: "rgba(255,255,255,0.90)",
                    aspectRatio: "4/3",
                    position: "relative",
                    cursor: "pointer",
                    minWidth: { xs: 90, sm: 120 },
                    flex: "0 0 auto",
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt="Lion’s Mane Lodge gallery"
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
              Sleeps
            </Typography>
            <Typography
              sx={{
                mt: 0.8,
                color: "rgba(11, 20, 16, 0.92)",
                fontWeight: 600,
                fontSize: { xs: 16, sm: 17, md: 18 },
              }}
            >
              1–3 guests
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
              Amenities
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
                Full-size bed, pull-out couch, and single cot
              </Typography>
              <Typography>A/C and electric heat</Typography>
              <Typography>
                Mini fridge, coffee maker, toaster, 2-burner stove
              </Typography>
              <Typography>Foot-pump sink and compost toilet</Typography>
              <Typography>Camp shower</Typography>
              <Typography>
                Outdoor charcoal grill, fire pit with wood
              </Typography>
              <Typography>Outdoor furniture, books, and games</Typography>
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
              <Typography>$80/night (Sunday–Thursday)</Typography>
              <Typography>$100/night (Friday & Saturday)</Typography>
            </Stack>

            <Divider
              sx={{
                my: { xs: 2, sm: 2.5 },
                borderColor: "rgba(16,28,22,0.12)",
              }}
            />

            <Stack
              spacing={1.2}
              sx={{
                color: "rgba(11, 20, 16, 0.70)",
                fontSize: { xs: 14, sm: 15, md: 16 },
              }}
            >
              <Typography>Pets allowed (leashed and trained)</Typography>
              <Typography>Smoking allowed</Typography>
              <Typography>Free parking, keypad entry</Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
