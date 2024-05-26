import { useContext, useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { CarrinhoContext } from "../hooks/CarrinhoContext";
import { MeunavBar } from "../componentes/MeunavBar";
import "../assets/css/divListaProdutosCarrinho.css";

// Adicionar Table no compoente
//   e Adicionar componente Carrinho nas rotas (index jsx )

// Buscando dados para renderizar na tela
//     listaProdutosCarrinho lista de produtos do context do carrinho
//     const [produtosCarrinho, setProdutosCarrinho] = useState([]);  gerenciar a lista

// useEffect(() alterar dados quando atualizar a lista

// Renderizar dados na tela : 
//    produtoscarrinho.map listando os produtos
//    removerproduto() utilizando a funcao para remover do carrinho

//  e gerenciar login gerenciar o carrinho de compra....

function Carrinho() {
  const { listaProdutosCarrinho, removerProduto } = useContext(CarrinhoContext);
  const [produtosCarrinho, setProdutosCarrinho] = useState([]);

  useEffect(() => {
    console.log("BUSCAR CAAAR", listaProdutosCarrinho);
    if (listaProdutosCarrinho) {
      setProdutosCarrinho(listaProdutosCarrinho);
    }
  }, [listaProdutosCarrinho]);

  return (
    <>
        <div className="divListaProdutosCarrinho">
            <MeunavBar/>
        </div>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h1 className="tituloListaProdutosCarrinho">Lista de produtos carrinho </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Produto</th>
                  <th>Descricao</th>
                  <th>Preço</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {produtosCarrinho.map((produtoCarrinho, index) => {
                  return (
                  
                    <tr>
                      <td> {produtoCarrinho.idProduto}</td>
                      <td> {produtoCarrinho.nomeProduto}</td>
                      <td> {produtoCarrinho.descricaoProduto}</td>
                      <td> {produtoCarrinho.precoProduto} R$</td>
                      <td>
                        <Button
                          onClick={() =>
                            removerProduto(produtoCarrinho.idProduto)
                          }
                          variant="danger"
                        >
                          Remover
                        </Button>
                      </td>
                    </tr>
                    
                   
                  );
                })}
                
              </tbody>
            </Table>
          </Col>
        </Row>
    </>
  );
}

export { Carrinho };
