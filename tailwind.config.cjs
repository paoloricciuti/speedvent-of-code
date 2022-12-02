/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    900: "#0f0f23",
                },
                green: {
                    300: "#99ff99",
                    500: "#00cc00",
                    700: "#009900",
                },
                white: {
                    500: "#cccccc",
                }
            }
        },
    },
    plugins: [],
};
