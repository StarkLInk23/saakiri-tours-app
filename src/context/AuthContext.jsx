// src/context/AuthContext.jsx
//
// Contexto de autenticación para el panel administrativo.
//
// NOTA IMPORTANTE: Esta es una autenticación SIMULADA del lado del cliente,
// pensada para el alcance académico del proyecto (sin backend propio).
// Las credenciales viven en el código del frontend, por lo que NO ofrecen
// seguridad real de producción — cualquiera con acceso al código fuente
// (DevTools, código descargado) puede verlas. En una arquitectura real,
// esto se reemplazaría por un backend (Node + Express) que valide
// credenciales contra una base de datos con contraseñas hasheadas (bcrypt)
// y emita un token JWT. Aquí documentamos esa limitación explícitamente
// como parte de la "arquitectura objetivo" del proyecto.
//
// La sesión NO persiste: al recargar la página o cerrar la pestaña,
// el administrador debe volver a iniciar sesión (decisión de diseño
// solicitada para este proyecto).

import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

// Credenciales de administrador (simuladas, solo para fines académicos)
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
