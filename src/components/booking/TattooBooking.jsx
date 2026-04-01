import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

function EmailButton({ onClick, href }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      href={href}
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
            backgroundColor: "rgba(132, 164, 119, 0.22)",
            border: "1px solid rgba(39,58,36,0.12)",
            transition:
              "background-color 170ms ease, border-color 170ms ease, transform 170ms ease",
          }}
        >
          <ArrowOutwardRoundedIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
        </Box>
      }
      sx={{
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
          backgroundColor: "rgba(59, 86, 53, 0.45)",
          borderColor: "rgba(39,58,36,0.35)",
          transform: "translateX(2px)",
        },
      }}
    >
      Email now
    </Button>
  );
}

export default function TattooBooking() {
  const emailBody =
    "Hi my name is <your_name>, and I would like to book a tattoo appointment with Frank Whittington at Whittington Homestead Ministries.";

  const mailtoHref = `mailto:whittingtonhomestead25@gmail.com?body=${encodeURIComponent(
    emailBody,
  )}`;

  function handleEmailNow() {
    window.location.href = mailtoHref;
  }

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 12, sm: 13, md: 14 },
        pb: { xs: 10, sm: 11, md: 12 },
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
          Tattoo Booking
        </Typography>

        <Typography
          variant="h1"
          sx={{
            mt: 1.4,
            color: "rgba(11, 20, 16, 0.92)",
            fontWeight: 500,
            fontSize: { xs: 34, sm: 46, md: 58 },
            lineHeight: { xs: 1.08, md: 1.03 },
            maxWidth: 920,
          }}
        >
          Book your tattoo appointment
        </Typography>

        <Box
          sx={{
            mt: 3,
            borderRadius: "var(--radius)",
            border: "1px solid rgba(16,28,22,0.12)",
            backgroundColor: "rgba(255,255,255,0.90)",
            boxShadow: "0 22px 70px rgba(0,0,0,0.12)",
            p: { xs: 2.4, sm: 3, md: 3.5 },
            maxWidth: 980,
          }}
        >
          <Typography
            sx={{
              color: "rgba(11, 20, 16, 0.75)",
              fontWeight: 700,
              fontSize: { xs: 16, sm: 17, md: 18 },
            }}
          >
            Appointment Request
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              color: "rgba(11, 20, 16, 0.72)",
              fontSize: { xs: 14, sm: 15, md: 16 },
              lineHeight: 1.7,
              maxWidth: 900,
            }}
          >
            To book an appointment with your artist{" "}
            <Box component="span" sx={{ fontWeight: 700 }}>
              Frank Whittington{" "}
            </Box>{" "}
            at Whittington Homestead Ministries, please email{" "}
            <Box
              component="a"
              href={mailtoHref}
              sx={{
                fontWeight: 700,
                color: "rgba(39, 58, 36, 0.92)",
                textDecoration: "underline",
                "&:hover": {
                  color: "rgba(39, 58, 36, 1)",
                },
              }}
            >
              whittingtonhomestead25@gmail.com
            </Box>{" "}
            and we will get back to you as soon as possible to set up your
            appointment!
          </Typography>
        </Box>

        <Box
          sx={{
            mt: { xs: 2.2, sm: 2.8, md: 3.2 },
            maxWidth: 980,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <EmailButton href={mailtoHref} onClick={handleEmailNow} />
        </Box>
      </Container>
    </Box>
  );
}
