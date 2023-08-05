import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store";
import CustomThemeProvider from "./components/themes";
import AlertDialog from "./components/AlertDialog";
import Snackbar from "./components/Snacksbar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
        <App />
        <AlertDialog />
        <Snackbar />
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>,
);
