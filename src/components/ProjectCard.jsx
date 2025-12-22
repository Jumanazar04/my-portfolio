import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
} from "@mui/material";

export default function ProjectCard({ project }) {
  return (
    <Card  sx={{py: 8, borderBottom: '1px solid rgba(148,163,184,0.15)' }}>
      <CardContent>
        <Typography variant="h6">{project.title}</Typography>
        <Typography color="text.secondary">
          {project.description}
        </Typography>

        <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
          {project.stack.map((tech) => (
            <Chip key={tech} label={tech} size="small" />
            
          ))}
        </Stack>

        <Button
          sx={{ mt: 2 }}
          variant="outlined"
          href={project.link}
          target="_blank"
        >
          GitHub
        </Button>
        <Button
          sx={{ mt: 2 , ml: 1 }}
          variant="outlined"
          href={project.demo}
          target="_blank"
        >
          Demo
        </Button>
      </CardContent>
    </Card>
  );
}
