import {
  Html,
  Css,
  Javascript,
  Code,
  Storage,
  Build,
} from "@mui/icons-material";

export const skills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", level: 90, icon: <Html /> },
      { name: "CSS", level: 85, icon: <Css /> },
      { name: "JavaScript", level: 80, icon: <Javascript /> },
      { name: "React", level: 80, icon: <Code /> },
      { name: "Next.js", level: 75, icon: <Build /> },
      { name: "MUI", level: 75, icon: <Build /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 65, icon: <Storage /> },
      { name: "Telegram Bot API", level: 70, icon: <Code /> },
    ],
  },
];
