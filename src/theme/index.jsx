import * as React from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
} from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { brand, breakpoints, radii } from "./tokens";
import { makeComponents } from "./components";

function buildTheme(mode = "dark") {
  const base = createTheme({
    palette: {
      mode,
      primary: { main: brand.moss[300] },
      background: {
        default: "#0b0f0d",
        paper: "rgba(10,12,11,0.55)",
      },
      text: {
        primary: "#FFFFFF",
        secondary: "rgba(255,255,255,0.78)",
      },
      divider: "rgba(255,255,255,0.16)",
    },

    breakpoints,

    shape: {
      borderRadius: radii.md,
    },

    typography: {
      fontFamily: `'Manrope', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`,
      h1: {
        fontWeight: 500,
        letterSpacing: -0.6,
        lineHeight: 1.02,
      },
      body1: {
        lineHeight: 1.55,
      },
      button: {
        fontWeight: 500,
      },
    },
  });

  let theme = createTheme(base, {
    components: makeComponents(base),
  });

  theme = responsiveFontSizes(theme, { factor: 2.6 });
  return theme;
}

function GlobalResponsiveVars() {
  return (
    <GlobalStyles
      styles={(theme) => ({
        "*, *::before, *::after": { boxSizing: "border-box" },

        ":root": {
          "--radius": `${radii.md}px`,
          "--radius-pill": `${radii.pill}px`,
          "--btn-py": theme.spacing(1.2),
          "--btn-px": theme.spacing(2.6),

          // ✅ Button colors (matches your screenshot vibe)
          "--btn-filled-bg": "rgba(255,255,255,0.96)", // default white
          "--btn-filled-bg-hover": "rgba(205,230,216,0.92)", // sage on hover
          "--btn-filled-text": "rgba(11,20,16,0.92)",

          "--btn-outline-border": "rgba(255,255,255,0.55)",
          "--btn-outline-border-hover": "rgba(255,255,255,0.75)",
          "--btn-outline-bg": "rgba(255,255,255,0.06)", // glass
          "--btn-outline-bg-hover": "rgba(255,255,255,0.12)",
          "--btn-outline-text": "rgba(255,255,255,0.92)",

          // Arrow badge styling
          "--badge-bg": "rgba(255,255,255,0.35)",
          "--badge-border": "rgba(16,28,22,0.22)",
          "--badge-bg-invert": "rgba(255,255,255,0.10)",
          "--badge-border-invert": "rgba(255,255,255,0.55)",
        },

        [theme.breakpoints.up("sm")]: {
          ":root": {
            "--btn-py": theme.spacing(1.25),
            "--btn-px": theme.spacing(2.6),
          },
        },

        [theme.breakpoints.up("md")]: {
          ":root": {
            "--btn-py": theme.spacing(1.35),
            "--btn-px": theme.spacing(3.0),
          },
        },
      })}
    />
  );
}

export function AppThemeProvider({ children }) {
  const theme = React.useMemo(() => buildTheme("dark"), []);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalResponsiveVars />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
