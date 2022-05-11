module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['DM Sans', 'sans-serif'],
            },
            colors: {
                black: { 500: '#191a2e', 900: '#000' },
                indianred: '#f13b6e',
                mediumslateblue: '#7d6aff',
            },
        },
    },
    plugins: [],
};
