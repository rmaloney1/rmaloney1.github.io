import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber, black } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      light: "#555555",
      main: "#000000",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },
    secondary: amber,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
