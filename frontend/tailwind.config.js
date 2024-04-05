export const mode = 'jit'

export const content = [
  "./app/**/*.{js,jsx,ts,tsx,mdx}",
  "./pages/**/*.{js,jsx,ts,tsx,mdx}",
  "./components/**/*.{js,jsx,ts,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,jsx,ts,tsx,mdx}",
];
export const theme = {
  extend: {},
};
export const plugins = [
  '@tailwindcss/typography'
];

export const darkMode = "class";