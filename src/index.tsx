import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Contacts, Contact } from "./contact";
import { Provider } from "react-redux";
import { store } from "./store";
import SimpleSnackbar from "./snakbar";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/contact/view/:id" element={<Contact />} /> */}
          <Route path="/contact/:id" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
      <SimpleSnackbar />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
