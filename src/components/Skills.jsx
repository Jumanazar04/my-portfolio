"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  LinearProgress,
  Divider,
} from "@mui/material";

export default function Skills() {
  return (
    <Box
      id="skills"
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
          fontWeight={900}
          textAlign="center"
          mb={4}
        >
          Skills
        </Typography>

        {/* FRONTEND */}
        <SkillBlock
          title="Frontend"
          description="Building modern, responsive, and accessible user interfaces."
          skills={[
            { name: "React", level: 80, note: "Hooks, components, state" },
            { name: "Next.js", level: 75, note: "Routing, SSR, SEO" },
            { name: "Vue.js", level: 70, note: "Components, reactivity" },
            { name: "JavaScript", level: 75, note: "ES6+, async, logic" },
            { name: "HTML / CSS", level: 80, note: "Responsive layouts" },
            { name: "MUI", level: 70, note: "Design systems" },
          ]}
        />

        <Divider sx={{ my: 5 }} />

        {/* BACKEND */}
        <SkillBlock
          title="Backend (Foundations)"
          description="Basic backend development and API integration."
          skills={[
            { name: "Node.js", level: 65, note: "REST APIs" },
            { name: "Prisma", level: 60, note: "ORM, migrations" },
            { name: "PostgreSQL", level: 60, note: "Schemas, relations" },
            { name: "Auth (JWT)", level: 55, note: "Login / roles" },
          ]}
        />

        <Divider sx={{ my: 5 }} />

        {/* TOOLS */}
        <SkillBlock
          title="Tools & Workflow"
          description="Development tools and collaboration workflow."
          skills={[
            { name: "Git / GitHub", level: 75, note: "PRs, versioning" },
            { name: "Vercel", level: 70, note: "Deployment" },
            { name: "Postman", level: 65, note: "API testing" },
            { name: "Figma", level: 55, note: "UI reference" },
          ]}
        />
      </Container>
    </Box>
  );
}

/* ---------- COMPONENTS ---------- */

function SkillBlock({ title, description, skills }) {
  return (
    <Box>
      <Typography fontWeight={800} fontSize="1.3rem" mb={0.5}>
        {title}
      </Typography>

      <Typography color="text.secondary" mb={3}>
        {description}
      </Typography>

      <Stack spacing={2.5}>
        {skills.map((skill) => (
          <SkillRow key={skill.name} {...skill} />
        ))}
      </Stack>
    </Box>
  );
}

function SkillRow({ name, level, note }) {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={0.5}
      >
        <Typography fontWeight={700}>{name}</Typography>
        <Chip
          label={note}
          size="small"
          variant="outlined"
          sx={{ fontWeight: 600 }}
        />
      </Stack>

      <LinearProgress
        variant="determinate"
        value={level}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: "rgba(148,163,184,0.15)",
        }}
      />
    </Box>
  );
}