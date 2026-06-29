# Sáakiri Tours & Travel — App de Gestión de Paquetes Turísticos

Aplicación web desarrollada como Segunda Parte del Proyecto Integrador del curso de Desarrollo Web. Catálogo público de paquetes turísticos con sistema de reservas, y panel administrativo con operaciones CRUD completas, conectado a una API REST simulada (MockAPI).

## 🌿 Sobre el proyecto

**Sáakiri Tours & Travel** es una agencia de turismo real ubicada en Puerto Maldonado, Madre de Dios, Perú, especializada en experiencias en la Reserva Nacional de Tambopata.

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Frontend | React 19 + Vite |
| Estilos | Tailwind CSS v4 |
| Routing | React Router DOM v7 |
| HTTP Client | Axios |
| Formularios | React Hook Form |
| Notificaciones | SweetAlert2 |
| Iconos | React Icons |
| Backend (simulado) | MockAPI.io (REST) |
| Testing | Vitest + React Testing Library |

## 📂 Estructura del proyecto

```
src/
├── components/       # Componentes reutilizables (Navbar, Footer, Card, Estado)
│   └── __tests__/    # Pruebas unitarias de componentes
├── context/          # Context API (estado global de paquetes)
├── layouts/          # Layouts compartidos (público y admin)
├── pages/            # Páginas/vistas de la aplicación
├── services/         # Capa de comunicación con la API (Axios)
├── App.jsx           # Definición de rutas
└── main.jsx          # Punto de entrada
```

## 🗺️ Rutas de la aplicación

| Ruta | Descripción | Acceso |
|---|---|---|
| `/` | Catálogo público de paquetes | Público |
| `/paquete/:id` | Detalle de un paquete específico | Público |
| `/reservar/:id` | Formulario de reserva | Público |
| `/admin` | Panel de gestión (listado + CRUD) | Admin |
| `/admin/nuevo` | Crear nuevo paquete | Admin |
| `/admin/editar/:id` | Editar paquete existente | Admin |

## 🔌 API REST (MockAPI)

Recurso `paquetes`:

```
GET    /paquetes        → Listar todos los paquetes
GET    /paquetes/:id    → Obtener un paquete
POST   /paquetes        → Crear un paquete
PUT    /paquetes/:id    → Actualizar un paquete
DELETE /paquetes/:id    → Eliminar un paquete
```

Recurso `reservas`:

```
POST   /reservas        → Registrar una nueva reserva
```

## 🚀 Cómo correr el proyecto localmente

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Ejecutar pruebas
npm run test

# Build de producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🧪 Testing

El proyecto incluye pruebas unitarias básicas de componentes usando Vitest + React Testing Library, cubriendo renderizado de datos y comportamiento de interacción (clicks, props condicionales).

---

Puerto Maldonado, Madre de Dios — Perú · 2026
