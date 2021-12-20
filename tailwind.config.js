module.exports = {
  content: ["./src/**/*.{html,js}","./_includes/**/*.{html,js}", "./_layouts/**/*.{html,js}", "./**/*.{html,md,js}"],
  theme: {
    extend: {
      keyframes: {
        rolldown: {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0%)'},
        }
      },
      animation: {
        rolldown: 'rolldown 1s ease-in',
      },
      colors: {
        primary: '#77b0e8',
        secondary: '#74d2de',
        accent: '#feffa2',
        myblue: { //blue
          50: '#f0faff',
          100: '#dbf1fe',
          200: '#c7e8fc',
          300: '#a5d5f8',
          400: '#8bc2f2',
          500: '#77b0e8',
          600: '#669dda',
          700: '#5688c4',
          800: '#446da2',
          900: '#304d75'
        },
        myyellow: { //yellow
          50: "#fffff0",
          100: "#fdfedb",
          200: "#fafcc7",
          300: "#f3f8a5",
          400: "#e9f28b",
          500: "#dce877",
          600: "#cbda66",
          700: "#b4c456",
          800: "#94a244",
          900: "#6a7530"
        },
        mypurple: { //purple
          50: "#f5f0ff",
          100: "#e8dbfe",
          200: "#dbc7fc",
          300: "#c8a5f8",
          400: "#bb8bf2",
          500: "#b077e8",
          600: "#a366da",
          700: "#9256c4",
          800: "#7944a2",
          900: "#573075"
        },
        my_accent: {
          50: "#f0f5ff",
          100: "#dbe6fe",
          200: "#c7d6fc",
          300: "#a5b6f8",
          400: "#8b9bf2",
          500: "#7783e8",
          600: "#666fda",
          700: "#565bc4",
          800: "#4447a2",
          900: "s#303175"
        },
      }
    },
  },
  plugins: [],
}
