"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { getTheme } from "./theme";

export const ColorModeContext = createContext();

export default function ThemeRegistry({ children }) {
  const [mode, setMode] = useState("dark");

  const colorMode = {
    toggleColorMode: () =>
      setMode((prev) => (prev === "light" ? "dark" : "light")),
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
