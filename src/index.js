import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom-animated.css";
import "./assets/css/default.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/magnific.dark.css";
import "./assets/css/magnific.rtl.css";
import "./assets/css/main.css";
import "./assets/css/style.css";
import { LanguageProvider } from "./context/LanguageContext";

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
