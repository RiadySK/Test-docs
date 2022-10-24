/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      visibility: ['group-hover'],
      fontFamily: {
        primary: 'Roboto, san-serif',
        secondary: ['VagRoundedBold'],
      },
      colors: {
        blue: '#0082C6',
        'blue-night': '#57ACD9',
        red: '#ED1B34',
        'red-night': '#E4555D',
        yellow: '#FAA61A',
        'yellow-night': '#FDBA4D',
        'yellow-light': '#FFFEE9',
        'yellow-light-night': '#FFFEE9',
        // Reputation
        green: '#30C436',
        'green-light': '#60E38F',
        'red-reputation': '#C82A32',
        neutral: '#CCCCCC',
        'disabled-night': '#454545',
        // Greyscale
        'grey-0': '#f9f9f9',
        'grey-1': '#ebebeb',
        'grey-2': '#d9d9d9',
        'grey-3': '#c7c7c7',
        'grey-4': '#b3b3b3',
        'grey-5': '#5c5c5c',
        'grey-6': '#333333',
        'grey-7': '#202020',
        'grey-8': '#171717',
        // Text
        primary: '#202020',
        'primary-night': '#ebebeb',
        secondary: '#5C5C5C',
        'secondary-night': '#c7c7c7',
        tertiary: '#B3B3B3',
        'tertiary-night': '#5c5c5c',
        // Border
        'night-border': '#3f3f3f',
      },
      fontSize: {
        '3xs': ['0.375rem', { lineHeight: '0.375rem' }],
        '2xs': ['0.5rem', { lineHeight: '0.875rem' }],
      },
      borderRadius: {
        3: '3px',
      },
      width: {
        '300p': '300px',
        '970p': '970px',
      },
      maxWidth: {
        '1440p': '1440px',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/line-clamp')],
}
