import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ClientesPage } from "./pages/ClientesPage";
import { ClientesFormPage } from "./pages/ClientesFormPage";
import { Navegacion } from "./components/Navegacion";
import { Toaster } from "react-hot-toast";
import { ProveedoresPage } from "./pages/ProveedoresPage";
import { ProveedoresFormPage } from "./pages/ProveedoresFormPage";
import { ProductosPage } from "./pages/ProductosPage";
import { ProductosFormPage } from "./pages/ProductosFormPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navegacion />
        <Toaster />
        <Routes>
          {/*<Route path="/" element={<Navigate to="/clientes" />} />*/}
          <Route path="/proveedores" element={<ProveedoresPage />} />
          <Route path="/proveedores-create" element={<ProveedoresFormPage />} />
          <Route path="/proveedores/:id" element={<ProveedoresFormPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/clientes-create" element={<ClientesFormPage />} />
          <Route path="/clientes/:id" element={<ClientesFormPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/productos-create" element={<ProductosFormPage />} />
          <Route path="/productos/:id" element={<ProductosFormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;