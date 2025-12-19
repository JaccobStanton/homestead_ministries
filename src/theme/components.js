// component defaultProps + styleOverrides in one place
export function makeComponents(theme) {
  return {
    MuiContainer: {
      defaultProps: { maxWidth: false },
    },

    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: "transparent",
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 78,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          borderRadius: "var(--radius-pill)",
          padding: "var(--btn-py) var(--btn-px)",
          textTransform: "none",
          fontWeight: 500,
          letterSpacing: "0.01em",
          lineHeight: 1.1,
        },

        containedPrimary: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        },

        outlined: {
          borderWidth: 1,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          borderRadius: "var(--radius-pill)",
          padding: "var(--btn-py) var(--btn-px)",
          textTransform: "none",
          fontWeight: 600,
          letterSpacing: "0.01em",
          lineHeight: 1.1,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 16,

          transition: theme.transitions.create(
            ["transform", "background-color", "border-color", "box-shadow"],
            { duration: 170 }
          ),

          // Slightly taller "pill" feel like the screenshot
          minHeight: 46,
          "& .MuiButton-endIcon": { ml: 0.5 },
        },

        // ✅ Filled Sage Button (Book Now / Book Your Stay)
        containedPrimary: {
          backgroundColor: "var(--btn-filled-bg)",
          color: "var(--btn-filled-text)",
          boxShadow: "none",
          border: "1px solid rgba(255,255,255,0.18)",

          "&:hover": {
            backgroundColor: "var(--btn-filled-bg-hover)",
            transform: "translateY(-1px)",
          },

          // Arrow badge reacts on hover too
          "&:hover .lodge-arrow": {
            backgroundColor: "rgba(255,255,255,0.52)",
            borderColor: "rgba(16,28,22,0.28)",
            transform: "translateX(2px)",
          },
        },

        // ✅ Glass Outline Button (Contact Us / Accommodation)
        outlined: {
          color: "var(--btn-outline-text)",
          borderColor: "var(--btn-outline-border)",
          backgroundColor: "var(--btn-outline-bg)",
          backdropFilter: "blur(8px)",

          "&:hover": {
            borderColor: "var(--btn-outline-border-hover)",
            backgroundColor: "var(--btn-outline-bg-hover)",
            transform: "translateY(-1px)",
          },

          "&:hover .lodge-arrow--invert": {
            backgroundColor: "rgba(255,255,255,0.16)",
            borderColor: "rgba(255,255,255,0.70)",
          },
        },
      },
    },

    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderRadius: "var(--radius)",
          backgroundImage: "none",
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
      },
    },
  };
}
