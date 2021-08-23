module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: { sans: ['"Josefin Sans", sans-serif'], display: ['Raleway'] },
        container: { center: true },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('daisyui')],
};
