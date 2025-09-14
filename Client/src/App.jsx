import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { ClientesPage } from "./pages/ClientesPage";
import { ClientesFormPage } from "./pages/ClientesFormPage";
import { Navegacion } from "./components/Navegacion";
import { Toaster } from "react-hot-toast";
import { ProveedoresPage } from "./pages/ProveedoresPage";
import { ProveedoresFormPage } from "./pages/ProveedoresFormPage";
import { ProductosPage } from "./pages/ProductosPage";
import { ProductosFormPage } from "./pages/ProductosFormPage";
import { VentasFormPage } from "./pages/VentasFormPage";
import { VentasPage } from "./pages/VentasPage";
import { InventarioPage } from "./pages/InventarioPage";
import { ListaMovimientos } from "./components/MovimientosLista";
import { MenuPrincipal } from "./components/CompInicio";

function LayoutConNavegacion() {
  return (
    <div className="container mx-auto">
      <Navegacion />
      <Outlet /> {/* Aquí se renderizan las rutas hijas */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        {/* Ruta raíz sin navegación */}
        <Route path="/" element={<MenuPrincipal />} />

        {/* Todas las demás rutas con navegación */}
        <Route element={<LayoutConNavegacion />}>
          <Route path="/proveedores" element={<ProveedoresPage />} />
          <Route path="/proveedores-create" element={<ProveedoresFormPage />} />
          <Route path="/proveedores/:id" element={<ProveedoresFormPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/clientes-create" element={<ClientesFormPage />} />
          <Route path="/clientes/:id" element={<ClientesFormPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/productos-create" element={<ProductosFormPage />} />
          <Route path="/productos/:id" element={<ProductosFormPage />} />
          <Route path="/ventas" element={<VentasPage />} />
          <Route path="/ventas-create" element={<VentasFormPage />} />
          <Route path="/ventas/:id" element={<VentasFormPage />} />
          <Route path="/inventario" element={<InventarioPage />} />
          <Route path="/movimientos-lista" element={<ListaMovimientos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;