import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";

export default function Rotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio />} />
        </Routes>
        </BrowserRouter>
    );
}