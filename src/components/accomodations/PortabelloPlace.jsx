import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import img1 from "../../assets/camp/camp1.webp";
import img2 from "../../assets/camp/camp2.webp";
import img3 from "../../assets/camp/camp3.webp";
import img4 from "../../assets/camp/camp4.webp";
import img5 from "../../assets/camp/camp5.webp";

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
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "rgba(39, 58, 36, 0.30)",
          minHeight: 46,
          "& .MuiButton-endIcon": { ml: 1 },
          "&:hover": {
            borderColor: "rgba(39, 58, 36, 0.45)",
          },
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

export default function PortabelloPlace() {
  const [activeImage, setActiveImage] = React.useState(gallery[0]);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        pt: { xs: 12, sm: 11, md: 13 },
        pb: { xs: 9, sm: 11, md: 13 },
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
            Portabello Place
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
            Primitive Campsite
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
            For those who like to hike in and rough it just a little—this
            secluded site is a short walk from base, with room for up to three
            small tents.
          </Typography>
        </Box>

        <Box
          sx={{
            mt: { xs: 4.5, sm: 5.5, md: 6.5 },
            display: "grid",
            gap: { xs: 3, md: 5 },
            gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
            alignItems: "start",
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                border: "1px solid rgba(16,28,22,0.10)",
                backgroundColor: "rgba(255,255,255,0.90)",
                boxShadow: "0 22px 70px rgba(0,0,0,0.12)",
                aspectRatio: { xs: "4/3", md: "16/10" },
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={activeImage}
                alt="Portabello Place"
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
                maxWidth: "100%",
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
                    alt="Portabello Place gallery"
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
              minWidth: 0,
              maxWidth: "100%",
              borderRadius: "var(--radius)",
              border: "1px solid rgba(16,28,22,0.10)",
              backgroundColor: "rgba(255,255,255,0.90)",
              boxShadow: "0 22px 70px rgba(0,0,0,0.12)",
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
              1 - 3 guests
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
              Includes
            </Typography>
            <Stack
              spacing={1.2}
              sx={{
                mt: 1.6,
                color: "rgba(11, 20, 16, 0.70)",
                fontSize: { xs: 14, sm: 15, md: 16 },
              }}
            >
              <Typography>Fire ring</Typography>
              <Typography>Forested privacy and solitude</Typography>
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
              Rate
            </Typography>
            <Typography
              sx={{
                mt: 0.8,
                color: "rgba(11, 20, 16, 0.92)",
                fontWeight: 600,
                fontSize: { xs: 16, sm: 17, md: 18 },
              }}
            >
              $20/night
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "rgba(11, 20, 16, 0.60)",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontSize: { xs: 12, sm: 12, md: 13 },
              }}
            >
              Availability
            </Typography>
            <Typography
              sx={{
                mt: 0.8,
                color: "rgba(11, 20, 16, 0.92)",
                fontWeight: 600,
                fontSize: { xs: 16, sm: 17, md: 18 },
              }}
            >
              Open 7 days a week
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
