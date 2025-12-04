// AuthContext.jsx
import { createContext, useState } from "react";
import { databases } from "../appwrite";
import { Query } from "appwrite";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    try {
      const result = await databases.listDocuments(
        "6930103b002c203b18b6",
        "user",
        [Query.equal("mail", email), Query.equal("password", password)]
      );

      if (result.documents.length === 0) {
        return { success: false, message: "Identifiants incorrects" };
      }

      const foundUser = result.documents[0];
      setUser(foundUser);

      return { success: true, user: foundUser };
    } catch (err) {
      console.error("Erreur login :", err);
      return { success: false, message: "Erreur serveur" };
    }
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


