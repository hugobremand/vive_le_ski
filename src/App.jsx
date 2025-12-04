import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useAuth } from "./context/useAuth";

import MainLayout from "./components/MainLayout";

import Forfait from "./pages/Forfait";
import Client from "./pages/Client";
import Accueil from "./pages/Accueil";
import Login from "./pages/Login";
import CommandeForfait from "./pages/CommandeForfait";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* route login SANS layout */}
        <Route path="/login" element={<Login />} />

        {/* Routes avec MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/forfait" element={<Forfait />} />
          <Route
            path="/commandeForfait"
            element={
              <PrivateRoute>
                <CommandeForfait />
              </PrivateRoute>
            }
          />

          {/* espace client PROTÉGÉ */}
          <Route
            path="/espace-client"
            element={
              <PrivateRoute>
                <Client />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
