"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import { useContext, useMemo, useState } from "react";
import { ColorModeContext } from "@/theme/ThemeRegistry";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  Stack,
  Divider,
  Tooltip,
  Chip,
} from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Navbar() {
  const theme = useTheme();
  const pathname = usePathname();
  const { toggleColorMode } = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
    []
  );

  const isActive = (href) => pathname === href;

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
      <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
        {/* Logo */}
        <Typography
          component={Link}
          href="/"
          sx={{
            fontWeight: 900,
            letterSpacing: 0.5,
            color: "primary.main",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          J.DEV
          {/* optional */}
          <Chip
            label="Open to work"
            size="small"
            variant={theme.palette.mode === "dark" ? "outlined" : "filled"}
            sx={{ fontWeight: 700, display: { xs: "none", md: "inline-flex" } }}
          />
        </Typography>

        {/* Desktop nav */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.href}
              component={Link}
              href={item.href}
              sx={{
                fontWeight: 800,
                ...(isActive(item.href) && {
                  color: "primary.main",
                  textDecoration: "underline",
                  textUnderlineOffset: 6,
                }),
              }}
            >
              {item.label}
            </Button>
          ))}

          <Button
            variant="outlined"
            component="a"
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: 800 }}
          >
            Download CV
          </Button>

          {/* Social icons (minimal) */}
          <Tooltip title="GitHub" arrow>
            <IconButton
              component="a"
              href="https://github.com/jumanazar04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
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
              <TelegramIcon />
            </IconButton>
          </Tooltip>

          {/* Theme toggle */}
          <Tooltip title="Toggle theme" arrow>
            <IconButton onClick={toggleColorMode} aria-label="Toggle theme">
              {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
        </Box>

        {/* Mobile actions */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 0.5 }}>
          <IconButton onClick={toggleColorMode} aria-label="Toggle theme">
            {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          <IconButton onClick={() => setOpen(true)} aria-label="Open menu">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography fontWeight={900} color="primary.main">
              Menu
            </Typography>
            <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Stack spacing={1}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                onClick={() => setOpen(false)}
                variant={isActive(item.href) ? "contained" : "text"}
                sx={{ justifyContent: "flex-start", fontWeight: 800 }}
              >
                {item.label}
              </Button>
            ))}

            <Button
              component="a"
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{ justifyContent: "flex-start", fontWeight: 800 }}
            >
              Download CV
            </Button>

            <Divider sx={{ my: 1 }} />

            <Stack direction="row" spacing={1}>
              <IconButton
                component="a"
                href="https://github.com/jumanazar04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://t.me/Yusupov_Jumanazar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <TelegramIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}