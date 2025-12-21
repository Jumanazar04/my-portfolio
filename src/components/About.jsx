import { Box, Typography, Container } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={700}
          mb={4}
        >
          About Me
        </Typography>

        <Typography
          color="text.secondary"
          fontSize="1.1rem"
          lineHeight={1.8}
          textAlign="center"
        >
          I am a frontend developer focused on building modern,
          responsive, and user-friendly web applications.
          I work mainly with React and Next.js, paying close
          attention to clean code, performance, and UI/UX.
          My goal is to grow into a strong full-stack developer
          and work on real-world projects.
        </Typography>
      </Container>
    </Box>
  );
}
