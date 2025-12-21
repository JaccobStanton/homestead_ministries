import * as React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import heroUrl from "../../assets/hero/hero.webp";

function PillAction({ variant = "contained", children, sx }) {
  return (
    <Button
      variant={variant}
      endIcon={
        <Box
          aria-hidden
          className="hero-arrow"
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
            transition: "background-color 170ms ease, border-color 170ms ease",
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
          "& .MuiButton-endIcon": { ml: 1 },
          "&:hover .hero-arrow": {
            backgroundColor:
              variant === "contained"
                ? "rgba(59, 86, 53, 0.45)"
                : "rgba(17, 21, 19, 0.35)",
            borderColor:
              variant === "contained"
                ? "rgba(39,58,36,0.35)"
                : "rgba(255,255,255,0.28)",
          },
        },
        sx,
      ]}
    >
      {children}
    </Button>
  );
}

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "grid",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#0b0f0d",
      }}
    >
      {/* Background image */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${heroUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.02)",
        }}
      />

      {/* Overlay (darken left for readability like screenshot) */}
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
          pt: { xs: 10, md: 14 },
          px: { xs: 2, sm: 3, md: 6 },
          "@keyframes heroFadeUp": {
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
              animation: "heroFadeUp 700ms ease forwards",
              animationDelay: "0ms",
              willChange: "opacity, transform",
              "@media (prefers-reduced-motion: reduce)": {
                animation: "none",
                opacity: 1,
                transform: "none",
              },
            }}
          >
            Come for the stillness.
            <br />
            Stay for the stories.
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
              animation: "heroFadeUp 700ms ease forwards",
              animationDelay: "140ms",
              willChange: "opacity, transform",
              "@media (prefers-reduced-motion: reduce)": {
                animation: "none",
                opacity: 1,
                transform: "none",
              },
            }}
          >
            Tucked away in the quiet woods of Holladay, Tennessee, Whittington
            Homestead is where modern minimalism meets rugged country living.
          </Typography>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              gap: 1.4,
              flexWrap: "wrap",
              opacity: 0,
              transform: "translateY(12px)",
              animation: "heroFadeUp 700ms ease forwards",
              animationDelay: "280ms",
              willChange: "opacity, transform",
              "@media (prefers-reduced-motion: reduce)": {
                animation: "none",
                opacity: 1,
                transform: "none",
              },
            }}
          >
            <PillAction variant="contained">Book Your Stay</PillAction>
            <PillAction
              variant="outlined"
              sx={{
                "&:hover": {
                  backgroundColor: "var(--btn-filled-bg-hover)",
                  color: "var(--btn-filled-text)",
                  borderColor: "rgba(255,255,255,0.18)",
                  transform: "translateY(-1px)",
                },
                "&:hover .hero-arrow": {
                  backgroundColor: "rgba(59, 86, 53, 0.45)",
                  borderColor: "rgba(39,58,36,0.35)",
                },
              }}
            >
              Accommodations
            </PillAction>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
