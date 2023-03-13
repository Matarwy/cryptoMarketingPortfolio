const theme = {
  colors: {
    black: "#3E54AC",
    gray: " #655DBB",
    white: "#ECF2FF",
    orange: "#BFACE2",
  },
} as const;

export type MyTheme = typeof theme;

export default theme;
