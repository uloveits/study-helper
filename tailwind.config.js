
const colors = require('tailwindcss/colors')

module.exports = {
    prefixer: false,
    separator: '_',
    compile: false,
    globalUtility: false,
    darkMode: 'media',
    corePlugins: {
        preflight: false,
        divideColor: false,
        divideOpacity: false,
        divideStyle: false,
        divideWidth: false,
        space: false,
        placeholderColor: false,
        placeholderOpacity: false,
    },
    theme: {
        width: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1_2': '50%',
            '1_3': '33.333333%',
            '2_3': '66.666667%',
            '1_4': '25%',
            '2_4': '50%',
            '3_4': '75%',
            '1_5': '20%',
            '2_5': '40%',
            '3_5': '60%',
            '4_5': '80%',
            '1_6': '16.666667%',
            '2_6': '33.333333%',
            '3_6': '50%',
            '4_6': '66.666667%',
            '5_6': '83.333333%',
            '1_12': '8.333333%',
            '2_12': '16.666667%',
            '3_12': '25%',
            '4_12': '33.333333%',
            '5_12': '41.666667%',
            '6_12': '50%',
            '7_12': '58.333333%',
            '8_12': '66.666667%',
            '9_12': '75%',
            '10_12': '83.333333%',
            '11_12': '91.666667%',
            full: '100%',
            screen: '100vw',
        }),
        height: theme => ({
            auto: 'auto',
            ...theme('width'),
            screen: '100vh',
        }),
        maxHeight: {
            full: '100%',
            screen: '100vh',
        },
        spacing: {
            '10px': '10px'
        }

        // colors: {
        //     primary: '#ff49db',
        //     white: "#fff",
        //     black: "#292929",
        //     background: "#f6f8f9",

        //     transparent: 'transparent',
        //     current: 'currentColor',
        //     blue: {
        //         light: '#85d7ff',
        //         DEFAULT: '#1fb6ff',
        //         dark: '#009eeb',
        //     },
        //     pink: {
        //         light: '#ff7ce5',
        //         DEFAULT: '#ff49db',
        //         dark: '#ff16d1',
        //     },
        //     gray: {
        //         darkest: '#1f2d3d',
        //         dark: '#3c4858',
        //         DEFAULT: '#c0ccda',
        //         light: '#e0e6ed',
        //         lightest: '#f9fafc',
        //     }
        // }
    },
};
