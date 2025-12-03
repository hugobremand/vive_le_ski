import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Forfait from "./pages/Forfait";
import Onglet3 from "./pages/Onglet3";
import Client from "./pages/Client"; 
import Accueil from "./pages/Accueil";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route element={<MainLayout />}>
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/Forfait" element={<Forfait />} />
          {/* <Route path="/onglet3" element={<Onglet3 />} /> */}
          <Route path="espace-client" element={<Client />} />

          <Route path="/" element={<Accueil />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
