import { createContext, useContext, useState } from "react";
import { loginAdmin } from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Inicializa leyendo el token de localStorage — persiste entre recargas
  const [autenticado, setAutenticado] = useState(() => {
    return Boolean(localStorage.getItem("token"));
  });

  async function login(usuario, password) {
    try {
      const { token, nombre } = await loginAdmin(usuario, password);
      localStorage.setItem("token", token);
      localStorage.setItem("nombreAdmin", nombre);
      setAutenticado(true);
      return true;
    } catch (err) {
      return false;
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("nombreAdmin");
    setAutenticado(false);
  }

  return (
    <AuthContext.Provider value={{ autenticado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
}