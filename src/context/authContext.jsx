import { createContext, useState } from "react";
import { databases } from "../appwrite";
import { Query } from "appwrite";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // 🔐 Login
  async function login(email, password) {
    try {
      const result = await databases.listDocuments(
        "6930103b002c203b18b6", // databaseId
        "user", // collectionId
        [Query.equal("mail", email), Query.equal("password", password)]
      );

      if (result.documents.length === 0) {
        return { success: false, message: "Identifiants incorrects" };
      }

      const foundUser = result.documents[0];

      const userData = {
        id: foundUser.$id,
        email: foundUser.mail,
        firstName: foundUser.first_name || "",
        lastName: foundUser.last_name || "",
      };

      setUser(userData);

      return { success: true, user: userData };
    } catch (err) {
      console.error("Erreur login :", err);
      return { success: false, message: "Erreur serveur" };
    }
  }

  // 🔐 Register
  async function register({ email, password, firstName, lastName }) {
    try {
      const res = await databases.createDocument(
        "6930103b002c203b18b6", // databaseId
        "user", // collectionId
        "unique()", // documentId automatique
        {
          mail: email,
          password,
          first_name: firstName, // correspond exactement au champ Appwrite
          last_name: lastName, // correspond exactement au champ Appwrite
        }
      );

      return { success: true, user: res };
    } catch (err) {
      console.error("Erreur register :", err);
      return { success: false, message: "Erreur lors de l'inscription" };
    }
  }

  // 🔒 Logout
  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
