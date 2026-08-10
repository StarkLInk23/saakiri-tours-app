# 🌿 Sáakiri Tours & Travel

> Plataforma web para la gestión de paquetes turísticos y reservas de **Sáakiri Tours & Travel**, agencia de turismo especializada en experiencias en la Amazonía peruana.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react\&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite\&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify\&logoColor=white)](https://www.netlify.com/)

## 🌎 Demo

🚀 **Aplicación web:**
https://saakiri-tours.netlify.app/

Sáakiri Tours & Travel es una agencia real ubicada en Tambopata, Madre de Dios, Perú.

La aplicación permite a los visitantes explorar experiencias turísticas, consultar información detallada y registrar solicitudes de reserva. Además, incorpora un panel administrativo protegido para gestionar los paquetes turísticos mediante operaciones CRUD.

---

## ✨ Funcionalidades

### 🌴 Área pública

* 🏠 Página de inicio
* 🗺️ Catálogo de paquetes turísticos
* 🔎 Detalle de cada paquete
* 📋 Registro de reservas
* 👥 Página Nosotros
* 📞 Página Contacto
* 📱 Diseño responsive
* 🌙 Modo claro / oscuro
* 💬 Acceso directo a WhatsApp

### 🔐 Área administrativa

* 🔑 Inicio de sesión
* 🛡️ Autenticación mediante JWT
* 📦 Listado de paquetes
* ➕ Creación de paquetes
* ✏️ Edición de paquetes
* 🗑️ Eliminación de paquetes
* 🔄 Actualización del estado de paquetes
* 🚫 Protección de rutas administrativas

### ⚙️ Integración

El frontend consume una API REST propia desarrollada con Node.js y Express.

```text
React + Vite
      │
    Axios
      │
      ▼
Node.js + Express
      │
    Prisma
      │
      ▼
PostgreSQL
```

---

## 🏗️ Arquitectura

El proyecto está separado en dos repositorios:

| Proyecto      | Tecnología                  | Despliegue |
| ------------- | --------------------------- | ---------- |
| Frontend      | React + Vite + Tailwind CSS | Netlify    |
| Backend       | Node.js + Express + Prisma  | Railway    |
| Base de datos | PostgreSQL                  | Remota     |

### 🔗 Repositorios relacionados

**Frontend**

https://github.com/StarkLInk23/saakiri-tours-app

**Backend**

https://github.com/StarkLInk23/saakiri-tours-backend

**API desplegada**

https://saakiri-tours-backend-production.up.railway.app/

---

## 🧰 Tecnologías utilizadas

### 🎨 Frontend

* ⚛️ React 19
* ⚡ Vite
* 🎨 Tailwind CSS 4
* 🧭 React Router DOM
* 🔗 Axios
* 📝 React Hook Form
* 🔔 SweetAlert2
* 🎯 React Icons
* 🧠 Context API

### 🧪 Testing

* 🧪 Vitest
* ⚛️ React Testing Library
* 🧩 Jest DOM
* 🌐 JSDOM

### 🚀 Deploy

* ▲ Netlify
* 🐙 GitHub

---

## 📂 Estructura

```text
src/
├── components/
│   ├── Navbar
│   ├── Footer
│   ├── PaqueteCard
│   └── Estado
│
├── context/
│   ├── AuthContext
│   ├── PaquetesContext
│   └── ThemeContext
│
├── layouts/
│   ├── LayoutPublic
│   └── LayoutAdmin
│
├── pages/
│   ├── Home
│   ├── Paquetes
│   ├── DetallePaquete
│   ├── Reservar
│   ├── Nosotros
│   ├── Contacto
│   ├── Login
│   └── administración
│
├── services/
│   └── api.js
│
├── App.jsx
└── main.jsx
```

---

## 🧭 Principales rutas

| Ruta                | Descripción               |
| ------------------- | ------------------------- |
| `/`                 | Inicio                    |
| `/paquetes`         | Catálogo turístico        |
| `/paquete/:id`      | Detalle del paquete       |
| `/reservar/:id`     | Formulario de reserva     |
| `/nosotros`         | Información de la agencia |
| `/contacto`         | Información de contacto   |
| `/login`            | Acceso administrativo     |
| `/admin`            | Panel administrativo      |
| `/admin/nuevo`      | Crear paquete             |
| `/admin/editar/:id` | Editar paquete            |

---

## 🔌 API utilizada

El frontend se comunica con el backend mediante Axios.

### Autenticación

```text
POST /api/auth/login
```

### Paquetes

```text
GET    /api/paquetes
GET    /api/paquetes/:id
POST   /api/paquetes
PUT    /api/paquetes/:id
DELETE /api/paquetes/:id
```

### Reservas

```text
GET    /api/reservas
POST   /api/reservas
```

Las rutas administrativas requieren autenticación mediante JWT.

---

## 🧪 Testing

El frontend incluye pruebas básicas utilizando:

```text
Vitest
React Testing Library
Jest DOM
```

Ejecutar:

```bash
npm run test
```

Modo desarrollo de pruebas:

```bash
npm run test:watch
```

---

## 🚀 Instalación local

### 1. Clonar

```bash
git clone https://github.com/StarkLInk23/saakiri-tours-app.git
cd saakiri-tours-app
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar

```bash
npm run dev
```

### 4. Build de producción

```bash
npm run build
```

### 5. Preview

```bash
npm run preview
```

> Para utilizar todas las funcionalidades es necesario disponer del backend configurado y accesible.

---

## 🔄 Evolución del proyecto

El proyecto evolucionó durante las diferentes etapas del curso:

```text
Frontend inicial
      ↓
React + Vite + Tailwind
      ↓
CRUD con API simulada
      ↓
Backend propio
      ↓
Node.js + Express
      ↓
PostgreSQL + Prisma
      ↓
JWT + bcrypt
      ↓
Deploy
      ↓
Netlify + Railway
```

MockAPI fue utilizado durante una etapa anterior del desarrollo como API simulada. La versión final utiliza un backend propio conectado a PostgreSQL.

---

## 📌 Estado del proyecto

### 🟢 Proyecto final — desplegado

El frontend se encuentra publicado en Netlify y conectado al backend REST desplegado en Railway.

La solución final integra:

* React
* Vite
* Tailwind CSS
* API REST propia
* Node.js
* Express
* Prisma
* PostgreSQL
* JWT
* CRUD administrativo
* Sistema de reservas
* Testing
* Deploy

---

## 🌿 Sáakiri Tours & Travel

**Tambopata, Madre de Dios — Perú · 2026**

> De una gestión turística tradicional a una plataforma digital propia.
