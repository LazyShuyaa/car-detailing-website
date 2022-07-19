
import './App.css';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";
import About from "./components/About";
import Body from "./components/Body";
import Prices from "./components/Prices";
import Services from "./components/Services";
import Hours from "./components/Hours";
import Appointment from "./components/Appointment";
import FinePrint from "./components/FinePrint";
import Footer from "./components/Footer";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
        <About />
        <Body /> 
        <Prices/>
        <Services />
        <Hours/>
        <Appointment />
        <FinePrint />
        <Footer />

      </ThemeProvider>
    </Box>
  );
}

export default App;
