import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./Context/theme";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
