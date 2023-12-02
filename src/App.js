import "./App.css";
import Spinner from "./component/Spinner/Spinner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Categories from "./page/Categories/Categories";
import Layout from "./page/Template/Layout";
import Profile from "./page/Profile/Profile";

export const route = {
  home: {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  login: {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  register: {
    path: "/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
  categories: {
    path: `/categories/:nameId`,
    nameId: (nameId) => `/categories/${nameId}`,
    element: (
      <Layout>
        <Categories />
      </Layout>
    ),
  },
  profile: {
    path: "/profile",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
};

function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          {Object.values(route).map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
