import { useState } from "react";
import { databases } from "../appwrite";
import { Query } from "appwrite";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await databases.listDocuments(
        "6930103b002c203b18b6",
        "user",
        [Query.equal("mail", email), Query.equal("password", password)]
      );

      if (response.documents.length > 0) {
        alert("Connexion réussie !");
      } else {
        alert("Email ou mot de passe incorrect !");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la connexion");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Se connecter
        </h1>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
