import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Login from "../Pages/Login";
import { PrivateRoute } from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/Login" element={<Login />} />
      <Route
        path="/Product"
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
