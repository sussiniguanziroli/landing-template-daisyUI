// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // 1. Tell Tailwind where your template files are located
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all specified file types in the src folder
  ],
  
  // 2. You can add custom theme settings here if needed
  theme: {
    extend: {},
  },

  // 3. Add the DaisyUI plugin
  plugins: [
    require('daisyui'),
  ],

  // 4. (Optional) DaisyUI configuration
  daisyui: {
    themes: ["light", "dark", "cupcake", "synthwave", "corporate"], // Add all themes you might use
  },
}
