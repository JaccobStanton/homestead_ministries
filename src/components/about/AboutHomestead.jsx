// AboutHomestead.jsx
import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

// Replace these with your real assets
import smallImg from "../../assets/about/about1.webp";
import tallImg from "../../assets/about/about2.webp";

function PillLink({ children = "Who We Are", onClick, href, to, sx }) {
  return (
    <Button
      component={to ? RouterLink : href ? "a" : "button"}
      href={href}
      to={to}
      onClick={onClick}
      variant="outlined"
      endIcon={
        <Box
          aria-hidden
          className="about-cta-badge"
          sx={{
            width: 34,
            height: 34,
            borderRadius: "999px",
            display: "grid",
            placeItems: "center",
            backgroundColor: "rgba(132, 164, 119, 0.18)",
            border: "1px solid rgba(39, 58, 36, 0.18)",
            transition:
              "transform 170ms ease, background-color 170ms ease, border-color 170ms ease",
          }}
        >
          <ArrowOutwardRoundedIcon sx={{ fontSize: 18 }} />
        </Box>
      }
      sx={[
        {
          mt: 3.25,
          alignSelf: "flex-start",
          color: "rgba(11, 20, 16, 0.92)",
          borderColor: "rgba(39, 58, 36, 0.30)",
          backgroundColor: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(6px)",
          px: "var(--btn-px)",
          py: "var(--btn-py)",
          minHeight: 46,

          "&:hover": {
            borderColor: "rgba(39, 58, 36, 0.45)",
            backgroundColor: "rgba(205, 230, 216, 0.55)",
            transform: "translateY(-1px)",
          },

          "&:hover .about-cta-badge": {
            transform: "translateX(2px)",
            backgroundColor: "rgba(132, 164, 119, 0.26)",
            borderColor: "rgba(39, 58, 36, 0.28)",
          },

          "& .MuiButton-endIcon": { ml: 1 },
        },
        sx,
      ]}
    >
      {children}
    </Button>
  );
}

export default function AboutHomestead({
  eyebrow = "A relaxing getaway",
  title = "Experience the best\nof the homestead with us",
  body = (
    <>
      Welcome to Whittington Homestead! Whether you're{" "}
      <Box component="span" sx={{ fontWeight: 700 }}>
        escaping the city for some peace and quiet
      </Box>
      ,{" "}
      <Box component="span" sx={{ fontWeight: 700 }}>
        tying the knot in a handcrafted teepee
      </Box>
      , or{" "}
      <Box component="span" sx={{ fontWeight: 700 }}>
        looking to add fresh ink to your story
      </Box>
      , we’ve got a place for you here.
      <br />
      <br />
      We’re a{" "}
      <Box component="span" sx={{ fontWeight: 700 }}>
        Private Membership Association (PMA)
      </Box>{" "}
      offering a unique blend of{" "}
      <Box component="span" sx={{ fontWeight: 700 }}>
        overnight stays, event hosting, tattoos
      </Box>
      , and{" "}
      <Box component="span" sx={{ fontWeight: 700 }}>
        {" "}
        outdoor recreation
      </Box>
      —everything you need to refresh your spirit without the noise of the
      outside world.
      <br />
      <br />
      We’re not fancy, but{" "}
      <Box component="span" sx={{ fontWeight: 700 }}>
        we are real
      </Box>
      . If you're looking to unplug, reconnect, and{" "}
      <Box component="span" sx={{ fontWeight: 700 }}>
        breathe in the wild air
      </Box>
      , you're in the right spot!
    </>
  ),
  ctaLabel = "Who We Are",
  ctaHref = "/about",
  smallImage = smallImg,
  tallImage = tallImg,
}) {
  const sectionRef = React.useRef(null);
  const [ready, setReady] = React.useState(false);
  const [inView, setInView] = React.useState(false);

  // ✅ NEW: observe the text block itself
  const textRef = React.useRef(null);
  const [textInView, setTextInView] = React.useState(false);

  React.useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  React.useEffect(() => {
    if (!ready) return undefined;

    const node = sectionRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setInView(true));
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -15% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ready]);

  // ✅ NEW: IntersectionObserver for the text area
  React.useEffect(() => {
    if (!ready) return undefined;

    const node = textRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setTextInView(true);
      return undefined;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [ready]);

  const shouldAnimate = ready && inView; // eyebrow + title
  const animateText = ready && textInView; // body + CTA

  return (
    <Box
      component="section"
      ref={sectionRef}
      sx={{
        position: "relative",
        py: { xs: 9, sm: 11, md: 13 },
        backgroundColor: "rgba(255,255,255,0.96)",
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, md: 6 } }}>
        {/* Titles */}
        <Box sx={{ maxWidth: 980 }}>
          <Typography
            sx={{
              color: "rgba(11, 20, 16, 0.60)",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontSize: { xs: 12, sm: 12, md: 13 },
              opacity: shouldAnimate ? 1 : 0,
              transform: shouldAnimate ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 700ms ease, transform 700ms ease",
              transitionDelay: "0ms",
              willChange: "opacity, transform",
              "@media (prefers-reduced-motion: reduce)": {
                transition: "none",
                opacity: 1,
                transform: "none",
              },
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
              fontSize: { xs: 40, sm: 54, md: 72 },
              lineHeight: { xs: 1.08, md: 1.03 },
              letterSpacing: -0.6,
              opacity: shouldAnimate ? 1 : 0,
              transform: shouldAnimate ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 700ms ease, transform 700ms ease",
              transitionDelay: "140ms",
              willChange: "opacity, transform",
              "@media (prefers-reduced-motion: reduce)": {
                transition: "none",
                opacity: 1,
                transform: "none",
              },
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Layout */}
        <Box
          sx={{
            mt: { xs: 5, sm: 6, md: 7 },
            display: "grid",
            columnGap: { xs: 2.2, sm: 2.6, md: 3.8 },
            rowGap: { xs: 1.4, sm: 1.6, md: 1.8 },
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            gridTemplateAreas: {
              xs: `"small" "text" "tall"`,
              md: `"tall small" "tall text"`,
            },
            alignItems: "stretch",
          }}
        >
          {/* Tall image (left) */}
          <Box
            sx={{
              gridArea: "tall",
              borderRadius: "var(--radius)",
              overflow: "hidden",
              position: "relative",
              alignSelf: { md: "stretch" },
              backgroundColor: "rgba(255,255,255,0.80)",
              border: "1px solid rgba(16,28,22,0.10)",
              boxShadow: "0 22px 70px rgba(0,0,0,0.16)",
              width: "100%",
              height: { md: "100%" },
              aspectRatio: { xs: "3/4", sm: "3/4", md: "auto" },
              minHeight: { xs: 320, sm: 420, md: "auto" },
            }}
          >
            <Box
              component="img"
              src={tallImage}
              alt="Homestead exterior"
              loading="lazy"
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Small image (top-right) */}
          <Box
            sx={{
              gridArea: "small",
              borderRadius: "var(--radius)",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "rgba(255,255,255,0.80)",
              border: "1px solid rgba(16,28,22,0.10)",
              boxShadow: "0 22px 70px rgba(0,0,0,0.14)",
              width: "100%",
              aspectRatio: { xs: "16/10", sm: "16/9", md: "16/10" },
            }}
          >
            <Box
              component="img"
              src={smallImage}
              alt="Landscape detail"
              loading="lazy"
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Text */}
          <Box
            ref={textRef} // ✅ NEW: observer attaches here
            sx={{
              gridArea: "text",
              pt: { xs: 0, md: 0 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "rgba(11, 20, 16, 0.70)",
                fontSize: { xs: 15, sm: 16, md: 17 },
                lineHeight: 1.75,
                whiteSpace: "pre-line",
                maxWidth: 560,
                opacity: animateText ? 1 : 0,
                transform: animateText ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 700ms ease, transform 700ms ease",
                transitionDelay: "0ms", // you can keep 420ms if you want after confirming it works
                willChange: "opacity, transform",
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "none",
                  opacity: 1,
                  transform: "none",
                },
              }}
            >
              {body}
            </Typography>

            <PillLink
              to={ctaHref}
              sx={{
                opacity: animateText ? 1 : 0,
                transform: animateText ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 700ms ease, transform 700ms ease",
                transitionDelay: "140ms",
                willChange: "opacity, transform",
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "none",
                  opacity: 1,
                  transform: "none",
                },
              }}
            >
              {ctaLabel}
            </PillLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
