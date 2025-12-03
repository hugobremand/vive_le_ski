// 📌 Fichier : src/layouts/MainLayout.jsx
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { MountainSnow, Snowflake, Navigation, User } from "lucide-react"; // ajout de User pour l'icône

const MainLayout = () => {
  const location = useLocation();

  const navItems = [
    { path: "/onglet1", label: "Onglet 1", icon: MountainSnow },
    { path: "/onglet2", label: "Onglet 2", icon: Snowflake },
    { path: "/onglet3", label: "Onglet 3", icon: Navigation },
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-blue-600/90 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo / Titre */}
          <Link to="/" className="flex items-center gap-3">
            <MountainSnow className="w-10 h-10 text-white" />
            <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow">
              Vive le Ski ❄️
            </h1>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm
                  ${
                    isActive
                      ? "bg-white text-blue-700 shadow-md"
                      : "text-white hover:bg-blue-500/40 hover:shadow"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 transition-all duration-200 ${
                      isActive ? "text-blue-700" : "text-white"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            })}

            {/* Onglet Espace Client tout à droite */}
            <Link
              to="/espace-client"
              className="ml-6 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white hover:bg-blue-500/40 hover:shadow transition-all duration-200"
            >
              <User className="h-5 w-5" />
              Espace Client
            </Link>
          </div>

          {/* Mobile placeholder */}
          <div className="md:hidden text-white">
            <Snowflake className="w-7 h-7" />
          </div>
        </div>
      </nav>

      {/* CONTENU DES PAGES */}
      <main className="w-full px-4 py-28">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
