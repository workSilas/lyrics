import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Final from "./pages/Final";

export default function Rotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/final" element={<Final />} />
        </Routes>
        </BrowserRouter>
    );
}