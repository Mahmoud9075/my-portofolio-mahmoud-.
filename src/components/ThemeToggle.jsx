import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { t } = useLang();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        "border border-transparent hover:border-primary/20"
      )}
      aria-label={isDarkMode ? t("theme.aria.light") : t("theme.aria.dark")}
      title={isDarkMode ? t("theme.aria.light") : t("theme.aria.dark")}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
