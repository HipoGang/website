import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
    content: ['./index.html', './src/**/*.tsx'],
    theme: {
        fontFamily: {
            heebo: ['Heebo', ...fontFamily.sans],
        },
        extend: {
            colors: {
                black: '#0E0E0E',
                purple1: '#541779',
                purple2: '#22112D',
                blue: '#0088CC',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
} satisfies Config
