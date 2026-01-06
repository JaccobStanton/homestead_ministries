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
import { Link as RouterLink, useLocation } from "react-router-dom";

function PillAction({
  variant = "contained",
  children,
  onClick,
  sx,
  component,
  href,
}) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      component={component}
      href={href}
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
  const [scrolled, setScrolled] = React.useState(false);
  const { pathname } = useLocation();
  const forceScrolled =
    pathname.startsWith("/accommodations") || pathname === "/booking";

  React.useEffect(() => {
    if (forceScrolled) {
      setScrolled(true);
      return undefined;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  const isScrolled = forceScrolled || scrolled;

  return (
    <AppBar
      color="transparent"
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        backgroundColor: isScrolled
          ? "rgba(81, 116, 73, 0.72)"
          : "rgba(0,0,0,0)",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        boxShadow: isScrolled ? "0 8px 22px rgba(0,0,0,0.16)" : "none",
        backgroundImage: "none",
        borderTopLeftRadius: isScrolled ? 0 : "inherit",
        borderTopRightRadius: isScrolled ? 0 : "inherit",
        borderBottomLeftRadius: isScrolled ? 0 : "inherit",
        borderBottomRightRadius: isScrolled ? 0 : "inherit",
        borderBottom: isScrolled
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid transparent",
        transition: "background-color 220ms ease, border-color 220ms ease",
      }}
    >
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
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              textDecoration: "none",
            }}
            aria-label="Back to top"
          >
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
                component="a"
                href="mailto:whittingtonhomestead25@gmail.com"
                sx={{
                  borderColor: "rgba(255,255,255,0.75)",
                  borderWidth: 1.5,
                  color: "var(--btn-outline-text)",
                  "& .nav-arrow": {
                    backgroundColor: "rgba(132, 164, 119, 0.22)",
                    borderColor: "rgba(39,58,36,0.12)",
                  },
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
                backgroundColor: "var(--btn-filled-bg)",
                backdropFilter: "blur(10px)",
                color: "var(--btn-filled-text)",
                "&:hover": {
                  backgroundColor: "var(--btn-filled-bg-hover)",
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
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 320,
            backgroundColor: "rgba(81, 116, 73, 0.86)",
            backdropFilter: "blur(16px)",
            color: "rgba(255,255,255,0.92)",
            borderLeft: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "-12px 0 28px rgba(0,0,0,0.25)",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          role="presentation"
        >
          <Typography
            sx={{
              fontWeight: 700,
              letterSpacing: 1.4,
              textTransform: "uppercase",
              fontSize: { xs: 12, sm: 13 },
              color: "rgba(255,255,255,0.8)",
              mb: 1,
            }}
          >
            Menu
          </Typography>

          <List sx={{ p: 0 }}>
            {[
              { label: "About", to: "/#about" },
              { label: "Host an Event", to: "/#things-to-do" },
              { label: "Accommodations", to: "/#accommodations" },
              { label: "Features", to: "/#features" },
              { label: "Activities", to: "/#activities" },
              { label: "Membership", to: "/#membership" },
            ].map((item, index) => (
              <ListItemButton
                key={`${item.label}-${index}`}
                component={RouterLink}
                to={item.to}
                onClick={() => setOpen(false)}
                sx={{
                  borderRadius: 2.5,
                  transition: "background-color 150ms ease",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.14)",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: 600,
                      fontSize: { xs: 15, sm: 16 },
                      color: "rgba(255,255,255,0.94)",
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>

          <Box sx={{ mt: 2, display: "grid", gap: 1 }}>
            <PillAction variant="contained">Book Now</PillAction>
            <PillAction
              variant="outlined"
              component="a"
              href="mailto:whittingtonhomestead25@gmail.com"
            >
              Contact Us
            </PillAction>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
