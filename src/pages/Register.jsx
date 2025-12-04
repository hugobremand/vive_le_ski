import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const result = await register({
      firstName: prenom,
      lastName: nom,
      email,
      password,
    });

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert("Compte créé avec succès !");
    navigate("/login"); // Redirection vers le login après inscription
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Créer un compte
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Nom</label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Prénom</label>
            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            S'inscrire
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Déjà un compte ?{" "}
          <a href="/login" className="text-blue-600 font-medium">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
}
