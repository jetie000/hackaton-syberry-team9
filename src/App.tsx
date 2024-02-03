import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./service/store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          APP
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
