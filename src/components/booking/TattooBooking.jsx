import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  Typography,
} from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { useNavigate } from "react-router-dom";

function ContinueButton({ disabled, onClick }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={disabled}
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
      Continue
    </Button>
  );
}

export default function TattooBooking() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const [downloaded, setDownloaded] = React.useState(false);
  const [consented, setConsented] = React.useState(false);
  const [openPromptModal, setOpenPromptModal] = React.useState(false);

  const emailBody = [
    "Hi my name is <your_name> and I would like to book an appointment with Frank Whittington.",
    "",
    "Please list multiple dates you are available to meet for a consultation or tattoo appointment. (This helps us find a time that works best for you and the artist.) *",
    "",
    "What do you want to get? (Describe the tattoo concept clearly. *",
    "",
    "Symbols, themes, subject matter, size ideas.) *",
    "",
    "Where on your body will the tattoo be placed? (Be specific: left/right, inner/outer, upper/lower.) *",
    "",
    "Style Preference (Color, Grey, Unsure) *",
    "",
    "Is this a cover up? If yes, please describe what is currently there. *",
    "",
    "How much time would you like to book? *",
    "",
    "What is your ideal budget range? (Being honest helps determine feasibility and scheduling.) *",
    "",
    "REFERENCES AND VISUALS: If you have any reference photos/descriptions, please add them here: *",
    "",
    "Any other notes, concerns, or requests? (Pain tolerance, deadlines, meaning behind the tattoo, flexibility.) *",
    "",
    "Phone number for contact?",
    "",
    "**REMINDER:** You acknowledge that the Membership PDF is signed and attached to this email. You acknowledge that everything you are sending is truthful and accurate. Without the membership agreement signed and attached to this email, Whittington Homestead reserves the right to not process your tattoo appointment request.",
  ].join("\n");

  const mailtoHref = `mailto:whittingtonhomestead25@gmail.com?subject=${encodeURIComponent(
    "Tattoo Appointment Request",
  )}&body=${encodeURIComponent(emailBody)}`;

  const canContinue = downloaded && consented;

  function handleContinue() {
    setOpenPromptModal(true);
    window.location.href = mailtoHref;
  }

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 12, sm: 13, md: 14 },
        pb: { xs: 14, sm: 15, md: 16 },
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
          Membership consent is required before booking
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
            Before you proceed
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              color: "rgba(11, 20, 16, 0.72)",
              fontSize: { xs: 14, sm: 15, md: 16 },
              lineHeight: 1.7,
            }}
          >
            You must consent to Whittington Homestead&apos;s Membership
            Agreement before your tattoo appointment can be processed.
          </Typography>

          <Typography
            sx={{
              mt: 1.1,
              color: "rgba(11, 20, 16, 0.72)",
              fontSize: { xs: 14, sm: 15, md: 16 },
              lineHeight: 1.7,
            }}
          >
            Tattoo appointments require a{" "}
            <Box component="span" sx={{ fontWeight: 700 }}>
              $100 non-refundable deposit
            </Box>{" "}
            to hold your spot. This deposit is applied to your appointment cost.
          </Typography>

          <Box
            sx={{
              mt: 2.6,
              p: { xs: 1.6, sm: 2.1 },
              borderRadius: "12px",
              border: "1px solid rgba(39,58,36,0.18)",
              backgroundColor: "rgba(132,164,119,0.12)",
            }}
          >
            <Typography
              sx={{
                color: "rgba(11, 20, 16, 0.88)",
                fontSize: { xs: 14, sm: 15, md: 16 },
                fontWeight: 600,
              }}
            >
              Download the Membership Agreement PDF before proceeding.
            </Typography>

            <Box sx={{ mt: 1.4, display: "flex", flexWrap: "wrap", gap: 1.2 }}>
              <Button
                component="a"
                href="/membership_agreement.pdf"
                download
                variant="outlined"
                onClick={() => setDownloaded(true)}
                sx={{
                  borderColor: "rgba(39,58,36,0.35)",
                  color: "rgba(11, 20, 16, 0.92)",
                  "&:hover": {
                    borderColor: "rgba(39,58,36,0.45)",
                    backgroundColor: "rgba(255,255,255,0.55)",
                  },
                }}
              >
                Download Membership Agreement (PDF)
              </Button>

              <Button
                variant="text"
                onClick={() => setExpanded((prev) => !prev)}
                sx={{
                  color: "rgba(39,58,36,0.92)",
                  fontWeight: 600,
                }}
              >
                {expanded ? "Click to Collapse" : "Click to Expand"}
              </Button>
            </Box>

            <Collapse in={expanded}>
              <Box
                sx={{
                  mt: 1.6,
                  borderRadius: "10px",
                  overflow: "hidden",
                  border: "1px solid rgba(16,28,22,0.14)",
                  backgroundColor: "#fff",
                }}
              >
                <Box
                  component="iframe"
                  src="/membership_agreement.pdf#toolbar=0"
                  title="Whittington Homestead Membership Agreement"
                  sx={{
                    width: "100%",
                    height: { xs: 420, sm: 520, md: 620 },
                    border: 0,
                    display: "block",
                  }}
                />
              </Box>
            </Collapse>
          </Box>

          <FormControlLabel
            sx={{ mt: 2.2, alignItems: "flex-start" }}
            control={
              <Checkbox
                checked={consented}
                onChange={(event) => setConsented(event.target.checked)}
                sx={{
                  color: "rgba(39,58,36,0.55)",
                  "&.Mui-checked": {
                    color: "rgba(39,58,36,0.85)",
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  color: "rgba(11, 20, 16, 0.80)",
                  fontSize: { xs: 14, sm: 15 },
                  lineHeight: 1.45,
                  pt: 0.2,
                }}
              >
                I acknowledge I have downloaded and reviewed the Membership
                Agreement and consent to proceed with the tattoo booking intake.
              </Typography>
            }
          />
        </Box>

        {!openPromptModal ? (
          <Box
            sx={{
              mt: { xs: 2.2, sm: 2.8, md: 3.2 },
              maxWidth: 980,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 1,
            }}
          >
            {!canContinue ? (
              <Typography
                sx={{
                  px: 1.2,
                  py: 0.65,
                  borderRadius: "999px",
                  fontSize: { xs: 11, sm: 12 },
                  backgroundColor: "rgba(11,20,16,0.76)",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                Download PDF and acknowledge consent to continue
              </Typography>
            ) : null}
            <ContinueButton disabled={!canContinue} onClick={handleContinue} />
          </Box>
        ) : null}
      </Container>

      <Dialog
        open={openPromptModal}
        onClose={() => setOpenPromptModal(false)}
        aria-labelledby="tattoo-booking-email-modal"
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "12px",
            border: "1px solid rgba(132,164,119,0.55)",
            backgroundColor: "rgba(81, 116, 73, 1)",
            boxShadow: "0 28px 90px rgba(0,0,0,0.32)",
            backgroundImage: "none",
          },
        }}
      >
        <DialogContent sx={{ pt: 3 }}>
          <Typography
            id="tattoo-booking-email-modal"
            sx={{
              color: "rgba(255,255,255,0.96)",
              fontSize: { xs: 15, sm: 16, md: 17 },
              lineHeight: 1.6,
              fontWeight: 600,
            }}
          >
            You should now be prompted to fill out an email to book your
            appointment. We will get back to you as soon as possible!
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2.5, pt: 1 }}>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              px: { xs: 1.6, sm: "var(--btn-px)" },
              py: { xs: 0.7, sm: "var(--btn-py)" },
              minHeight: { xs: 40, sm: 46 },
              backgroundColor: "rgba(255,255,255,0.96)",
              color: "rgba(11,20,16,0.92)",
              "&:hover": {
                backgroundColor: "rgba(205,230,216,0.92)",
              },
            }}
          >
            Back to Home Page
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
}
