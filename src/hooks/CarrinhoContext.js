import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CarrinhoContext = createContext();

// chamada contexto provider app js

// Criando funcṍes para ser usado “globalmente” 
//    useState para gerenciar os produto do carrinho
//    function salvarprodutos Salvar no localStorage
//    adicionar carrinho Adicionar no items

// return variaveis funcoes uso global
//    listaProdutosCarrinho , adicionarCarrinho

//   cardproduto funcoes para ser usado globalmente

// Adicionando função para remover produto do carrinho:
//    function removerProduto() Utilizando filter() para filtrar dados para tirar da lista de produtos do carrinho 
//    return removerproduto

// Validar se o produto já está no carrinho:
/*
     const qtdProdutosNoCarrinho = listaProdutosCarrinho.filter(
      (item) => item.idProduto == produto.idProduto
    );
    if (qtdProdutosNoCarrinho.length > 0) {
      return toast.error("Produto já esta no seu carrinho", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
*/

// e cardproduto  validar se usuario esta logado no sistema antes de adicionar no carrinho

function CarrinhoContextProvider({ children }) {
  const [listaProdutosCarrinho, setListaProdutosCarrinho] = useState([]);

  useEffect(() => {
    buscarProdutosLocaStorage();
  }, []);
  function buscarProdutosLocaStorage() {
    const produtosLocalStorage = localStorage.getItem("carrinho_produtos");
    //console.log('buscar pdtos local storage ' + produtosLocalStorage);
    if (produtosLocalStorage) {
      const produtosProdutos = JSON.parse(produtosLocalStorage);
      setListaProdutosCarrinho(produtosProdutos);
    }
  }

  function salvarProdutos(lista) {
    setListaProdutosCarrinho(lista);
    const listaDeProdutos = JSON.stringify(lista);
    localStorage.setItem("carrinho_produtos", listaDeProdutos);
    //console.log('salvar pdto=' + listaDeProdutos);
  }

  const adicionarCarrinho = async (produto) => {
    const qtdProdutosNoCarrinho = listaProdutosCarrinho.filter(
      (item) => item.idProduto == produto.idProduto
    );
    if (qtdProdutosNoCarrinho.length > 0) {
      return toast.error("Produto já esta no seu carrinho", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    const listaProdutosAtualizado = [produto, ...listaProdutosCarrinho];
    salvarProdutos(listaProdutosAtualizado);
  };
  function removerProduto(idProduto) {
    const listaProdutosAtualizado = listaProdutosCarrinho.filter(
      (item) => item.idProduto != idProduto
    );

    salvarProdutos(listaProdutosAtualizado);
  }

  return (
    <CarrinhoContext.Provider
      value={{ listaProdutosCarrinho, adicionarCarrinho, removerProduto }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export default CarrinhoContextProvider;