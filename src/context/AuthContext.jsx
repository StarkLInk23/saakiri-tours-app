import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const ADMIN_CREDENTIALS = {
  usuario: "admin",
  password: "saakiri2026",
};

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);

  function login(usuario, password) {
    const esValido =
      usuario === ADMIN_CREDENTIALS.usuario &&
      password === ADMIN_CREDENTIALS.password;

    if (esValido) {
      setAutenticado(true);
    }
    return esValido;
  }

  function logout() {
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