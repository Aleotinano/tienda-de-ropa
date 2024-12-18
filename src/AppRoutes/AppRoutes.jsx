import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { Home } from "../Pages/Home/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};
