import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import App from "./components/App";
import reducers from "./reducers";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <Provider store={legacy_createStore(reducers)}>
    <App />
  </Provider>
);
