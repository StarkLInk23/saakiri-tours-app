// Pruebas básicas de los componentes de estado (carga / error).

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Loader, ErrorMensaje } from "../Estado";

describe("Loader", () => {
  it("muestra el texto de carga por defecto", () => {
    render(<Loader />);
    expect(screen.getByText("Cargando...")).toBeInTheDocument();
  });

  it("muestra un texto personalizado si se le pasa", () => {
    render(<Loader texto="Cargando paquetes..." />);
    expect(screen.getByText("Cargando paquetes...")).toBeInTheDocument();
  });
});

describe("ErrorMensaje", () => {
  it("muestra el mensaje de error recibido", () => {
    render(<ErrorMensaje mensaje="Algo salió mal" />);
    expect(screen.getByText("Algo salió mal")).toBeInTheDocument();
  });

  it("ejecuta onReintentar al hacer click en el botón", () => {
    const onReintentar = vi.fn();
    render(<ErrorMensaje mensaje="Error de red" onReintentar={onReintentar} />);
    fireEvent.click(screen.getByText("Reintentar"));
    expect(onReintentar).toHaveBeenCalledTimes(1);
  });

  it("no muestra botón de reintentar si no se pasa la función", () => {
    render(<ErrorMensaje mensaje="Error de red" />);
    expect(screen.queryByText("Reintentar")).not.toBeInTheDocument();
  });
});