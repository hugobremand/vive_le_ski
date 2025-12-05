// 📌 src/pages/CommandeForfait.jsx
import React, { useState, useMemo } from "react";

const CommandeForfait = () => {
  const prixAdultes = {
    "1 Jour": 81.8,
    "6 Jours": 409,
    Samedi: 65.4,
  };

  const prixEnfants = {
    "1 Jour": 67,
    "6 Jours": 335,
    Samedi: 39,
  };

  const [adulteObligatoire, setAdulteObligatoire] = useState("1 Jour");
  const [adulteSup, setAdulteSup] = useState({
    "1 Jour": 0,
    "6 Jours": 0,
    Samedi: 0,
  });
  const [enfants, setEnfants] = useState({
    "1 Jour": 0,
    "6 Jours": 0,
    Samedi: 0,
  });

  const total = useMemo(() => {
    let t = 0;
    t += prixAdultes[adulteObligatoire];
    Object.keys(adulteSup).forEach((type) => {
      t += adulteSup[type] * prixAdultes[type];
    });
    Object.keys(enfants).forEach((type) => {
      t += enfants[type] * prixEnfants[type];
    });
    return t.toFixed(2);
  }, [adulteObligatoire, adulteSup, enfants]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Commande envoyée !");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 rounded-xl shadow-md mt-6 sm:mt-10">
      <h2 className="text-4xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center sm:text-left leading-none">
        Commander un forfait
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* FORFAIT ADULTE OBLIGATOIRE */}
        <div className="border p-3 sm:p-4 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
            Forfait Adulte Obligatoire
          </h2>

          <label className="block mb-2 text-sm sm:text-base">
            Type de forfait :
          </label>
          <select
            value={adulteObligatoire}
            onChange={(e) => setAdulteObligatoire(e.target.value)}
            className="border p-2 rounded w-full"
          >
            {Object.keys(prixAdultes).map((type) => (
              <option key={type} value={type}>
                {type} — {prixAdultes[type]} €
              </option>
            ))}
          </select>
        </div>

        {/* FORFAITS ADULTES SUPPLÉMENTAIRES */}
        <div className="border p-3 sm:p-4 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
            Forfaits Adultes Supplémentaires
          </h2>

          {Object.keys(adulteSup).map((type) => (
            <div
              key={type}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-3"
            >
              <span className="mb-1 sm:mb-0">{type}</span>
              <input
                type="number"
                min="0"
                value={adulteSup[type]}
                onChange={(e) =>
                  setAdulteSup({ ...adulteSup, [type]: Number(e.target.value) })
                }
                className="border p-1 w-full sm:w-20 rounded text-center"
              />
            </div>
          ))}
        </div>

        {/* FORFAITS ENFANTS */}
        <div className="border p-3 sm:p-4 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
            Forfaits Enfants
          </h2>

          {Object.keys(enfants).map((type) => (
            <div
              key={type}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-3"
            >
              <span className="mb-1 sm:mb-0">{type}</span>
              <input
                type="number"
                min="0"
                value={enfants[type]}
                onChange={(e) =>
                  setEnfants({ ...enfants, [type]: Number(e.target.value) })
                }
                className="border p-1 w-full sm:w-20 rounded text-center"
              />
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="text-right text-xl sm:text-2xl font-bold mt-4 sm:mt-6">
          Total : {total} €
        </div>

        {/* BOUTON ENVOYER */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-500 transition-colors duration-200 w-full"
        >
          Valider la commande
        </button>
      </form>
    </div>
  );
};

export default CommandeForfait;
