import * as React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink, useLocation } from "react-router-dom";

function PillAction({ variant = "contained", children, sx, href, to }) {
  return (
    <Button
      component={to ? RouterLink : href ? "a" : "button"}
      to={to}
      href={href}
      target={href && !to ? "_blank" : undefined}
      rel={href && !to ? "noopener noreferrer" : undefined}
      variant={variant}
      endIcon={
        <Box
          aria-hidden
          className="booking-arrow"
          sx={{
            ml: 0.25,
            width: { xs: 28, sm: 34 },
            height: { xs: 28, sm: 34 },
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
          <ArrowOutwardRoundedIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
        </Box>
      }
      sx={[
        {
          gap: 0.75,
          px: { xs: 1.4, sm: "var(--btn-px)" },
          py: { xs: 0.7, sm: "var(--btn-py)" },
          fontSize: { xs: 13, sm: 15, md: 16 },
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "rgba(39, 58, 36, 0.30)",
          minHeight: { xs: 40, sm: 46 },
          "& .MuiButton-endIcon": { ml: { xs: 0.5, sm: 1 } },
          "&:hover": {
            borderColor: "rgba(39, 58, 36, 0.45)",
          },
          "&:hover .booking-arrow": {
            backgroundColor:
              variant === "contained"
                ? "rgba(59, 86, 53, 0.45)"
                : "rgba(17, 21, 19, 0.35)",
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

export default function CalendlyInline({
  url = "https://calendly.com/jaccobstanton/tattoo-appointment",
}) {
  const widgetRef = React.useRef(null);
  const { search } = useLocation();
  const isSigned = new URLSearchParams(search).get("signed") === "1";

  React.useEffect(() => {
    const initWidget = () => {
      if (!widgetRef.current || !window.Calendly) return;
      widgetRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url,
        parentElement: widgetRef.current,
      });
    };

    if (window.Calendly) {
      initWidget();
      return;
    }

    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existing) {
      existing.addEventListener("load", initWidget);
      initWidget();
      return () => existing.removeEventListener("load", initWidget);
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);
    return () => script.removeEventListener("load", initWidget);
  }, [url]);

  return (
    <Box
      id="booking"
      component="section"
      sx={{
        pt: { xs: 12, sm: 13, md: 14 },
        pb: { xs: 8, sm: 10, md: 12 },
        backgroundColor: "rgba(255,255,255,0.96)",
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, md: 6 } }}>
        <Typography
          sx={{
            color: "rgba(11, 20, 16, 0.60)",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontSize: { xs: 12, sm: 12, md: 13 },
          }}
        >
          Book Your Appointment
        </Typography>

        <Typography
          variant="h1"
          sx={{
            mt: 1.4,
            color: "rgba(11, 20, 16, 0.92)",
            fontWeight: 500,
            fontSize: { xs: 36, sm: 48, md: 60 },
            lineHeight: { xs: 1.08, md: 1.03 },
          }}
        >
          Reserve your date
        </Typography>

        {!isSigned ? (
          <Box
            sx={{
              mt: 3,
              borderRadius: "var(--radius)",
              border: "1px solid rgba(16,28,22,0.12)",
              backgroundColor: "rgba(255,255,255,0.90)",
              boxShadow: "0 22px 70px rgba(0,0,0,0.12)",
              p: { xs: 2.4, sm: 3, md: 3.5 },
            }}
          >
            <Typography
              sx={{
                color: "rgba(11, 20, 16, 0.70)",
                fontSize: { xs: 14, sm: 15, md: 16 },
                lineHeight: 1.65,
              }}
            >
              Please sign the agreement before booking your appointment.
            </Typography>
            <PillAction variant="contained" to="/sign-agreement" sx={{ mt: 2 }}>
              Sign Agreement
            </PillAction>
          </Box>
        ) : (
          <Box ref={widgetRef} sx={{ mt: 3, minWidth: 320, height: 700 }} />
        )}
      </Container>
    </Box>
  );
}
