"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { ColorModeContext } from "@/theme/ThemeRegistry";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Navbar() {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        background:
          theme.palette.mode === "dark"
            ? "rgba(2,6,23,0.7)"
            : "rgba(248,250,252,0.7)",
        borderBottom: "1px solid",
        borderColor:
          theme.palette.mode === "dark"
            ? "rgba(148,163,184,0.15)"
            : "rgba(15,23,42,0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
            component={Link}
            href="/"
          sx={{
            fontWeight: 700,
            letterSpacing: 0.5,
            color: "primary.main",
            textDecoration: "none",
          }}
        >
          J.dev
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button component={Link} href="/projects">
            Projects
          </Button>
          <Button
            variant="outlined"
            href="/cv.pdf"
            target="_blank"
          >
            Download CV
          </Button>


          <IconButton  onClick={toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
