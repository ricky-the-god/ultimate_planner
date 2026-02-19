"use client";

import { useState } from "react";

import Link from "next/link";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { persistPreference } from "@/lib/preferences/preferences-storage";
import { usePreferencesStore } from "@/stores/preferences/preferences-provider";

export const NavHeader = () => {
  const themeMode = usePreferencesStore((s) => s.themeMode);
  const setThemeMode = usePreferencesStore((s) => s.setThemeMode);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const nextTheme = themeMode === "dark" ? "light" : "dark";
      setThemeMode(nextTheme);
      persistPreference("theme_mode", nextTheme);
    }, 150);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const isDark = themeMode === "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
            <svg
              aria-hidden="true"
              className="size-5 text-primary-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight">Ultimate Planner</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            How it works
          </Link>
          <Link href="#use-cases" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Use cases
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="relative overflow-hidden"
          >
            <Sun
              aria-hidden="true"
              className={`absolute transition-all duration-300 ${
                isDark ? (isAnimating ? "rotate-0 scale-0" : "rotate-0 scale-100") : "-rotate-90 scale-0"
              }`}
            />
            <Moon
              aria-hidden="true"
              className={`transition-all duration-300 ${
                isDark ? "rotate-90 scale-0" : isAnimating ? "rotate-0 scale-0" : "rotate-0 scale-100"
              }`}
            />
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/auth/v1/login">Sign in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/v1/register">Get started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
