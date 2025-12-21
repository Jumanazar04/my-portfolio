"use client";

import {
  Box,
  Typography,
  Button,
  Stack,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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
          gap: 6,
        }}
      >
        {/* TEXT CONTENT */}
        <Stack spacing={3} maxWidth={600}>
          <Typography variant="h2" fontWeight={800}>
            Hi All, I’m{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Jumanazar
            </Box>
          </Typography>

          <TypeAnimation
          
            sequence={[
              "Frontend Developer",
              1500,
              "React Developer",
              1500,
              "Next.js Developer",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
            style={{
              fontSize: "1.4rem",
              color: "#94a3b8",
            }}
          />

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
              href="/contact"
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
