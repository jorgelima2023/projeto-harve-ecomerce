import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Home } from "../componentes/Home";
import { Login } from "../componentes/Login";
import { Carrinho } from "../pages/Carrinho";
//import { Produto } from "../componentes/ListaProdutos/Produto";

// rotas
// login, home
//   Adicionar componente Carrinho nas rotas

export function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<ListaProdutos />} />
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>

        </BrowserRouter>
    );
}