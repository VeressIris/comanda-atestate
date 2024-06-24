import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "712px",
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["light", "fantasy", "bumblebee", "cmyk"],
  },
} as Config;
