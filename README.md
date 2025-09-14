# 📝 Sistema de Gestión de Papelería

Aplicación web para gestionar clientes, proveedores, productos, ventas e inventario de una papelería.  
Desarrollada con **React + Vite** en el frontend y **Django REST Framework + MySQL** en el backend.

---

## 🚀 Funcionalidades

- 📦 **Inventario**  
  - Registrar entradas y salidas de stock.  
  - Visualizar movimientos (entradas en verde, salidas en rojo).  

- 👥 **Clientes y Proveedores**  
  - CRUD completo de clientes.  
  - CRUD de proveedores, seleccionables en entradas de stock.  

- 🛒 **Ventas**  
  - Registro de ventas con detalle de productos.  
  - Visualización de cliente y productos en tarjetas de venta.  

- 📊 **Reportes**  
  - Lista de movimientos en orden descendente.  
  - Dashboard principal estilo menú con accesos rápidos.  

---

## 🖼️ Interfaz

### Menú principal
Pantalla inicial con accesos a cada módulo.  
![Menu Principal](docs/images/menu_principal.png)

### Lista de ventas
Tarjetas con cliente, fecha y total de la venta.  
![Ventas](docs/images/ventas.png)

### Movimientos de inventario
Entradas (verde) y salidas (rojo) ordenadas de forma descendente.  
![Movimientos](docs/images/movimientos.png)

---

## 🛠️ Tecnologías

- **Frontend:**  
  - React + Vite  
  - TailwindCSS  
  - React Router DOM  
  - Axios  
  - React Hot Toast  

- **Backend:**  
  - Django  
  - Django REST Framework
