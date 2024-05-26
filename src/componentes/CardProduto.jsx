import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { CarrinhoContext } from "../hooks/CarrinhoContext";
import { useNavigate } from "react-router-dom";

// Criando funcṍes para ser usado “globamente”
//   Usando useContext do carrinho
//   adicionarCarrinho()  Usando a função importada do useContext
//   adicionarNoCarrinho  Usando a função para adicionar produto

// buscar dados do localstorage
//     buscarProdutosLocalStorage()

// e linkado no componente carrinho

// e cardproduto  validar se usuario esta logado no sistema antes de adicionar no carrinho:
//    let navigate
//    const token = localStorage.getItem("token");
//    if(!token){
//      navigate("/login");
//    }

function CardProduto({ idProduto, nome, preco, descricao, linkImagem }) {
  const { adicionarCarrinho } = useContext(CarrinhoContext);
  let navigate = useNavigate();

  function adicionarNoCarrinho(
    idProduto,
    nomeProduto,
    precoProduto,
    descricaoProduto,
    linkImagemProduto
  ) {
    const token = localStorage.getItem("token");
    if(!token){
      navigate("/login");
    }

    adicionarCarrinho({
      idProduto,
      nomeProduto,
      descricaoProduto,
      precoProduto,
      linkImagemProduto,
    });
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={linkImagem} />
      <Card.Body>
        <Card.Title>
          {nome} - R$: {preco}
        </Card.Title>
        <Card.Text>{descricao}</Card.Text>
        <Button
          variant="primary"
          onClick={() =>
            adicionarNoCarrinho(idProduto, nome, preco, descricao, linkImagem)
          }
        >
          ADICIONAR
        </Button>
      </Card.Body>
    </Card>
  );
}

export { CardProduto };