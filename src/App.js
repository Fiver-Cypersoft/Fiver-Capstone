import logo from "./logo.svg";
import "./App.css";
import Spinner from "./component/Spinner/Spinner";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "./page/Profile/Profile";
import Layout from "./page/Template/Layout";

function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
