import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserHistory } from "history";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";
import CustomRouter from "./contexts/CustomRouter";

const history = createBrowserHistory({ forceRefresh: true });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CustomRouter history={history}>
      <CharacterAnimationsProvider>
        <App />
      </CharacterAnimationsProvider>
    </CustomRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
