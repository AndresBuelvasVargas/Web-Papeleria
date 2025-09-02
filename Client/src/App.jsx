import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ClientesPage } from "./pages/ClientesPage";
import { ClientesFormPage } from "./pages/ClientesFormPage";
import { Navegacion } from "./components/Navegacion";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navegacion />
        <Toaster />
        <Routes>
          <Route path="/" element={<Navigate to="/clientes" />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/clientes-create" element={<ClientesFormPage />} />
          <Route path="/clientes/:id" element={<ClientesFormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
