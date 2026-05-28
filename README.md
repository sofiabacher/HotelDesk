# 🏨 HotelDesk - Sistema de Gestión Hotelera

HotelDesk es un sistema full stack de gestión hotelera diseñado para la administración de usuarios, reservas y operaciones internas.
El proyecto cuenta con autenticación segura, control de acceso mediante JWT, envío de correos automáticos y una interfaz moderna para la administración del sistema.

## 🚀 Demo en producción

 👉 https://hotel-desk-ten.vercel.app

## 🔑 Usuario demo

Para facilitar la evaluación del sistema sin necesidad de registrarse ni depender de correos de activación utilizar las siguientes credenciales para inciar sesión:

**Email:** demo@hoteldesk.com  
**Password:** 123456

## 🧰 Tecnologías utilizadas

- Node.js
- Express
- MySQL
- Sequelize (ORM)
- API REST
- Arquitectura MVC
- React

## 📂 Funcionalidades principales

- Gestión de usuarios
- Gestión de reservas
- Gestión de habitaciones
- Operaciones CRUD
- Autenticación y control de acceso mediante JWT
- Envío de correos automáticos
- Interfaz de usuario para la gestión del sistema

## 🔐 Variables de entorno

Para ejecutar el proyecto localmente, es necesario crear un archivo `.env` en la raíz del backend con las siguientes variables:

```
NODE_ENV=development
PORT=3000

DB_NAME=hoteldesk
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
DB_DIALECT=mysql
DB_FORCE_SYNC=false

BCRYPT_SALT_ROUNDS=10
JWT_SECRET=tu_clave_secreta
JWT_ACTIVATION_SECRET=otra_clave_secreta
JWT_EXPIRES_IN=24h
JWT_EMAIL_EXPIRES_IN=1h

RESEND_API_KEY=tu_api_key_de_resend
EMAIL_FROM=onboarding@resend.dev

FRONTEND_URL=http://localhost:5173
```

Asegurate de configurar estos valores según tu entorno local.

En el frontend crear un archivo `.env` con:
```
VITE_API_URL=http://localhost:3000
```

## ▶️ Cómo ejecutar el proyecto

### Backend

1. Clonar el repositorio
2. Ir a la carpeta del backend  
3. Instalar dependencias: npm install
4. Crear el archivo `.env` con las variables indicadas  
5. Ejecutar el servidor: npm start
   
### Frontend

1. Ir a la carpeta del frontend  
2. Instalar dependencias: npm install
3. Crear el archivo `.env` con VITE_API_URL
4. Ejecutar la aplicación: npm run dev

## 🌐 Estado del proyecto

- Backend desplegado en Render
- Frontend desplegado en Vercel
- Base de datos desplegada en Railway
- Sistema de correos configurado con Resend
- Usuario demo disponible para evaluación
- Proyecto académico funcional, desplegado en producción y listo para demostración, con posibilidad de futuras mejoras.

## ⚠️ Nota

Este proyecto fue desarrollado con fines académicos, aplicando buenas prácticas de desarrollo full stack, arquitectura por capas y despliegue en entornos de producción.
