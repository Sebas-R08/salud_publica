# 💉 Sistema de Salud Pública

Aplicativo web desarrollado en **Node.js + Express + Sequelize + MySQL** para la gestión de información relacionada con **vacunación, pacientes, lotes y registros médicos**.  
Este proyecto fue desarrollado como parte de la **Actividad Evaluativa del Eje 3** de la asignatura *Gestión de Bases de Datos*.

---

## 📋 Descripción general

El sistema permite registrar y administrar:
- 👤 **Pacientes**: información personal básica.
- 💊 **Vacunas**: tipo, laboratorio y dosis.
- 📦 **Lotes**: código, proveedor y fecha de recepción.
- 🩺 **Registros de vacunación**: relación entre pacientes, vacunas, lotes y usuarios.

Además, se aplican los **principios del modelo ACID** mediante el uso de **transacciones en Sequelize**, garantizando la integridad y consistencia de los datos.

---

## ⚙️ Tecnologías utilizadas

| Componente | Tecnología |
|-------------|-------------|
| **Backend** | Node.js + Express |
| **ORM** | Sequelize |
| **Base de datos** | MySQL / MariaDB |
| **Frontend** | EJS + Bootstrap 5 |
| **Alertas** | SweetAlert2 |
| **Servidor** | Express integrado |

---

## 🧩 Estructura del proyecto

```
salud_publica/
│
├── controllers/         # Controladores para cada entidad (lógica CRUD)
├── models/              # Modelos Sequelize (tablas y relaciones)
├── routes/              # Rutas Express
├── views/               # Vistas EJS (interfaces con Bootstrap)
│   ├── pacientes/
│   ├── vacunas/
│   ├── lotes/
│   ├── registros/
│   └── layout.ejs
│
├── public/              # Archivos estáticos (CSS, JS, imágenes)
├── db.js                # Configuración de conexión a la base de datos
├── index.js             # Punto de entrada principal del servidor
└── README.md            # Documentación del proyecto
```

---

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Sebas-R08/salud_publica.git
cd salud_publica
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar la base de datos
Crea una base de datos llamada `salud_publica` en MySQL y actualiza los parámetros en `models/db.js`:
```js
const sequelize = new Sequelize('salud_publica', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
```

### 4️⃣ Ejecutar el servidor
```bash
node index.js
```

El sistema estará disponible en:
👉 **http://localhost:3000**

---

## 🔐 Modelo ACID implementado

El sistema aplica una **transacción atómica** cuando se registra una vacunación:

1. Se valida que el paciente, vacuna y lote existan.  
2. Se crea el registro de vacunación.  
3. Si alguna operación falla, **se revierte toda la transacción (`rollback`)**.  
4. Si todo es correcto, **se confirma (`commit`)**.

Esto garantiza:
- **Atomicidad:** ambas operaciones se ejecutan o ninguna.  
- **Consistencia:** evita duplicados y datos corruptos.  
- **Aislamiento:** las transacciones concurrentes no interfieren.  
- **Durabilidad:** los cambios confirmados persisten incluso tras fallos.

---

## 🧠 Funcionalidades principales

| Módulo | Descripción |
|---------|-------------|
| 👤 **Pacientes** | Crear, listar, editar y eliminar registros. |
| 💉 **Vacunas** | Administración de vacunas y laboratorios. |
| 📦 **Lotes** | Control de recepción y proveedor. |
| 🩺 **Registros de Vacunación** | Vincula paciente, vacuna, lote y usuario. |
| 🔐 **Transacciones ACID** | Implementadas en el registro de vacunación. |

---


## 🧑‍💻 Autor

**Sebastian Restrepo Jimenez - Johan Puentes**  
Proyecto académico — *Fundación Universitaria del Área Andina*  
📅 Año: 2025  
📚 Asignatura: *Gestión de Bases de Datos (Eje 3)*

---

## 📄 Licencia

Este proyecto es de uso educativo y académico.  
No está destinado a uso comercial.  
Distribuido bajo licencia **MIT**.
