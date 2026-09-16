import App from './App.jsx'
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import theme from "./Theme.jsx";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ContextApi from './components/context/contextApi.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ContextApi>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
  </ContextApi>
  </BrowserRouter>
);
