"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
  Box,
  CardActionArea,
  CardMedia,
  Divider,
} from "@mui/material";

import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";

export default function ProjectCard({ project }) {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid rgba(148,163,184,0.15)",
        borderRadius: 4,
        overflow: "hidden",
        transition: "transform .2s ease, box-shadow .2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 18px 60px rgba(15,23,42,.12)",
        },
      }}
    >
      {/* Clickable preview -> details */}
      <CardActionArea
        component={Link}
        href={`/projects/${project.slug}`}
        sx={{ alignItems: "stretch" }}
      >
        {/* Preview image (optional) */}
        {project.image ? (
          <CardMedia
            component="img"
            height="200"
            image={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
          />
        ) : (
          <Box
            sx={{
              height: 200,
              background:
                "linear-gradient(135deg, rgba(56,189,248,.25), rgba(99,102,241,.25))",
            }}
          />
        )}

        <CardContent>
          <Stack direction="row" justifyContent="space-between" gap={2}>
            <Typography variant="h6" fontWeight={900}>
              {project.title}
            </Typography>

            {project.status ? (
              <Chip
                label={project.status}
                size="small"
                color={project.status === "Live" ? "success" : "default"}
                variant="outlined"
                sx={{ fontWeight: 700 }}
              />
            ) : null}
          </Stack>

          <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.7 }}>
            {project.description}
          </Typography>

          {/* Tech stack */}
          <Stack direction="row" spacing={1} mt={2} useFlexGap flexWrap="wrap">
            {project.stack?.map((tech) => (
              <Chip key={tech} label={tech} size="small" />
            ))}
          </Stack>

          {/* Highlights */}
          {project.highlights?.length ? (
            <>
              <Divider sx={{ my: 2, opacity: 0.5 }} />
              <Stack spacing={0.5}>
                {project.highlights.slice(0, 3).map((h, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    color="text.secondary"
                  >
                    • {h}
                  </Typography>
                ))}
              </Stack>
            </>
          ) : null}
        </CardContent>
      </CardActionArea>

      {/* CTA buttons */}
      <Box sx={{ px: 2, pb: 2 }}>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Button
            component={Link}
            href={`/projects/${project.slug}`}
            variant="contained"
            startIcon={<ArticleIcon />}
            sx={{ fontWeight: 800 }}
          >
            Details
          </Button>

          {project.link ? (
            <Button
              component="a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<GitHubIcon />}
              sx={{ fontWeight: 800 }}
            >
              GitHub
            </Button>
          ) : null}

          {project.demo ? (
            <Button
              component="a"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<LaunchIcon />}
              sx={{ fontWeight: 800 }}
            >
              Live Demo
            </Button>
          ) : null}
        </Stack>
      </Box>
    </Card>
  );
}