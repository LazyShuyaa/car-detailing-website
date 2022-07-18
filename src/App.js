
import './App.css';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";
import Body from "./components/Body";
import Prices from "./components/Prices";
import Services from "./components/Services";
import Hours from "./components/Hours";
import Footer from "./components/Footer";
import { Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#e0e0e0",
      dark: "#c2c2c2",
      contrastText: "#000000",
    },
    secondary: {
      light: "#ffffff",
      main: "#e2f1fc",
      dark: "#b0bec9",
      contrastText: "#ffffff",
    },
  },
});

function App() {
  return (
    <Box id="home" className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Body /> 

        <Prices/>
        <Services />
        <Hours/>
        <Footer />

      </ThemeProvider>
    </Box>
  );
}

export default App;
