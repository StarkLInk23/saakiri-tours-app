// src/context/__tests__/AuthContext.test.jsx
//
// Prueba básica del flujo de autenticación: credenciales correctas
// autentican, credenciales incorrectas no, y logout limpia la sesión.

import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { AuthProvider, useAuth } from "../AuthContext";

function wrapper({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

describe("AuthContext", () => {
  it("inicia sin sesión activa", () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    expect(result.current.autenticado).toBe(false);
  });

  it("autentica con credenciales correctas", () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    act(() => {
      const exito = result.current.login("admin", "saakiri2026");
      expect(exito).toBe(true);
    });
    expect(result.current.autenticado).toBe(true);
  });

  it("rechaza credenciales incorrectas", () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    act(() => {
      const exito = result.current.login("admin", "incorrecta");
      expect(exito).toBe(false);
    });
    expect(result.current.autenticado).toBe(false);
  });

  it("cierra sesión correctamente", () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    act(() => {
      result.current.login("admin", "saakiri2026");
    });
    expect(result.current.autenticado).toBe(true);

    act(() => {
      result.current.logout();
    });
    expect(result.current.autenticado).toBe(false);
  });
});
