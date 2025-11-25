/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e0f7f4',
                    100: '#b3ebe3',
                    200: '#80ded1',
                    300: '#4dd1bf',
                    400: '#26c7b1',
                    500: '#00bda3',
                    600: '#00b79b',
                    700: '#00ae91',
                    800: '#00a688',
                    900: '#009877',
                },
                accent: {
                    50: '#e3f2fd',
                    100: '#bbdefb',
                    200: '#90caf9',
                    300: '#64b5f6',
                    400: '#42a5f5',
                    500: '#2196f3',
                    600: '#1e88e5',
                    700: '#1976d2',
                    800: '#1565c0',
                    900: '#0d47a1',
                },
            },
        },
    },
    plugins: [],
}
