import { createContext, useContext } from "react";

type ThemeContextProps = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return new Error("useTheme must be used within ThemeProvider");
  }

  return context;
};
