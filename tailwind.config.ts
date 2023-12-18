import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        black: "#07080B",
        borderColor: "#424242",
        grey: "#D9D9D9",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      gridTemplateRows: {
        inventoryRows: "repeat(3, 99px)",
      },
      gridTemplateColumns: {
        inventoryCols: "repeat(11, 70px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
