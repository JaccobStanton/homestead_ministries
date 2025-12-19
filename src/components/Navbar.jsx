import * as React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import logoUrl from "../assets/logo.png";

function PillAction({ variant = "contained", children, onClick, sx }) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      endIcon={
        <Box
          aria-hidden
          className="nav-arrow"
          sx={{
            ml: 0.1,
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
          gap: 0.4,
          px: 2.6,
          py: 1.05,
          borderWidth: variant === "outlined" ? 1 : 0,
          "& .MuiButton-endIcon": { ml: 0.5 },
          "&:hover .nav-arrow": {
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

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar position="absolute">
      <Container sx={{ px: { xs: 2, sm: 3, md: 6 } }}>
        <Toolbar
          disableGutters
          sx={{
            py: { xs: 1.2, md: 1.8 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
            <Box
              component="img"
              src={logoUrl}
              alt="Homestead Ministries logo"
              sx={{
                width: 58,
                height: 58,
                objectFit: "contain",
              }}
            />
            <Typography
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                color: "rgba(255,255,255,0.92)",
                fontWeight: 600,
                letterSpacing: 1.6,
                fontSize: { xs: 16, sm: 18 },
              }}
            >
              Whittington Homestead
            </Typography>
          </Box>

          {/* Right side */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1.1 }}>
              <PillAction variant="contained">Book Now</PillAction>
              <PillAction
                variant="outlined"
                sx={{
                  "&:hover": {
                    backgroundColor: "var(--btn-filled-bg-hover)",
                    color: "var(--btn-filled-text)",
                    borderColor: "rgba(255,255,255,0.18)",
                    transform: "translateY(-1px)",
                  },
                  "&:hover .nav-arrow": {
                    backgroundColor: "rgba(59, 86, 53, 0.45)",
                    borderColor: "rgba(39,58,36,0.35)",
                  },
                }}
              >
                Contact Us
              </PillAction>
            </Box>

            {/* hamburger always visible like screenshot */}
            <IconButton
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              sx={{
                width: 46,
                height: 46,
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.22)",
                backgroundColor: "#e0e0e0",
                backdropFilter: "blur(10px)",
                color: "rgba(255,255,255,0.92)",
                "&:hover": {
                  backgroundColor: "rgba(17, 21, 19, 0.45)",
                  borderColor: "rgba(255,255,255,0.32)",
                },
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 320,
            p: 2,
            backgroundColor: "rgba(12, 15, 14, 0.98)",
            height: "100%",
            color: "white",
          }}
          role="presentation"
        >
          <Typography sx={{ fontWeight: 700, letterSpacing: 1.2, mb: 1 }}>
            Menu
          </Typography>

          <List sx={{ p: 0 }}>
            {["Template", "Accommodation", "Book Now", "Contact Us"].map(
              (label) => (
                <ListItemButton
                  key={label}
                  onClick={() => setOpen(false)}
                  sx={{
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.06)" },
                  }}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      sx: { fontWeight: 600, color: "rgba(255,255,255,0.9)" },
                    }}
                  />
                </ListItemButton>
              )
            )}
          </List>

          <Box sx={{ mt: 2, display: "grid", gap: 1 }}>
            <PillAction variant="contained">Book Now</PillAction>
            <PillAction variant="outlined">Contact Us</PillAction>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
