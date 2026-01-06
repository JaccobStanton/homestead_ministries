import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function CalendlyInline({
  url = "https://calendly.com/jaccobstanton/tattoo-appointment",
}) {
  const widgetRef = React.useRef(null);

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

        <Box ref={widgetRef} sx={{ mt: 3, minWidth: 320, height: 700 }} />
      </Container>
    </Box>
  );
}
