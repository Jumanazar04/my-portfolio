import { Card, CardContent, Typography, Chip, Stack } from "@mui/material";

export default function ProjectCard({ project }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{project.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>

        <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
          {project.stack.map((tech) => (
            <Chip key={tech} label={tech} size="small" />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
