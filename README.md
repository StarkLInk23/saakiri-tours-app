# 🌿 Sáakiri Tours & Travel — Frontend

> Plataforma web para la gestión de paquetes turísticos y solicitudes de reserva de **Sáakiri Tours & Travel**, agencia de turismo real ubicada en Tambopata, Madre de Dios, Perú.

🌐 **Demo:** [saakiri-tours.netlify.app](https://saakiri-tours.netlify.app/?utm_source=chatgpt.com)
⚙️ **Backend API:** [saakiri-tours-backend-production.up.railway.app](https://saakiri-tours-backend-production.up.railway.app/?utm_source=chatgpt.com)
💻 **Backend:** [saakiri-tours-backend](https://github.com/StarkLInk23/saakiri-tours-backend?utm_source=chatgpt.com)

---

## ✨ Sobre el proyecto

Sáakiri Tours & Travel es una aplicación web desarrollada para digitalizar la presentación de paquetes turísticos y gestionar solicitudes de reserva.

El frontend permite a los visitantes explorar las experiencias disponibles, consultar información detallada y enviar solicitudes de reserva.

También incorpora un **panel administrativo protegido**, desde donde se pueden gestionar los paquetes turísticos mediante operaciones CRUD.

La aplicación se comunica con un **backend REST propio**, desarrollado con Node.js y Express, utilizando Prisma ORM y PostgreSQL para la persistencia de datos.

---

## 🚀 Funcionalidades

### 🌎 Área pública

* 🏠 Página de inicio
* 🌴 Catálogo de paquetes turísticos
* 🔎 Detalle de cada paquete
* 📋 Formulario de reserva
* 👥 Información de la agencia
* 📞 Página de contacto
* 📱 Diseño responsive

### 🔐 Área administrativa

* 🔑 Inicio de sesión administrativo
* 🛡️ Protección de rutas
* 📦 Listado de paquetes
* ➕ Creación de paquetes
* ✏️ Edición de paquetes
* 🗑️ Eliminación de paquetes
* 🔄 Actualización de información mediante API REST

---

## 🏗️ Arquitectura

```text
                  USUARIO
                     │
                     ▼
          ┌────────────────────┐
          │      NETLIFY       │
          │   React + Vite     │
          │    Tailwind CSS    │
          └─────────┬──────────┘
                    │
                  Axios
                    │
                 HTTPS
                    │
                    ▼
          ┌────────────────────┐
          │      RAILWAY       │
          │  Node + Express    │
          │      REST API      │
          └─────────┬──────────┘
                    │
                  Prisma
                    │
                    ▼
          ┌────────────────────┐
          │     PostgreSQL     │
          └────────────────────┘
```

El proyecto está dividido en dos repositorios:

* **Frontend:** `saakiri-tours-app`
* **Backend:** `saakiri-tours-backend`

---

## 📂 Estructura principal

```text
src/
├── components/       # Componentes reutilizables
│   └── __tests__/    # Pruebas de componentes
├── context/          # Context API y estado global
├── layouts/          # Layouts público y administrativo
├── pages/            # Vistas de la aplicación
├── services/         # Comunicación con la API
├── App.jsx           # Rutas principales
├── index.css         # Estilos globales
└── main.jsx          # Punto de entrada
```

---

## 🧭 Principales rutas

| Ruta                | Descripción               |
| ------------------- | ------------------------- |
| `/`                 | Página de inicio          |
| `/paquetes`         | Catálogo de paquetes      |
| `/paquete/:id`      | Detalle del paquete       |
| `/reservar/:id`     | Formulario de reserva     |
| `/nosotros`         | Información de la agencia |
| `/contacto`         | Información de contacto   |
| `/admin/login`      | Acceso administrativo     |
| `/admin`            | Panel de administración   |
| `/admin/nuevo`      | Crear paquete             |
| `/admin/editar/:id` | Editar paquete            |

---

## 🧰 Tecnologías utilizadas

### 🎨 Frontend

<p align="left">
  <img src="https://cdn.simpleicons.org/react/61DAFB" width="42" alt="React"/>
  <img src="https://cdn.simpleicons.org/vite/646CFF" width="42" alt="Vite"/>
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="42" alt="Tailwind CSS"/>
  <img src="https://cdn.simpleicons.org/reactrouter/CA4245" width="42" alt="React Router"/>
</p>

**React 19 · Vite · Tailwind CSS · React Router DOM**

### 🔌 Comunicación y formularios

<p align="left">
  <img src="https://cdn.simpleicons.org/axios/5A29E4" width="42" alt="Axios"/>
</p>

**Axios · React Hook Form**

### 🧩 UI y utilidades

**SweetAlert2 · React Icons · Context API**

### 🧪 Testing

<p align="left">
  <img src="https://cdn.simpleicons.org/vitest/6E9F18" width="42" alt="Vitest"/>
</p>

**Vitest · React Testing Library**

### ☁️ Despliegue

<p align="left">
  <img src="https://cdn.simpleicons.org/netlify/00C7B7" width="42" alt="Netlify"/>
  <img src="https://cdn.simpleicons.org/railway/000000" width="42" alt="Railway"/>
</p>

**Netlify · Railway**

---

## 🚀 Instalación local

### 1. Clonar el repositorio

```bash
git clone https://github.com/StarkLInk23/saakiri-tours-app.git
cd saakiri-tours-app
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` según la configuración utilizada por el proyecto.

> No subir credenciales, tokens ni variables sensibles al repositorio.

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

### 5. Ejecutar pruebas

```bash
npm run test
```

### 6. Generar build de producción

```bash
npm run build
```

### 7. Previsualizar el build

```bash
npm run preview
```

---

## 🔗 Integración con el backend

El frontend consume la API REST desarrollada específicamente para el proyecto.

```text
React
  │
  │ Axios / HTTP
  ▼
Node.js + Express
  │
  │ Prisma
  ▼
PostgreSQL
```

La configuración de la URL de la API se gestiona mediante variables de entorno.

---

## 📌 Estado del proyecto

### 🟢 Proyecto funcional y desplegado

El frontend se encuentra desplegado en **Netlify** y conectado al backend REST desplegado en **Railway**.

La solución cuenta actualmente con:

* Frontend React + Vite
* Diseño responsive
* Navegación SPA
* Context API
* Formularios controlados
* CRUD administrativo
* Autenticación administrativa
* API REST propia
* PostgreSQL
* Prisma ORM
* Testing básico
* Despliegue en producción

---

## 🌎 Proyecto

**Sáakiri Tours & Travel**
Tambopata, Madre de Dios — Perú

Proyecto Integrador · Desarrollo Web
2026

---

### 💻 Tecnologías

<p align="center">
  <img src="https://cdn.simpleicons.org/react/61DAFB" width="45" alt="React"/>
  <img src="https://cdn.simpleicons.org/vite/646CFF" width="45" alt="Vite"/>
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="45" alt="Tailwind CSS"/>
  <img src="https://cdn.simpleicons.org/axios/5A29E4" width="45" alt="Axios"/>
  <img src="https://cdn.simpleicons.org/vitest/6E9F18" width="45" alt="Vitest"/>
  <img src="https://cdn.simpleicons.org/netlify/00C7B7" width="45" alt="Netlify"/>
</p>
