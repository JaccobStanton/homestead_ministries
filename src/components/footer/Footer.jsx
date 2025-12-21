import * as React from "react";
import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const footerColumns = [
  {
    title: "Location",
    lines: ["184 Whittington Road,", "Holladay, TN 38341"],
  },
  {
    title: "Hours",
    lines: [
      "Monday — Friday",
      "6:30am — 11pm",
      "",
      "Saturday — Sunday",
      "7am — 11pm",
    ],
  },
  {
    title: "Contact",
    lines: [
      "whittingtonhomestead25@gmail.com",
      "Frank: 217-454-5169",
      "Nicole: 217-853-9539",
    ],
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        py: { xs: 7, sm: 8, md: 9 },
        backgroundColor: "rgba(81, 116, 73, 0.14)",
        backgroundImage:
          "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03)),\n           repeating-linear-gradient(0deg, rgba(255,255,255,0.035), rgba(255,255,255,0.035) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 3px)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        color: "rgba(255,255,255,0.86)",
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, md: 6 } }}>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 3, sm: 4, md: 6 },
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            justifyItems: "center",
            textAlign: "center",
          }}
        >
          {footerColumns.map((col) => (
            <Stack key={col.title} spacing={1.2} alignItems="center">
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.92)",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontSize: { xs: 13, sm: 14, md: 15 },
                  textDecoration: "underline",
                  textDecorationThickness: "2px",
                  textUnderlineOffset: "6px",
                }}
              >
                {col.title}
              </Typography>

              <Stack spacing={0.6} alignItems="center">
                {col.lines.map((line, index) =>
                  line ? (
                    <Typography key={`${col.title}-${index}`}>
                      {line}
                    </Typography>
                  ) : (
                    <Box key={`${col.title}-${index}`} sx={{ height: 8 }} />
                  )
                )}
              </Stack>
              {col.title === "Location" ? (
                <Box
                  sx={{
                    mt: 0.6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: 0.5, sm: 0.8 },
                  }}
                >
                  <IconButton
                    aria-label="Facebook"
                    sx={{
                      color: "rgba(255,255,255,0.88)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      width: { xs: 36, sm: 40 },
                      height: { xs: 36, sm: 40 },
                    }}
                  >
                    <FacebookRoundedIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                  </IconButton>
                  <IconButton
                    aria-label="Instagram"
                    sx={{
                      color: "rgba(255,255,255,0.88)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      width: { xs: 36, sm: 40 },
                      height: { xs: 36, sm: 40 },
                    }}
                  >
                    <InstagramIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                  </IconButton>
                </Box>
              ) : null}
              {col.title === "Contact" ? (
                <Box
                  sx={{
                    mt: 0.6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconButton
                    component="a"
                    href="mailto:whittingtonhomestead25@gmail.com"
                    aria-label="Email"
                    sx={{
                      color: "rgba(255,255,255,0.88)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      width: { xs: 36, sm: 40 },
                      height: { xs: 36, sm: 40 },
                    }}
                  >
                    <EmailRoundedIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                  </IconButton>
                </Box>
              ) : null}
            </Stack>
          ))}
        </Box>

        <Box
          sx={{
            mt: { xs: 4, sm: 5 },
            pt: { xs: 3, sm: 4 },
            borderTop: "1px solid rgba(255,255,255,0.12)",
            textAlign: "center",
            color: "rgba(255,255,255,0.72)",
          }}
        >
          <Box sx={{ display: "grid", gap: 0.4 }}>
            <Typography sx={{ fontSize: { xs: 13, sm: 14 } }}>
              Created by:
            </Typography>
            <Typography sx={{ fontWeight: 600, fontSize: { xs: 13, sm: 14 } }}>
              Stanton Studio - Web Design
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
