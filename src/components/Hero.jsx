"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  Box,
  Typography,
  Button,
  Stack,
  Avatar,
  Chip,
  IconButton,
  Tooltip,
  Divider,
  useTheme,
} from "@mui/material";

import {
  GitHub,
  Phone,
  Telegram,
  KeyboardArrowDown,
  Download,
} from "@mui/icons-material";

export default function Hero() {
  const theme = useTheme();

  const stack = [
    "Next.js",
    "React",
    "Vue.js",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "MUI",
    "REST API",
  ];

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 6 },
        py: { xs: 8, md: 10 },
        position: "relative",
        overflow: "hidden",
        background:
          theme.palette.mode === "dark"
            ? "radial-gradient(circle at top, #1e293b 0%, #020617 60%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          maxWidth: 1200,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { xs: 6, md: 8 },
        }}
      >
        {/* TEXT */}
        <Stack spacing={2.5} sx={{ maxWidth: 640 }}>
          <Typography
            component="h1"
            variant="h2"
            fontWeight={900}
            sx={{ lineHeight: 1.1 }}
          >
            Hi All, I’m{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Jumanazar
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 560,
              fontSize: { xs: "1rem", md: "1.05rem" },
            }}
          >
            I build fast, clean, and production-ready web apps — focusing on UI
            quality, performance, and API integration.
          </Typography>

          <Box sx={{ minHeight: 34 }}>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1500,
                "React.js Developer",
                1500,
                "Next.js Developer",
                1500,
                "Vue.js Developer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                color: theme.palette.mode === "dark" ? theme.palette.secondary : theme.palette.primary,
              }}
            />
          </Box>

          {/* TECH CHIPS */}
          <Stack
            direction="row"
            useFlexGap
            flexWrap="wrap"
            spacing={1}
            sx={{ maxWidth: 620 }}
          >
            {stack.map((t) => (
              <Chip
                key={t}
                label={t}
                variant={theme.palette.mode === "dark" ? "outlined" : "filled"}
                size="small"
                sx={{
                  fontWeight: 600,
                  borderRadius: 999,
                }}
              />
            ))}
          </Stack>

          {/* CTA */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/projects"
              sx={{ px: 3, py: 1.25, fontSize: "1rem", fontWeight: 800 }}
            >
              View Projects
            </Button>

            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/contact"
              sx={{ px: 3, py: 1.25, fontSize: "1rem", fontWeight: 800 }}
            >
              Contact Me
            </Button>

            {/* CV: public/cv.pdf qo'yib qo'ying */}
            <Button
              variant="text"
              size="large"
              component="a"
              href="/cv.pdf"
              download
              startIcon={<Download />}
              sx={{ px: 2, py: 1.25, fontSize: "1rem", fontWeight: 800 }}
            >
              Download CV
            </Button>
          </Stack>

          {/* SOCIAL */}
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Tooltip title="GitHub" arrow>
              <IconButton
                component="a"
                href="https://github.com/jumanazar04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHub />
              </IconButton>
            </Tooltip>

            <Tooltip title="Telegram" arrow>
              <IconButton
                component="a"
                href="https://t.me/Yusupov_Jumanazar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <Telegram />
              </IconButton>
            </Tooltip>

            <Tooltip title="Call" arrow>
              <IconButton
                component="a"
                href="tel:+998995183709"
                aria-label="Phone"
              >
                <Phone />
              </IconButton>
            </Tooltip>
          </Stack>

          {/* MINI STATS */}
          <Divider sx={{ my: 0.5, opacity: 0.6 }} />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 3 }}
            sx={{ color: "text.secondary" }}
          >
            <Stat label="Projects" value="5+ shipped" />
            <Stat label="Focus" value="UI + Performance" />
            <Stat label="Backend" value="API + Auth" />
          </Stack>
        </Stack>

        {/* IMAGE */}
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              inset: -22,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #38bdf8, #6366f1)",
              filter: "blur(42px)",
              opacity: 0.6,
              zIndex: 0,
            }}
          />

          <Avatar
            src="/images/me.jpg"
            alt="Jumanazar"
            imgProps={{ loading: "eager" }}
            sx={{
              width: { xs: 240, md: 380 },
              height: { xs: 240, md: 380 },
              border: "4px solid",
              borderColor: "primary.main",
              position: "relative",
              zIndex: 1,
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 20px 80px rgba(0,0,0,.45)"
                  : "0 20px 80px rgba(15,23,42,.15)",
            }}
          />
        </Box>
      </Box>

      {/* SCROLL INDICATOR */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        sx={{
          position: "absolute",
          bottom: 18,
          left: "50%",
          transform: "translateX(-50%)",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 1,
          color: "text.secondary",
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: 700 }}>
          Scroll
        </Typography>
        <Box
          component={motion.div}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          <KeyboardArrowDown />
        </Box>
      </Box>
    </Box>
  );
}

function Stat({ label, value }) {
  return (
    <Stack spacing={0.2}>
      <Typography variant="caption" sx={{ fontWeight: 800, opacity: 0.9 }}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>
        {value}
      </Typography>
    </Stack>
  );
}