import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignAgreement() {
  const navigate = useNavigate();
  const mountRef = React.useRef(null);

  const [embedError, setEmbedError] = React.useState(false);
  const [loadingDoc, setLoadingDoc] = React.useState(false);
  const [creatingDocError, setCreatingDocError] = React.useState("");

  // user info (used to create a unique doc per person)
  const [clientName, setClientName] = React.useState("");
  const [clientEmail, setClientEmail] = React.useState("");

  // the real embedded signing url (created on demand)
  const [signingUrl, setSigningUrl] = React.useState("");

  const canStart =
    clientName.trim().length >= 2 && clientEmail.trim().includes("@");

  async function handleCreateAgreement() {
    setCreatingDocError("");
    setEmbedError(false);

    if (!canStart) {
      setCreatingDocError("Please enter your name and a valid email.");
      return;
    }

    setLoadingDoc(true);

    try {
      const res = await fetch("/.netlify/functions/create-signwell-doc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: clientName.trim(),
          email: clientEmail.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to create agreement.");
      }

      if (!data?.embedded_signing_url) {
        throw new Error("No embedded_signing_url returned.");
      }

      setSigningUrl(data.embedded_signing_url);
    } catch (err) {
      console.log("Create SignWell doc error:", err);
      setCreatingDocError(err.message || "Something went wrong.");
    } finally {
      setLoadingDoc(false);
    }
  }

  // Load and mount the embedded signing widget after signingUrl is created
  React.useEffect(() => {
    if (!signingUrl) return;

    const init = () => {
      if (!mountRef.current || !window.SignWellEmbed) return;

      mountRef.current.innerHTML = "";

      try {
        const embed = new window.SignWellEmbed({
          url: signingUrl,
          containerId: "signwell-container",
          events: {
            completed: () => {
              navigate("/booking?signed=1");
            },
            closed: () => {
              // signer closed the window
            },
            error: (e) => {
              console.log("SignWell error", e);
              setEmbedError(true);
            },
          },
        });

        if (typeof embed.open === "function") {
          embed.open();
          return;
        }

        // If embed.open isn't available for some reason, treat as error fallback
        setEmbedError(true);
      } catch (e) {
        console.log("SignWell embed init error", e);
        setEmbedError(true);
      }
    };

    const scriptSrc = "https://static.signwell.com/assets/embedded.js";
    const existing = document.querySelector(`script[src="${scriptSrc}"]`);

    if (existing) {
      init();
      return;
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.onload = init;
    document.body.appendChild(script);
  }, [navigate, signingUrl]);

  return (
    <Box
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
          Sign Agreement
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
          Complete the waiver to continue
        </Typography>

        <Typography
          sx={{
            mt: 2.2,
            color: "rgba(11, 20, 16, 0.70)",
            fontSize: { xs: 14, sm: 15, md: 16 },
            lineHeight: 1.65,
            maxWidth: 720,
          }}
        >
          Please review and sign the agreement below. Once you finish, you’ll be
          redirected to the booking page to pick your appointment time.
        </Typography>

        {/* STEP 1: Collect client details + create unique embedded signing url */}
        {!signingUrl ? (
          <Box
            sx={{
              mt: 3,
              borderRadius: "var(--radius)",
              border: "1px solid rgba(16,28,22,0.12)",
              backgroundColor: "rgba(255,255,255,0.90)",
              boxShadow: "0 22px 70px rgba(0,0,0,0.12)",
              p: { xs: 2.4, sm: 3, md: 3.5 },
              maxWidth: 700,
            }}
          >
            <Typography
              sx={{
                color: "rgba(11, 20, 16, 0.75)",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Enter your info to begin signing
            </Typography>

            <Box sx={{ display: "grid", gap: 2 }}>
              <TextField
                label="Full Name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                fullWidth
              />
              <TextField
                label="Email Address"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                fullWidth
              />
            </Box>

            {creatingDocError ? (
              <Typography sx={{ mt: 2, color: "error.main" }}>
                {creatingDocError}
              </Typography>
            ) : null}

            <Button
              variant="contained"
              onClick={handleCreateAgreement}
              disabled={!canStart || loadingDoc}
              sx={{ mt: 2 }}
            >
              {loadingDoc ? (
                <>
                  <CircularProgress size={18} sx={{ mr: 1 }} />
                  Preparing Agreement...
                </>
              ) : (
                "Continue to Agreement"
              )}
            </Button>
          </Box>
        ) : null}

        {/* STEP 2: Embed signing widget */}
        {signingUrl ? (
          <Box
            id="signwell-container"
            ref={mountRef}
            sx={{
              mt: 3,
              width: "100%",
              height: { xs: 780, sm: 860, md: 920 },
              borderRadius: "var(--radius)",
              overflow: "hidden",
              border: "1px solid rgba(16,28,22,0.12)",
              backgroundColor: "rgba(255,255,255,0.90)",
              boxShadow: "0 22px 70px rgba(0,0,0,0.12)",
              display: "grid",
              placeItems: "center",
            }}
          >
            {embedError ? (
              <Box sx={{ textAlign: "center", px: 2 }}>
                <Typography
                  sx={{
                    color: "rgba(11, 20, 16, 0.70)",
                    fontSize: { xs: 14, sm: 15, md: 16 },
                    lineHeight: 1.65,
                  }}
                >
                  The embedded agreement could not load. Please open it in a new
                  tab to sign.
                </Typography>

                <Button
                  component="a"
                  href={signingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Open Agreement
                </Button>
              </Box>
            ) : null}
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}
