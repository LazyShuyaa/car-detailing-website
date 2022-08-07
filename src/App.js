import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import FinePrint from "./components/FinePrint";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailingPrices from "./pages/DetailingPrices";
import Hours from "./pages/Hours";
import ServicePrices from "./pages/ServicePrices";

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
        <HashRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/detailing-prices" element={<DetailingPrices />} />
            <Route path="/additional-services" element={<ServicePrices />} />
            <Route path="/business-hours" element={<Hours />} />
            <Route path="/schedule-appointment" element={<Contact />} />
          </Routes>
        </HashRouter>
        <FinePrint />
        <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default App;
