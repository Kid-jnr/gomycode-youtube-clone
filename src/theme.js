import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      main: "#0f0f0f",
      secondary: "rgba(83, 80, 80, 0.11)",
    },

    text: {
      primary: "rgb(255, 255, 255)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
      background: "rgba(255, 255, 255, 0.17)",
    },
  },
});

export default theme;
