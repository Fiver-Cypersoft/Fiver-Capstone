import logo from "./logo.svg";
import "./App.css";
import Spinner from "./component/Spinner/Spinner";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./template/Layout";

function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
