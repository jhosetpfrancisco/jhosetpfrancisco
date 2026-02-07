/**
 * Design System — @jhosetpfrancisco/design-system
 *
 * CSS tokens entry: libs/design-system/src/styles/tokens.css
 *
 * This file exports TypeScript constants for programmatic
 * access to design token values (breakpoints, z-index, etc.).
 */

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

export const Z_INDEX = {
  dropdown: 50,
  sticky: 100,
  fixed: 200,
  overlay: 300,
  modal: 400,
  popover: 500,
  tooltip: 600,
  cursor: 9999,
} as const;
