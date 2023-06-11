import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { styled } from "styled-components";
import { RecordModal } from "./components/RecordModal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    {/* <RecordModal /> */}
  </React.StrictMode>
);
