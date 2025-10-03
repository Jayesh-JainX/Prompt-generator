import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);

    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setCurrentTheme(isDark ? "dark" : "light");
    } else if (theme === "light" || theme === "dark") {
      setCurrentTheme(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  if (!mounted) return null; // Prevent mismatch between server/client rendering

  return (
    <Button
      variant="link"
      className="cursor-pointer "
      size={"lg"}
      onClick={toggleTheme}
    >
      <Image
        src="/sun.png"
        alt="sun"
        width={24}
        height={24}
        className={`h-[1.2rem] w-[1.2rem] transition-all opacity-60 ${
          currentTheme === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />

      <Image
        src="/moon.png"
        alt="moon"
        width={24}
        height={24}
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all opacity-60 ${
          currentTheme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
