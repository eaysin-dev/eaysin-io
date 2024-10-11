import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Adding missing variables here
        iconBgColor: "var(--iconBgColor)",
        iconColor: "var(--iconColor)",
        sectionTitleBgContent: "var(--section-title-bg-content)",
        baseColor: "var(--base-color)",
        heroBg: "hsl(var(--hero-bg))",
        heroBgDark: "hsl(var(--hero-bg-dark))",
        ctaButton: "hsl(var(--cta-button))",
        ctaButtonHover: "hsl(var(--cta-button-hover))",
        ctaButtonDark: "hsl(var(--cta-button-dark))",
        ctaButtonHoverDark: "hsl(var(--cta-button-hover-dark))",
        headerBg: "hsl(var(--header-bg))",
        headerBgDark: "hsl(var(--header-bg-dark))",
        footerBg: "hsl(var(--footer-bg))",
        footerBgDark: "hsl(var(--footer-bg-dark))",
        textHighlight: "hsl(var(--iconBgColor))",
        textHighlightDark: "hsl(var(--text-highlight-dark))",
        buttonSecondary: "hsl(var(--button-secondary))",
        buttonSecondaryHover: "hsl(var(--button-secondary-hover))",
        buttonSecondaryDark: "hsl(var(--button-secondary-dark))",
        buttonSecondaryHoverDark: "hsl(var(--button-secondary-hover-dark))",
        linkColor: "hsl(var(--link-color))",
        linkHover: "hsl(var(--link-hover))",
        linkDark: "hsl(var(--link-dark))",
        linkHoverDark: "hsl(var(--link-hover-dark))",
        gradient1: "var(--gradient-1)",
        gradient2: "var(--gradient-2)",
        gradientDark1: "var(--gradient-dark-1)",
        gradientDark2: "var(--gradient-dark-2)",
        hoverShadow: "var(--hover-shadow)",
        focusOutline: "var(--focus-outline)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
