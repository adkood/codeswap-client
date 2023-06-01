/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    daisyui: {
        themes: [
            {
                default: {
                    primary: "#164e63",

                    secondary: "#d8b4fe",

                    accent: "#5b9fcc",

                    neutral: "#374151",

                    "base-100": "#2D2031",

                    info: "#4180EC",

                    success: "#66E59F",

                    warning: "#FCCD69",

                    error: "#FB6A60",
                    logocolor: "#FB6A60",
                },
                default2: {
                    primary: "#a78bfa",

                    secondary: "#bedef7",

                    accent: "#0369a1",

                    neutral: "#0e7490",

                    "base-100": "#F0EAF0",

                    info: "#264DD9",

                    success: "#0f766e",

                    warning: "#EC8218",

                    error: "#F41A1E",
                },
            },
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
        ],
    },
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "backdrop-500": "rgba(0, 0, 0, 0.45)",
            },
        },
    },
    plugins: [require("daisyui")],
};
