import * as React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import bannerUrl from "../../assets/banner/banner.webp";

function PillAction({ variant = "contained", children, sx, to, href }) {
  return (
    <Button
      component={to ? RouterLink : href ? "a" : "button"}
      to={to}
      href={href}
      variant={variant}
      endIcon={
        <Box
          aria-hidden
          className="banner-arrow"
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
          "&:hover .banner-arrow": {
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

export default function Banner() {
  const sectionRef = React.useRef(null);
  const [inView, setInView] = React.useState(false);

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

  return (
    <Box
      component="section"
      ref={sectionRef}
      sx={{
        minHeight: { xs: "55vh", md: "60vh" },
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
          backgroundImage: `url(${bannerUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center 50%",
          transform: "scale(1.02)",
        }}
      />

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
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
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
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 700ms ease, transform 700ms ease",
              willChange: "opacity, transform",
              "@media (prefers-reduced-motion: reduce)": {
                transition: "none",
                opacity: 1,
                transform: "none",
              },
            }}
          >
            Come for the peace.
            <br />
            Stay for the presence.
          </Typography>

          <Typography
            sx={{
              mt: 2.2,
              maxWidth: 720,
              color: "rgba(255,255,255,0.88)",
              fontWeight: 600,
              fontSize: { xs: 14, sm: 15, md: 16 },
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 700ms ease, transform 700ms ease",
              transitionDelay: "140ms",
              willChange: "opacity, transform",
              "@media (prefers-reduced-motion: reduce)": {
                transition: "none",
                opacity: 1,
                transform: "none",
              },
            }}
          >
            At Whittington Homestead, we offer more than a place to stay. We
            offer space to breathe, play, create, and connect in perfect
            privacy. Whether you're here for a quiet retreat, a celebration, or
            something spontaneous (like a tattoo to remember it all), our land
            has a little something for you.
          </Typography>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              gap: 1.4,
              flexWrap: "wrap",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 700ms ease, transform 700ms ease",
              transitionDelay: "280ms",
              willChange: "opacity, transform",
              "@media (prefers-reduced-motion: reduce)": {
                transition: "none",
                opacity: 1,
                transform: "none",
              },
            }}
          >
            <PillAction variant="contained">Book Your Stay</PillAction>
            <PillAction
              variant="outlined"
              to="/#accommodations"
              sx={{
                "&:hover": {
                  backgroundColor: "var(--btn-filled-bg-hover)",
                  color: "var(--btn-filled-text)",
                  borderColor: "rgba(255,255,255,0.18)",
                  transform: "translateY(-1px)",
                },
                "&:hover .banner-arrow": {
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
