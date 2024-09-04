import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./constants";

const App = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
