import React, { useEffect, useState } from "react";

export type Theme = "dark" | "light";

export default function useDarkMode(): [
  Theme,
  React.Dispatch<React.SetStateAction<Theme>>
] {
  const [theme, setTheme] = useState<Theme>(
    typeof window !== "undefined"
      ? (localStorage.getItem("theme") as Theme) || "light"
      : "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add(theme);

    theme === "light"
      ? root.classList.remove("dark")
      : root.classList.remove("light");

    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
