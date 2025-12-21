import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#1976d2",
      },
    },
    typography: {
      fontFamily: "Inter, Arial, sans-serif",
      h1: { fontWeight: 700 },
    },
  });
