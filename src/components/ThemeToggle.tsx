"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className={cn(
          "relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-transparent p-0 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
          className
        )}
        aria-label="Toggle theme"
        disabled
      >
        <div className="h-4 w-4" />
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-transparent p-0 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand transition-colors",
        className
      )}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "light" ? (
        <Sun className="h-4 w-4 transition-all" />
      ) : (
        <Moon className="h-4 w-4 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
