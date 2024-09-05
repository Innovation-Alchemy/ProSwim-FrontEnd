import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { authRoutes, routes } from "./constants";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Route>

      {authRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
