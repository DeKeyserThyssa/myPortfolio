/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx,svg}",
    ],
    theme: {
        extend: {
            colors: {
                accentText: '#3A5A40',
                darkAccentText: '#B5C99A',
                button: '#E6EEDB',
                buttonHover: '#d9e4c9',
                card: '#F4F7F2',
                darkCard: '#081c15',
                darkBackGround: '#363636',
            },
        },
    },
    plugins: [],
}