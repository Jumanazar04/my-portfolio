"use client";

import {
  Box,
  Typography,
  Button,
  Stack,
  Avatar,
} from "@mui/material";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 6 },
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "radial-gradient(circle at top, #1e293b 0%, #020617 60%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: 6,
        }}
      >
        {/* TEXT CONTENT */}
        <Stack spacing={3} sx={{ maxWidth: 600 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Hi, I’m{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Jumanazar
            </Box>
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 520 }}
          >
            Frontend Developer specializing in{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              React
            </Box>
            ,{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Next.js
            </Box>{" "}
            and modern UI development with{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              MUI
            </Box>
            .
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/projects"
              sx={{
                px: 2,
                py: 1,
                fontSize: "1rem",
              }}
            >
              View Projects
            </Button>

            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="tel:+998995183709"
              sx={{ px: 4, py: 1.5 }}
            >
              Contact Me
            </Button>
          </Stack>
        </Stack>

        {/* IMAGE */}
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: -20,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #38bdf8, #6366f1)",
              filter: "blur(40px)",
              opacity: 0.6,
              zIndex: 0,
            }}
          />

          <Avatar
            src="/images/me.jpg"
            alt="Jumanazar"
            sx={{
              width: { xs: 220, md: 380 },
              height: { xs: 220, md: 380 },
              border: "4px solid",
              borderColor: "primary.main",
              position: "relative",
              zIndex: 1,
            }}
          />
        </Box>
      </Box>
      
    </Box>
  );
}
