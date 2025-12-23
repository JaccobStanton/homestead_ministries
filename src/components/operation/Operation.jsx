import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import operationImg from "../../assets/membership/mem1.webp";

export default function Operation({
  eyebrow = "How We Operate",
  title = "Private membership, clear and simple",
  paragraphs = [
    "Becoming a member means entering into a private agreement with us, giving you exclusive access to our property, events, and amenities reserved for members only.",
    "Our Private Membership Association is simple and transparent. There are no hidden fees, no annual dues, and no extra requirements to uphold your membership.",
  ],
  steps = [
    "Your membership fee is the cost of your reservation.",
    "At the time of booking, you’ll sign our private membership agreement. This agreement ensures that while on our property, you remain within the private sector.",
    "Once signed and paid, you’re officially a member—nothing more is required.",
  ],
  closing = "That’s it! No renewals, no fine print—just an easy way to enjoy everything we offer within our private community.",
}) {
  return (
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
            mt: { xs: 4, sm: 4.5, md: 5 },
            display: "grid",
            gap: { xs: 3.5, md: 5 },
            gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              color: "rgba(11, 20, 16, 0.70)",
              fontSize: { xs: 14, sm: 15, md: 16 },
              lineHeight: 1.75,
              display: "grid",
              gap: { xs: 2.2, sm: 2.6, md: 3 },
            }}
          >
            {paragraphs.map((text) => (
              <Typography key={text}>{text}</Typography>
            ))}

            <Box
              sx={{
                display: "grid",
                gap: { xs: 1.4, sm: 1.6 },
                pl: { xs: 2.2, sm: 2.6 },
                borderLeft: "2px solid rgba(39,58,36,0.18)",
              }}
            >
              {steps.map((step) => (
                <Typography key={step} sx={{ fontWeight: 600 }}>
                  {step}
                </Typography>
              ))}
            </Box>

            <Typography sx={{ fontWeight: 600 }}>{closing}</Typography>

            <Typography>
              You can view a copy of the agreement{" "}
              <Box
                component="a"
                href="/membership_agreement.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#6A8C5F", textDecoration: "underline" }}
              >
                here
              </Box>
              .
            </Typography>
          </Box>

          <Box
            sx={{
              borderRadius: "var(--radius)",
              overflow: "hidden",
              border: "1px solid rgba(16,28,22,0.10)",
              backgroundColor: "rgba(255,255,255,0.90)",
              boxShadow: "0 22px 70px rgba(0,0,0,0.12)",
              aspectRatio: { xs: "16/10", md: "4/3" },
              position: "relative",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src={operationImg}
              alt="Riverside view at Whittington Homestead"
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
        </Box>
      </Container>
    </Box>
  );
}
