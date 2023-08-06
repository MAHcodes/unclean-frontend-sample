import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import AlertDialog from "./components/AlertDialog";
import ErrorHandlerInterceptor from "./components/ErrorhandlerInterceptor";
import Snackbar from "./components/Snacksbar";
import CustomThemeProvider from "./components/themes";
import "./index.css";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
        <ErrorHandlerInterceptor>
          <App />
          <AlertDialog />
          <Snackbar />
        </ErrorHandlerInterceptor>
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>,
);
