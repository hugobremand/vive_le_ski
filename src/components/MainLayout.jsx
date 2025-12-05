// 📌 Fichier : src/layouts/MainLayout.jsx
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { MountainSnow, Snowflake, User } from "lucide-react";

const MainLayout = () => {
  const location = useLocation();

  const navItems = [
    { path: "/Accueil", label: "Accueil", icon: MountainSnow },
    { path: "/Forfait", label: "Forfait", icon: Snowflake },
  ];

  // Fonction utilitaire pour avoir les mêmes classes
  const getNavClasses = (active) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm ${
      active
        ? "bg-white text-blue-700 shadow-md"
        : "text-white hover:bg-blue-500/40 hover:shadow"
    }`;

  return (
    <div className="bg-white text-black min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-blue-600/90 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto flex h-20 items-center justify-between px-4">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <MountainSnow className="w-10 h-10 text-white" />
            <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow">
              Vive le Ski ❄️
            </h1>
          </Link>

          {/* NAVIGATION */}
          <div className="hidden md:flex items-center gap-3">
            {/* Onglets normaux */}
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={getNavClasses(isActive)}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      isActive ? "text-blue-700" : "text-white"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            })}

            {/* ▸ Espace Client (à droite, mais même style) */}
            {(() => {
              const isActive = location.pathname === "/espace-client";
              return (
                <Link
                  to="/espace-client"
                  className={`ml-6 ${getNavClasses(isActive)}`}
                >
                  <User
                    className={`h-5 w-5 ${
                      isActive ? "text-blue-700" : "text-white"
                    }`}
                  />
                  Espace Client
                </Link>
              );
            })()}
          </div>

          {/* Mobile icon */}
          <div className="md:hidden text-white">
            <Snowflake className="h-7 w-7" />
          </div>
        </div>
      </nav>

      {/* CONTENU */}
      <main className="w-full px-4 py-28">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
