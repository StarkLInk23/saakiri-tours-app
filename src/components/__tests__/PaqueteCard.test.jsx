// src/components/__tests__/PaqueteCard.test.jsx
//
// Prueba básica del componente PaqueteCard: verifica que renderice
// correctamente el nombre, precio y duración de un paquete de prueba.

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PaqueteCard from "../PaqueteCard";

const paqueteDePrueba = {
  id: "1",
  nombre: "Tour de Prueba",
  duracion: "2D / 1N",
  descripcion: "Una descripción de prueba para el tour.",
  precioBasico: 100,
  precioPremium: 150,
  minPax: 2,
  imagen: "https://placehold.co/600x400",
  activo: true,
};

function renderConRouter(componente) {
  return render(<BrowserRouter>{componente}</BrowserRouter>);
}

describe("PaqueteCard", () => {
  it("muestra el nombre del paquete", () => {
    renderConRouter(<PaqueteCard paquete={paqueteDePrueba} />);
    expect(screen.getByText("Tour de Prueba")).toBeInTheDocument();
  });

  it("muestra el precio básico formateado en USD", () => {
    renderConRouter(<PaqueteCard paquete={paqueteDePrueba} />);
    expect(screen.getByText(/\$100 USD/)).toBeInTheDocument();
  });

  it("muestra la duración del tour", () => {
    renderConRouter(<PaqueteCard paquete={paqueteDePrueba} />);
    expect(screen.getByText("2D / 1N")).toBeInTheDocument();
  });

  it("incluye un enlace al detalle del paquete", () => {
    renderConRouter(<PaqueteCard paquete={paqueteDePrueba} />);
    const enlace = screen.getByText("Ver detalle →");
    expect(enlace).toHaveAttribute("href", "/paquete/1");
  });
});
