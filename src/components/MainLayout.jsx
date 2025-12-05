// 📌 Fichier : src/layouts/MainLayout.jsx
import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { MountainSnow, Snowflake, User, Menu, X } from "lucide-react";

const MainLayout = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/Accueil", label: "Accueil", icon: MountainSnow },
    { path: "/Forfait", label: "Forfait", icon: Snowflake },
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-blue-600/90 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto flex h-20 items-center justify-between px-4">
          {/* LOGO + TITRE */}
          <Link
            to="/"
            className="flex items-center gap-0.5 md:gap-3 whitespace-nowrap"
          >
            {/* Icon gauche : caché sur mobile */}
            <MountainSnow className="hidden md:block w-6 h-6 md:w-10 md:h-10 text-white" />

            {/* Titre en h2 : grande taille sur mobile et encore plus sur desktop */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow leading-none">
              Vive le Ski
            </h2>

            {/* Icon droite : caché sur mobile */}
            <Snowflake className="hidden md:block w-5 h-5 md:w-8 md:h-8 text-cyan-200" />
          </Link>

          {/* MENU DESKTOP */}
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
                    className={`h-5 w-5 ${
                      isActive ? "text-blue-700" : "text-white"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            })}

            {/* Espace Client */}
            <Link
              to="/espace-client"
              className="ml-6 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white hover:bg-blue-500/40 hover:shadow transition-all duration-200"
            >
              <User className="h-5 w-5" />
              Espace Client
            </Link>
          </div>

          {/* MENU BURGER (mobile) */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* MENU MOBILE DÉROULANT */}
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-blue-600 px-6 pb-4 pt-2 gap-3 shadow-lg">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 py-3 rounded-lg text-base font-medium transition-all
                  ${
                    isActive
                      ? "bg-white text-blue-700"
                      : "text-white hover:bg-blue-500/40"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      isActive ? "text-blue-700" : "text-white"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            })}

            {/* Espace client mobile */}
            <Link
              to="/espace-client"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-3 rounded-lg text-white hover:bg-blue-500/40"
            >
              <User className="h-6 w-6" />
              Espace Client
            </Link>
          </div>
        )}
      </nav>

      {/* CONTENU DE PAGE */}
      <main className="w-full px-4 py-28">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
