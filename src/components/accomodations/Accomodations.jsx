// AboutHomestead.jsx
import * as React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link as RouterLink } from "react-router-dom";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

import card1Img from "../../assets/accomodations/accom1.webp";
import card2Img from "../../assets/camp/camp1.webp";

function CardPillAction({ variant = "contained", children, sx, to, href }) {
  return (
    <Button
      component={to ? RouterLink : href ? "a" : "button"}
      to={to}
      href={href}
      variant={variant}
      endIcon={
        <Box
          aria-hidden
          className="card-arrow"
          sx={{
            ml: 0.25,
            width: { xs: 28, sm: 34 },
            height: { xs: 28, sm: 34 },
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
            transition:
              "background-color 170ms ease, border-color 170ms ease, transform 170ms ease",
          }}
        >
          <ArrowOutwardRoundedIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
        </Box>
      }
      sx={[
        {
          gap: 0.75,
          px: { xs: 1.4, sm: "var(--btn-px)" },
          py: { xs: 0.7, sm: "var(--btn-py)" },
          fontSize: { xs: 13, sm: 15, md: 16 },
          borderWidth: variant === "outlined" ? 1 : 0,
          minHeight: { xs: 40, sm: 46 },
          "& .MuiButton-endIcon": { ml: { xs: 0.5, sm: 1 } },
          "&:hover .card-arrow": {
            backgroundColor:
              variant === "contained"
                ? "rgba(59, 86, 53, 0.45)"
                : "rgba(255,255,255,0.16)",
            borderColor:
              variant === "contained"
                ? "rgba(39,58,36,0.35)"
                : "rgba(255,255,255,0.28)",
            transform: "translateX(2px)",
          },
        },
        sx,
      ]}
    >
      {children}
    </Button>
  );
}

function StayCard({
  image,
  imageScale = 1.02,
  imageFit = "cover",
  imagePosition = "center",
  contentVisible = true,
  title,
  description,
  price = "$220",
  priceSuffix = "per night",
  beds = "Multiple Beds",
  sleeps = "Sleeps 5",
  viewDetailsTo,
  onViewDetails,
  onBookNow,
}) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--radius)",
        border: "1px solid rgba(16,28,22,0.10)",
        boxShadow: "0 26px 80px rgba(0,0,0,0.16)",
        backgroundColor: "rgba(0,0,0,0.25)",
        minHeight: { xs: 420, sm: 520, md: 620 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background image */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: imageFit,
          backgroundPosition: imagePosition,
          backgroundRepeat: "no-repeat",
          transform: `scale(${imageScale})`,
        }}
      />

      {/* Overlay for readability */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.38) 45%, rgba(0,0,0,0.10) 75%, rgba(0,0,0,0.06) 100%)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          mt: "auto",
          p: { xs: 3, sm: 4, md: 5 },
        }}
      >
        <Box sx={{ maxWidth: 720 }}>
          <Typography
            variant="h2"
            sx={{
              color: "rgba(255,255,255,0.96)",
              fontWeight: 500,
              letterSpacing: -0.4,
              lineHeight: 1.05,
              fontSize: { xs: 36, sm: 44, md: 52 },
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 700ms ease, transform 700ms ease",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              mt: 1.6,
              color: "rgba(255,255,255,0.86)",
              fontWeight: 600,
              fontSize: { xs: 14, sm: 15, md: 16 },
              lineHeight: 1.65,
              maxWidth: 680,
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 700ms ease, transform 700ms ease",
              transitionDelay: "120ms",
            }}
          >
            {description}
          </Typography>

          {/* Meta row */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              mt: { xs: 2.4, sm: 2.8 },
              flexWrap: "wrap",
              alignItems: "center",
              color: "rgba(255,255,255,0.86)",
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 700ms ease, transform 700ms ease",
              transitionDelay: "240ms",
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <LocalOfferOutlinedIcon sx={{ fontSize: 20, opacity: 0.9 }} />
              <Typography
                sx={{ fontWeight: 700, fontSize: { xs: 14, md: 15 } }}
              >
                From {price}{" "}
                <Box component="span" sx={{ fontWeight: 600, opacity: 0.9 }}>
                  {priceSuffix}
                </Box>
              </Typography>
            </Stack>

            <Divider
              flexItem
              orientation="vertical"
              sx={{
                display: { xs: "none", sm: "block" },
                borderColor: "rgba(255,255,255,0.26)",
              }}
            />

            <Stack direction="row" spacing={1} alignItems="center">
              <BedOutlinedIcon sx={{ fontSize: 22, opacity: 0.9 }} />
              <Typography
                sx={{ fontWeight: 700, fontSize: { xs: 14, md: 15 } }}
              >
                {beds}
              </Typography>
            </Stack>

            <Divider
              flexItem
              orientation="vertical"
              sx={{
                display: { xs: "none", sm: "block" },
                borderColor: "rgba(255,255,255,0.26)",
              }}
            />

            <Stack direction="row" spacing={1} alignItems="center">
              <GroupsOutlinedIcon sx={{ fontSize: 22, opacity: 0.9 }} />
              <Typography
                sx={{ fontWeight: 700, fontSize: { xs: 14, md: 15 } }}
              >
                {sleeps}
              </Typography>
            </Stack>
          </Stack>

          {/* Actions */}
          <Stack
            direction="row"
            spacing={1.4}
            sx={{
              mt: { xs: 2.8, sm: 3.2 },
              flexWrap: "wrap",
            }}
          >
            <CardPillAction
              variant="contained"
              to={viewDetailsTo}
              onClick={onViewDetails}
              sx={{
                "&:hover": { transform: "translateY(-1px)" },
              }}
            >
              View Details
            </CardPillAction>

            <CardPillAction
              variant="outlined"
              onClick={onBookNow}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(205,230,216,0.30)",
                  color: "rgba(255,255,255,0.96)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              Book Now
            </CardPillAction>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default function Accommodations({
  eyebrow = "Explore Our Accommodations",
  title = "Discover our most popular accommodations",
}) {
  // Keep your existing observers/animations if you want
  const sectionRef = React.useRef(null);
  const headerRef = React.useRef(null);
  const card1Ref = React.useRef(null);
  const card2Ref = React.useRef(null);
  const [headerInView, setHeaderInView] = React.useState(false);
  const [cardInView, setCardInView] = React.useState([false, false]);

  React.useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setHeaderInView(true);
      setCardInView([true, true]);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = entry.target.dataset.fadeIndex;
          if (index === "header") {
            setHeaderInView(true);
          } else if (index === "0") {
            setCardInView((prev) => [true, prev[1]]);
          } else if (index === "1") {
            setCardInView((prev) => [prev[0], true]);
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="section"
      ref={sectionRef}
      sx={{
        position: "relative",
        py: { xs: 9, sm: 11, md: 13 },
        backgroundColor: "rgba(255,255,255,0.95)",
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, md: 6 } }}>
        {/* Titles */}
        <Box
          ref={headerRef}
          data-fade-index="header"
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ maxWidth: 980 }}>
            <Typography
              sx={{
                color: "rgba(11, 20, 16, 0.60)",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontSize: { xs: 12, sm: 12, md: 13 },
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 700ms ease, transform 700ms ease",
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
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 700ms ease, transform 700ms ease",
                transitionDelay: "120ms",
              }}
            >
              {title}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <CardPillAction
              variant="contained"
              to="/accommodations"
              sx={{
                border: "1px solid rgba(39, 58, 36, 0.30)",
                "&:hover": {
                  transform: "translateY(-1px)",
                  borderColor: "rgba(39, 58, 36, 0.45)",
                },
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 700ms ease, transform 700ms ease",
                transitionDelay: "240ms",
              }}
            >
              Explore All
            </CardPillAction>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 4.5, sm: 5.5, md: 6.5 },
            display: "grid",
            gap: { xs: 2.2, sm: 2.8, md: 3.2 },
          }}
        >
          <Box
            ref={card1Ref}
            data-fade-index="0"
            sx={{
              height: "100%",
              opacity: cardInView[0] ? 1 : 0,
              transform: cardInView[0] ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 700ms ease, transform 700ms ease",
            }}
          >
            <StayCard
              image={card1Img}
              contentVisible={cardInView[0]}
              viewDetailsTo="/accommodations/lion-manes-lodge"
              title="Lion's Mane Lodge"
              description="Minimalism meets comfort in this 160 sq ft off-grid-style cabin with a 120 sq ft lookout deck—perfect for sunrise coffee or stargazing."
              price="$80 - $100"
              priceSuffix="per night"
              beds="Multiple Beds"
              sleeps="Sleeps 1-3"
              onViewDetails={() => {}}
              onBookNow={() => {}}
            />
          </Box>

          <Box
            ref={card2Ref}
            data-fade-index="1"
            sx={{
              height: "100%",
              opacity: cardInView[1] ? 1 : 0,
              transform: cardInView[1] ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 700ms ease, transform 700ms ease",
              transitionDelay: "140ms",
            }}
          >
            <StayCard
              image={card2Img}
              contentVisible={cardInView[1]}
              viewDetailsTo="/accommodations/portabello-place"
              title="Portabello Place"
              description="Our primitive campsite for those who like to hike in and rough it just a little—this secluded site is a short walk from base, with room for up to three small tents."
              price="$20"
              priceSuffix="per night"
              beds="Tent/camper"
              sleeps="Sleeps 1-3"
              onViewDetails={() => {}}
              onBookNow={() => {}}
            />
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 3, sm: 3.5 },
            display: { xs: "flex", md: "none" },
            justifyContent: "flex-start",
          }}
        >
          <CardPillAction
            variant="contained"
            to="/accommodations"
            sx={{
              border: "1px solid rgba(39, 58, 36, 0.30)",
              "&:hover": {
                transform: "translateY(-1px)",
                borderColor: "rgba(39, 58, 36, 0.45)",
              },
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 700ms ease, transform 700ms ease",
              transitionDelay: "240ms",
            }}
          >
            Explore All
          </CardPillAction>
        </Box>
      </Container>
    </Box>
  );
}
