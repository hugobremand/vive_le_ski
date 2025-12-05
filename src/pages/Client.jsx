import React from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

export default function Client() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // on vide le user
    navigate("/login"); // redirection vers login
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header avec bouton déconnexion */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2 sm:mb-0">
          Espace Client
        </h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Déconnexion
        </button>
      </div>

      {/* Contenu utilisateur */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow space-y-3 sm:space-y-4">
        <p>
          <strong>Nom :</strong> {user.lastName}
        </p>
        <p>
          <strong>Prénom :</strong> {user.firstName}
        </p>
        <p>
          <strong>Email :</strong> {user.email}
        </p>
      </div>
    </div>
  );
}
