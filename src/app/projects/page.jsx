"use client";

import { useMemo, useState } from "react";
import { Container, Typography, Stack, Chip, Box } from "@mui/material";
import ProjectCard from "@/components/ProjectCard"; // pathni o'zingizga moslang
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach((p) => p.stack?.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, []);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.stack?.includes(filter));
  }, [filter]);

  return (
    <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
      <Typography variant="h3" fontWeight={900} mb={1}>
        Projects
      </Typography>
      <Typography color="text.secondary" mb={3}>
        Selected work with live demos, code, and case studies.
      </Typography>

      {/* Filters */}
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" mb={4}>
        {allTags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            clickable
            onClick={() => setFilter(tag)}
            variant={filter === tag ? "filled" : "outlined"}
            sx={{ fontWeight: 800 }}
          />
        ))}
      </Stack>

      {/* List */}
      <Stack spacing={2}>
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Stack>

      {!filtered.length ? (
        <Box sx={{ mt: 4, color: "text.secondary" }}>
          No projects found for this filter.
        </Box>
      ) : null}
    </Container>
  );
}