import { cva } from "class-variance-authority"

// Color palette
export const colors = {
  logo: "#00A86B",
  primary: {
    50: "#e6fff5",
    100: "#b3ffde",
    200: "#80ffc7",
    300: "#4dffb0",
    400: "#1aff99",
    500: "#00A86B", // Couleur du logo
    600: "#008655",
    700: "#00653f",
    800: "#004329",
    900: "#002214",
  },
  secondary: {
    50: "#edf2ff",
    100: "#dbe4ff",
    200: "#bac8ff",
    300: "#91a7ff",
    400: "#748ffc",
    500: "#5c7cfa", // Main secondary color
    600: "#4c6ef5",
    700: "#4263eb",
    800: "#3b5bdb",
    900: "#364fc7",
  },
  gray: {
    50: "#f8f9fa",
    100: "#f1f3f5",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#868e96",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },
  success: "#2f9e44",
  warning: "#e67700",
  danger: "#c92a2a",
  info: "#1971c2",
  white: "#ffffff",
  black: "#000000",
}

// Typography
export const typography = {
  fontFamily: '"Inter", sans-serif',
  scale: 1.25, // Perfect fourth
  baseSize: "1rem",
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    tight: 1.2,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
}

// Spacing
export const spacing = {
  grid: 8,
  section: {
    sm: "py-12",
    md: "py-16",
    lg: "py-20",
  },
  container: {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
  },
  header: {
    height: "5rem",
    padding: "1.5rem",
  },
}

// Shadows
export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
}

// Transitions
export const transitions = {
  default: "all 0.3s ease-in-out",
  fast: "all 0.15s ease-in-out",
  slow: "all 0.5s ease-in-out",
}

// Z-index
export const zIndex = {
  behind: -1,
  default: 0,
  raised: 1,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
}

// Breakpoints
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

// Component Styles
export const button = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary-600 text-white hover:bg-primary-700",
        secondary: "bg-secondary-600 text-white hover:bg-secondary-700",
        outline: "border-2 border-primary-600 text-primary-600 bg-transparent hover:bg-primary-100",
        ghost: "text-primary-600 hover:bg-primary-100",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

export const card = cva("rounded-lg shadow-md overflow-hidden", {
  variants: {
    variant: {
      default: "bg-white",
      filled: "bg-gray-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

// Utility functions
export function pxToRem(px: number): string {
  return `${px / 16}rem`
}

export function getTypographySize(step: number): string {
  return `${Math.pow(typography.scale, step)}${typography.baseSize}`
}

// Example usage: text-[${getTypographySize(1)}] for one step up in the scale

