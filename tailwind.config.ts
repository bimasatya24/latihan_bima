import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   'color1' : '#003161',
    //   'color2' : '#FFDDAE'
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'color1' : '#003161',
        'color2' : '#FFDDAE',
        'color3' : {
          'satu' : {
            'a'  : '#FFCC00'
          },
          'dua'  : '#FF0000'
        }
      },
      spacing: {
        '5px' : '5px',
        '15px' : '15px',
        '25px' : '25px',
        '10%' : '10%',
        '20%' : '20%',
        '60%' : '60%' 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
