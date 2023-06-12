import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { styled } from "styled-components";
import { RecordModal } from "./components/RecordModal";
import { ToastProvider } from "react-toast-notifications";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToastProvider
      placement="bottom-right"
      autoDismiss
      autoDismissTimeout={3000}
    >
      <App />
      {/* <RecordModal /> */}
    </ToastProvider>
  </React.StrictMode>
);
