import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StateProvider } from "./Components/UI/StateProvider";
import reducer, { initialState } from "../src/Components/UI/Reducer.js"; // Make sure this exists

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </StrictMode>
);
