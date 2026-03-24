import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-soft": "var(--background-soft)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        "border-soft": "var(--border-soft)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "brand-primary": "var(--brand-primary)",
        "brand-hover": "var(--brand-hover)",
        "brand-soft": "var(--brand-soft)",
        "brand-soft-strong": "var(--brand-soft-strong)",
      },
      borderRadius: {
        sm: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        cta: "28px",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
      },
      maxWidth: {
        container: "1248px",
      },
      fontSize: {
        "display-desktop": ["56px", { lineHeight: "64px", fontWeight: "800" }],
        "h1-desktop": ["44px", { lineHeight: "52px", fontWeight: "800" }],
        "h2-desktop": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "h3-desktop": ["22px", { lineHeight: "30px", fontWeight: "700" }],
        "body-lg-desktop": ["18px", { lineHeight: "30px", fontWeight: "400" }],
        "body-desktop": ["16px", { lineHeight: "28px", fontWeight: "400" }],
        "body-sm-desktop": ["14px", { lineHeight: "24px", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "20px", fontWeight: "500" }],
        "display-mobile": ["36px", { lineHeight: "42px", fontWeight: "800" }],
        "h1-mobile": ["32px", { lineHeight: "38px", fontWeight: "800" }],
        "h2-mobile": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "h3-mobile": ["20px", { lineHeight: "28px", fontWeight: "700" }],
        "body-lg-mobile": ["16px", { lineHeight: "28px", fontWeight: "400" }],
        body: ["15px", { lineHeight: "26px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "22px", fontWeight: "400" }],
        "caption-mobile": ["12px", { lineHeight: "18px", fontWeight: "500" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
