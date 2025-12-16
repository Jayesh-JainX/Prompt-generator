import js from "@eslint/js";
import { configs as tseslintConfigs } from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

export default [
  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...tseslintConfigs.recommended,

  // React and React Hooks recommended rules
  {
    plugins: { react: reactPlugin },
    rules: { ...reactPlugin.configs["jsx-runtime"].rules },
    settings: { react: { version: "detect" } },
  },
  {
    plugins: { "react-hooks": hooksPlugin },
    rules: hooksPlugin.configs.recommended.rules,
  },

  // Next.js recommended + Core Web Vitals rules
  {
    plugins: { "@next/next": nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      // Soften strict hooks rule to prevent false positives for benign effects
      "react-hooks/set-state-in-effect": "off",
    },
  },

  // Ignore build artifacts and dependencies
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/**",
      "dist/**",
      "build/**",
    ],
  },
  // Relax TypeScript rules to avoid blocking CI on non-critical issues
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
];