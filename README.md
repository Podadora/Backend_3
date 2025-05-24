# 🧪 Entrega: Mocking y Logger con Winston

Este proyecto implementa generación de datos simulados (*mocking*) y un sistema de logging profesional utilizando Winston, aplicando buenas prácticas de entorno (.env) y separación de responsabilidades.

---

## ⚙️ Funcionalidades de esta entrega

### ✅ Mocking de datos (/api/mocks/:users/:products)
- Genera usuarios y productos falsos utilizando Faker.js.
- Encripta la contraseña de cada usuario generado.
- Inserta los datos en MongoDB.
- Permite definir la cantidad de usuarios y productos a generar desde la URL.

Ejemplo:
POST http://localhost:8080/api/mocks/5/10  
📌 Este ejemplo crea 5 usuarios y 10 productos.

---

### ✅ Logging con Winston
- Implementación de winston como logger centralizado.
- Soporte para niveles de log:
  - http: para registrar todas las solicitudes entrantes.
  - error: para registrar errores en consola y archivo.
- Diferencia entre entornos:
  - dev: logs de colores en consola.
  - prod: logs en JSON + guarda errores en errors.log.

---

## 🧪 Cómo probar

1. Mocking
   - Ejecutá en Postman:
     POST /api/mocks/5/10
   - Verificá que se inserten datos en MongoDB.
   - (Opcional) Agregá una ruta GET /api/mocks/users para listar los usuarios.

2. Logger
   - Probá cualquier ruta (GET, POST, etc.)
   - En dev: se imprime en consola con colores.
   - En prod: se guarda log de errores en errors.log.

---

## 📁 Variables de entorno

Incluye un archivo `.env.example` para replicar el entorno de desarrollo:

PORT=8080  
NODE_ENV=development  
MONGO_URI=mongodb://localhost:27017/ecommerce  
JWT_SECRET=your_secret_key  

🔐 `.env` real está ignorado por seguridad.

---

## 📂 Estructura de carpetas relevantes

├── mocks/  
│   ├── mocks.router.js         → Ruta principal para generar mocks  
│   └── mocks.generator.js      → Generadores con Faker.js  
├── middlewares/  
│   └── logger.js               → Middleware con Winston  
├── models/  
│   ├── user.js                 → Modelo de usuario  
│   └── product.js              → Modelo de producto  
├── routes/  
│   └── sessions.js             → Rutas de autenticación  
├── .env.example                → Variables de entorno modelo  
├── errors.log                  → Archivo de errores generado por Winston  
├── app.js                      → Archivo principal de la app  

---

## ✅ Estado de los requisitos

| Requisito                                                          | Estado |
|--------------------------------------------------------------------|--------|
| Generación de datos mock en MongoDB                                | ✅     |
| Encriptación de contraseñas mock                                   | ✅     |
| Logger con Winston (niveles HTTP y ERROR)                          | ✅     |
| Separación de entornos con .env y .env.example                     | ✅     |
| Archivo .env ignorado en .gitignore                                | ✅     |
| Logging en consola y archivo (errors.log)                          | ✅     |
