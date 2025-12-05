// 📌 src/pages/Forfaits.jsx
import React from "react";
import { Link } from "react-router-dom";

const Forfaits = () => {
  return (
    <div className="relative max-w-6xl mx-auto bg-white p-4 sm:p-6 rounded-xl shadow-md min-h-screen">
      {/* Bouton Commander */}
      <div className="mb-4 sm:absolute sm:top-6 sm:right-6 w-full sm:w-auto flex justify-center sm:justify-end">
        <Link
          to="/commandeForfait"
          className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-xl font-medium hover:bg-blue-500 transition-colors duration-200 shadow-md text-sm sm:text-base"
        >
          Commander
        </Link>
      </div>

      {/* Contenu de la page Forfaits */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
        Nos Forfaits
      </h2>
      <p className="mb-4 text-center sm:text-left">
        Découvrez nos forfaits et choisissez celui qui vous convient.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        Forfait Adulte :
      </h2>
      <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="border p-3 sm:p-4 rounded-lg shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold">Forfait 1 Jour</h3>
          <p>Accès complet aux pistes pour une journée.</p>
          <p className="font-bold mt-2">81,80 €</p>
        </div>
        <div className="border p-3 sm:p-4 rounded-lg shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold">Forfait 6 Jours</h3>
          <p>Accès complet aux pistes pendant le weekend.</p>
          <p className="font-bold mt-2">409 €</p>
        </div>
        <div className="border p-3 sm:p-4 rounded-lg shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold">Forfait Samedi</h3>
          <p>Accès complet aux pistes le Samedi.</p>
          <p className="font-bold mt-2">65,40 €</p>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mt-6 mb-4 sm:mb-6">
        Forfait Enfant :
      </h2>
      <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="border p-3 sm:p-4 rounded-lg shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold">Forfait 1 Jour</h3>
          <p>Accès complet aux pistes pour une journée.</p>
          <p className="font-bold mt-2">67 €</p>
        </div>
        <div className="border p-3 sm:p-4 rounded-lg shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold">Forfait 6 Jours</h3>
          <p>Accès complet aux pistes pendant le weekend.</p>
          <p className="font-bold mt-2">335 €</p>
        </div>
        <div className="border p-3 sm:p-4 rounded-lg shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold">Forfait Samedi</h3>
          <p>Accès complet aux pistes le Samedi.</p>
          <p className="font-bold mt-2">39 €</p>
        </div>
      </div>
    </div>
  );
};

export default Forfaits;
