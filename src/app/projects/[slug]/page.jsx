import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Typography, Stack, Chip, Button, Divider, Box } from "@mui/material";
import { projects, getProjectBySlug } from "@/data/projects.js";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ shu muhim

  const project = slug ? getProjectBySlug(slug) : null;

  return project
    ? { title: `${project.title} | Projects`, description: project.description }
    : { title: "Project not found" };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params; // ✅ shu muhim
  if (!slug) return notFound();

  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  const githubUrl = project.github || project.link;

  return (
    <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
      <Stack spacing={2}>
        <Typography variant="h3" fontWeight={900}>
          {project.title}
        </Typography>

        <Typography color="text.secondary">{project.description}</Typography>

        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {project.stack?.map((t) => (
            <Chip key={t} label={t} size="small" />
          ))}
          {project.status ? (
            <Chip
              label={project.status}
              size="small"
              variant="outlined"
              color={project.status === "Live" ? "success" : "default"}
            />
          ) : null}
        </Stack>

        {project.image ? (
          <Box
            component="img"
            src={project.image}
            alt={`${project.title} preview`}
            sx={{
              width: "100%",
              borderRadius: 3,
              border: "1px solid rgba(148,163,184,0.15)",
              mt: 2,
            }}
          />
        ) : null}

        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1 }}>
          {githubUrl ? (
            <Button
              component="a"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
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
              variant="contained"
              sx={{ fontWeight: 800 }}
            >
              Live Demo
            </Button>
          ) : null}

          <Link href="/projects" style={{ textDecoration: "none" }}>
            <Button variant="text" sx={{ fontWeight: 800 }}>
              Back
            </Button>
          </Link>
        </Stack>

        <Divider sx={{ my: 3 }} />
      </Stack>
    </Container>
  );
}