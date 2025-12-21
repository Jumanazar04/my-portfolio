"use client";

import { Box, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: 4,
        textAlign: "center",
        background:
          theme.palette.mode === "dark"
            ? "rgba(2,6,23,0.7)"
            : "rgba(248,250,252,0.7)",
        borderTop: "1px solid rgba(148,163,184,0.15)",
      }}
    >
      <Stack spacing={1}>
        <Typography variant="body2" color="text.secondary">
          © 2025 Jumanazar
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Built with Next.js & MUI
        </Typography>
      </Stack>
    </Box>
  );
}
