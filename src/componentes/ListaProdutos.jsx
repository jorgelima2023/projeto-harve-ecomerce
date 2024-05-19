import { useBootstrapBreakpoints } from "react-bootstrap";

// import { Col, Row } from "react-bootstrap";

// function ListaProdutos () {
//     return ( 
//         <>
//         <Row className="justify-content-md-center">
//             <Col md={2}>
//                 <h1>Lista Produtos</h1>
//             </Col>
//         </Row>
//         </>
//     );
// }
// export {ListaProdutos};
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../_service/api";
import { CardProduto } from "./CardProduto";
import { Home } from "./Home";

function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        buscarProdutos();
    }, []);

    async function buscarProdutos() {
        try {
            // const response = await api.get("/listarprodutos");
            // setProdutos(response.data);
            const response = await api.get("/productlistbyremark/home");
            setProdutos(response.data);
        } catch (error) {
            mensagemDeErro("Erro para buscar produtos");
        }
    }

    function mensagemDeErro(mensagem = "Mensagem de Erro") {
        toast.error(mensagem, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseonover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <>
            <Row className="justify-content-md-center">
                {/* <Col md={2}> */}
                <Col md={3}> 
                    <h1>Lista Produtos</h1>
                </Col>
            </Row>
            <Row>
                {produtos.map((produto, index) => {
                    return (
                        <Col className="m-2" key={index}>
                            <CardProduto
                                idProduto={produto.id}
                                nome={produto.title}
                                preco={produto.price}
                                linkImagem={produto.image}
                                descricao={produto.category}
                            />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}
export { ListaProdutos };