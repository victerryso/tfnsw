import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import LandingPage from "./pages/landing";
import "@fontsource/roboto";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <CssBaseline />
      <LandingPage />
    </MuiPickersUtilsProvider>
  </ThemeProvider>
);

export default App;
