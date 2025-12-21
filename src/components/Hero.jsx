"use client";

import { Box, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        px: 3,
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h2">
          Hi, I'm Jumanazar
        </Typography>

        <Typography color="text.secondary">
          Frontend Developer — React, Next.js, MUI
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" component={Link} href="/projects">
            View Projects
          </Button>
          <Button variant="outlined" component={Link} href="/contact">
            Contact
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
