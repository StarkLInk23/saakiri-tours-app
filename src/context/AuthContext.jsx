import { createContext, useContext, useState, useEffect } from "react";
import { loginAdmin } from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [cargandoAuth, setCargandoAuth] = useState(true);

  // Al iniciar, verifica si hay token válido en localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setAutenticado(Boolean(token));
    setCargandoAuth(false);
  }, []);

  async function login(usuario, password) {
    try {
      const { token, nombre } = await loginAdmin(usuario, password);
      localStorage.setItem("token", token);
      localStorage.setItem("nombreAdmin", nombre);
      setAutenticado(true);
      return true;
    } catch {
      return false;
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("nombreAdmin");
    setAutenticado(false);
  }

  // No renderiza nada hasta verificar el token
  if (cargandoAuth) return null;

  return (
    <AuthContext.Provider value={{ autenticado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
}