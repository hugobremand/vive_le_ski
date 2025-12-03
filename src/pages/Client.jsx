// 📌 src/pages/EspaceClient.jsx
import React from "react";

const Client = () => {
  // Données statiques pour l'exemple
  const client = {
    nom: "Dupont",
    prenom: "Jean",
    email: "jean.dupont@example.com",
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Espace Client</h2>
      <p>
        <strong>Nom :</strong> {client.nom}
      </p>
      <p>
        <strong>Prénom :</strong> {client.prenom}
      </p>
      <p>
        <strong>Email :</strong> {client.email}
      </p>
    </div>
  );
};

export default Client;
