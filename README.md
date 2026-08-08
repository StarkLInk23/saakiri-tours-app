# 🌿 Sáakiri Tours & Travel

> Plataforma web para la gestión de paquetes turísticos y reservas de **Sáakiri Tours & Travel**, agencia de turismo especializada en experiencias en la Amazonía peruana.

## ✨ Sobre el proyecto

Sáakiri Tours permite a los usuarios explorar paquetes turísticos, consultar sus detalles y realizar solicitudes de reserva.

El sistema cuenta además con un **panel administrativo** para gestionar los paquetes mediante operaciones CRUD y una **API REST propia** conectada a PostgreSQL.

### 🚀 Características

* 🌴 Catálogo de paquetes turísticos
* 🔎 Detalle de cada experiencia
* 📋 Registro de reservas
* 🔐 Autenticación administrativa
* ⚙️ Panel de administración
* ✏️ CRUD de paquetes
* 🔄 Comunicación mediante API REST
* 🗄️ Persistencia con PostgreSQL
* 📱 Diseño responsive
* 🧪 Pruebas básicas del frontend

---

## 🏗️ Arquitectura

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

El proyecto está dividido en dos repositorios:

* **Frontend:** `saakiri-tours-app`
* **Backend:** `saakiri-tours-backend`

---

## 🧰 Tecnologías utilizadas

### 🎨 Frontend

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
</p>

### ⚙️ Backend & Base de datos

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</p>

### 🧩 Librerías & Testing

<p align="center">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" />
  <img src="https://img.shields.io/badge/SweetAlert2-FF6B6B?style=for-the-badge&logo=sweetalert2&logoColor=white" alt="SweetAlert2" />
  <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest" />
  <img src="https://img.shields.io/badge/React_Testing_Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white" alt="React Testing Library" />
</p>

---

## 🚀 Instalación

### Frontend

```bash
git clone https://github.com/StarkLInk23/saakiri-tours-app.git
cd saakiri-tours-app
npm install
npm run dev
```

### Backend

```bash
git clone https://github.com/StarkLInk23/saakiri-tours-backend.git
cd saakiri-tours-backend
npm install
npm run dev
```

> El backend requiere las variables de entorno necesarias para la conexión con PostgreSQL y la configuración de autenticación.

---

## 📌 Estado

🟡 **En desarrollo**

El proyecto se encuentra en proceso de integración y preparación para producción, incorporando progresivamente backend propio, PostgreSQL, autenticación, validaciones, testing y despliegue.

---

<p align="center">
  🌿 <strong>Sáakiri Tours & Travel</strong><br>
  Puerto Maldonado, Madre de Dios — Perú · 2026
</p>
