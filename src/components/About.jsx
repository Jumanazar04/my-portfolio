"use client";

import {
  Box,
  Typography,
  Container,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import Link from "next/link";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 6, md: 10 },
        borderBottom: "1px solid rgba(148,163,184,0.15)",
      }}
    >
      <Container maxWidth="md">
        {/* TITLE */}
        <Typography
          component="h2"
          variant="h3"
          textAlign="center"
          fontWeight={900}
          mb={4}
        >
          About Me
        </Typography>

        {/* INTRO */}
        <Typography
          color="text.secondary"
          fontSize="1.05rem"
          lineHeight={1.9}
          mb={4}
        >
          I’m a frontend developer who builds modern, responsive, and
          user-focused web applications. I primarily work with{" "}
          <b>React</b> and <b>Next.js</b>, focusing on clean architecture,
          performance, and scalable UI.  
          <br /><br />
          My current goal is to grow into a strong{" "}
          <b>full-stack developer</b> by building real-world projects
          involving APIs, authentication, and databases.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* WHAT I DO */}
        <Stack spacing={3} mb={4}>
          <Feature
            title="Frontend Development"
            text="Building responsive and accessible UIs with React, Next.js, MUI, and modern CSS practices."
          />
          <Feature
            title="Backend Basics"
            text="Creating REST APIs, authentication, and database logic using Node.js, Prisma, and PostgreSQL."
          />
          <Feature
            title="UI / UX Mindset"
            text="I care about usability, performance, clean layouts, and smooth user experience."
          />
        </Stack>

        <Divider sx={{ my: 4 }} />

        {/* WORK STYLE */}
        <Typography fontWeight={800} mb={1}>
          How I work
        </Typography>
        <Typography color="text.secondary" lineHeight={1.8}>
          I write clean and maintainable code, follow best practices, and
          continuously improve my skills. I enjoy learning new technologies
          and turning ideas into real, working products.
        </Typography>

        {/* CTA */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          mt={5}
        >
          <Button
            component={Link}
            href="/projects"
            variant="contained"
            size="large"
            sx={{ fontWeight: 800 }}
          >
            View Projects
          </Button>

          <Button
            component={Link}
            href="/contact"
            variant="outlined"
            size="large"
            sx={{ fontWeight: 800 }}
          >
            Contact Me
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

function Feature({ title, text }) {
  return (
    <Box>
      <Typography fontWeight={800} mb={0.5}>
        {title}
      </Typography>
      <Typography color="text.secondary" lineHeight={1.7}>
        {text}
      </Typography>
    </Box>
  );
}