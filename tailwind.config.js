/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'gray-1000': 'rgb(17,17,19)',
                'gray-1100': 'rgb(10,10,11)',
            },
        },
    },
    plugins: [],
};
