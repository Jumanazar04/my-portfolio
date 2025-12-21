import { Grid, Container, Typography } from "@mui/material";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <Container sx={{ px: { xs: 2, md: 6 }, py: 4}}>
      <Typography variant="h3" fontWeight={'700'} mb={3}>
        Projects
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
