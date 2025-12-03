import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Onglet1 from "./pages/Onglet1";
import Onglet2 from "./pages/Onglet2";
import Onglet3 from "./pages/Onglet3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/onglet1" element={<Onglet1 />} />
          <Route path="/onglet2" element={<Onglet2 />} />
          <Route path="/onglet3" element={<Onglet3 />} />

          {/* Accueil */}
          <Route path="/" element={<Onglet1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
