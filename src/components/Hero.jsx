"use client";

import { Box, Typography, Button, Stack, Avatar } from "@mui/material";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        px: 3,
        gap: 4,
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      {/* TEXT */}
      <Stack spacing={3}>
        <Typography variant="h2">
          Hi All, I'm Jumanazar
        </Typography>

        <Typography color="text.secondary">
          Frontend Developer — React, Next.js, MUI
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" component={Link} href="/projects">
            View Projects
          </Button>
          <Button variant="outlined" component={Link} href="+mailto:+998995183709">
            Contact
          </Button>
        </Stack>
      </Stack>

      {/* IMAGE */}
      <Avatar
        src="/images/me.jpg"   // 🔑 TO‘G‘RI YO‘L
        alt="Jumanazar"
        sx={{
          width: 400,
          height: 400,
        }}
      />
    </Box>
  );
}
