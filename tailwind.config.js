/** @type {import('tailwindcss').Config} */
export default {
  // Este consumidor monta o submódulo em src/design-system (caminho diferente do sistema-principal)
  presets: [require("./src/design-system/tailwind.preset.cjs")],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./src/design-system/src/**/*.{ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
};
