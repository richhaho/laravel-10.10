import forms from '@tailwindcss/forms';

const purple = {
    100: "#ECEBFB",
    200: "#BAB9E9",
    300: "#9897DE",
    400: "#7574D3",
    500: "#5351C8",
    600: "#4241A0",
    700: "#323178",
    800: "#212050",
    900: "#111028",
    'bg-gradient': 'rgba(186, 185, 233, 0.4)'
};

const orange = {
    50: "rgba(255,249,249,0.5)",
    100: "#FFF9F9",
    200: "#FFEEEC",
    300: "#FFD1CB",
    400: "#FF988B",
    500: "#FF6B59",
    600: "#CC5647",
    700: "#994035",
    800: "#662B24",
    900: "#331512",
    main: "",
    'gradient-start': 'rgba(255, 152, 139, 1)',
    'gradient-stop': 'rgba(255, 107, 89, 1)',
};

const gray = {
    100: "#F1F1F5",
    200: "#E3E3EB",
    300: "#D4D4E2",
    400: "#C6C6D8",
    500: "#B8B8CE",
    600: "#9595B4",
    700: "#6A6A7E",
    800: "#474758",
    900: "#24242D"
};

const blue = {
    100: "#D8F1FF",
    500: "#2D9CDB",
    600: "#2F80ED"
};

const green = {
    100: "#ECFFF4",
    500: "#32B468",
    600: "#21a258",
};

const yellow = {
    100: "#FFF5DB",
    500: "#FFA800",
    600: "#d79e24",
};

const red = {
    100: "#FFEBEB",
    500: "#EF2828",
    600: "#c23b3b",
};

const pink = {
    'bg-gradient': 'rgba(255, 225, 222, 0.4)'
};

const white = "#FFFFFF";
const black = "#000000";
const transparent = "transparent";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        colors: {
            purple: purple,
            orange: orange,
            gray: gray,
            blue: blue,
            green: green,
            yellow: yellow,
            red: red,
            pink: pink,
            white: white,
            black: black,
            transparent: transparent,
            primary: orange[500],
            accent: purple[500],
            dark: gray[900],
            light: white,
            'medium-gray': gray[600],
            'dark-gray': gray[800],
            disabled: gray[200],
            'primary-light': orange[100],
            // secondary: gray[600],
            selected: gray[700],
            titles: purple[800],
            subtitles: gray[700],
            'secondary-links': gray[800],
            highlights: orange[500],
            placeholder: gray[700],
            unselected: gray[600],

            'input-titles-links': gray[900],
        },

        fontSize: {
            '2xs': '0.75rem',
            xs: '0.812rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.438rem',
            '2xl': '1.5rem',
            '3xl': '1.750rem',
            '4xl': '1.938rem',
            '5xl': '2.062rem',
            '6xl': '2.5rem',
            '7xl': '3rem',
            '8xl': '3.316rem',
            '9xl': '4.313rem',
            '10xl': '5.688rem',
            'level-1': '2.75rem',
            'level-2': '1.625rem',
            'level-3': '1.25rem',
            'p': '1.125rem',
            'info': '0.875rem',
            'buttons': '1.0625rem',
        },

        extend: {
            fontFamily: {
                gazpacho: ['Gazpacho', 'sans'],
                'source-sans': ['Source Sans', 'sans'],
                lora: ['Lora', 'serif'],
            },
            borderRadius: {
                '4xl': '48px',
                'cards': '12px',
            },
            spacing: {
                'xs': '5px',
                'sm': '10px',
                'md': '20px',
                'lg': '40px',
                'xl': '80px',
                '2xl': '120px',
            },
            colors: {
                gray: {
                    'main': 'rgba(63, 63, 77, 1)'
                },
                orange: {
                    'main': 'rgba(255, 107, 89, 1)',
                },
            },
            boxShadow: {
                DEFAULT: "0px 1px 3px 0px rgba(153, 64, 53, 0.15)",
                md: "0px 4px 6px -1px rgba(153, 64, 53, 0.10)",
                lg: "0px 10px 15px -3px rgba(153, 64, 53, 0.10)",
                xl: "0px 5px 25px -5px rgba(153, 64, 53, 0.10), 0px 5px 10px 3px rgba(153, 64, 53, 0.15)"
            },
        },
    },

    plugins: [
        forms,
        require('@tailwindcss/typography'),
        require('@vueform/slider/tailwind')
    ],

    safelist: [
        {
            pattern:
                /(bg|text|border)-(transparent|current|white|purple|yellow|orange|red|green|blue)/,
        },
    ],
};
