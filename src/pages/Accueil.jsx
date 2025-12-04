// 📌 src/pages/Home.jsx
import React from "react";
import { MountainSnow, Snowflake, Map, Users, Star } from "lucide-react";

const Accueil = () => {
  return (
    <div className="max-w-6xl mx-auto text-center">
      {/* Section Hero */}
      <section className="mt-10 md:mt-16 bg-blue-600 text-white py-16 px-6 rounded-3xl shadow-lg">
        <div className="flex flex-col items-center gap-4">
          <MountainSnow className="w-16 h-16" />
          <h1 className="text-4xl font-extrabold drop-shadow">
            Bienvenue sur Vive le Ski ❄️
          </h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Le site dédié aux passionnés de ski, des belles montagnes et des
            sensations fortes. Prépare ta saison avec nous !
          </p>

          <a
            href="/espace-client"
            className="mt-4 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-100 transition"
          >
            Accéder à votre Espace Client
          </a>
        </div>
      </section>

      {/* Section Services */}
      <section className="my-16 grid md:grid-cols-3 gap-8">
        {/* Carte 1 */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <Snowflake className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Conditions de neige</h3>
          <p className="text-gray-600">
            Consulte les prévisions météo et l'état des pistes en temps réel.
          </p>
        </div>

        {/* Carte 2 */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <Map className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Stations partenaires</h3>
          <p className="text-gray-600">
            Découvre les meilleures stations de ski en France et en Europe.
          </p>
        </div>

        {/* Carte 3 */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Communauté</h3>
          <p className="text-gray-600">
            Rejoins d'autres passionnés et partage ton expérience !
          </p>
        </div>
      </section>

      {/* Section Avis */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Ils adorent Vive le Ski</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Avis 1 */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <Star className="w-8 h-8 text-yellow-400 mb-2" />
            <p className="text-gray-700">
              “Super site ! Très pratique pour suivre la météo et préparer mes
              sorties.”
            </p>
            <p className="mt-2 font-semibold text-blue-600">– Lucas</p>
          </div>

          {/* Avis 2 */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <Star className="w-8 h-8 text-yellow-400 mb-2" />
            <p className="text-gray-700">
              “Design magnifique, simple et efficace. J’adore l’ambiance hiver
              ❄️.”
            </p>
            <p className="mt-2 font-semibold text-blue-600">– Emma</p>
          </div>

          {/* Avis 3 */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <Star className="w-8 h-8 text-yellow-400 mb-2" />
            <p className="text-gray-700">
              “L’espace client est propre et clair. Parfait pour suivre mes
              infos.”
            </p>
            <p className="mt-2 font-semibold text-blue-600">– Adrien</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
