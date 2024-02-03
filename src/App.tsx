import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./service/store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
