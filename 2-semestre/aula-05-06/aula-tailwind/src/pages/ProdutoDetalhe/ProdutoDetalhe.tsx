import { useParams } from "react-router-dom";
import produtos from "../../data/produtos.json";

const ProdutoDetalhe = () => {

  const { id } = useParams(); //Aqui pegamos o id do produto que foi passado na URL

  //BUSCA POR PRODUTO
  const produto = produtos.find((p) => p.id === Number(id)); //Aqui buscamos o produto com o id correspondente

  //SE NÃO ENCONTRADO, MOSTRA MENSAGEM DE ERRO
  if (!produto) {
    return (
      <>
        <main className="flex-1 container mx-auto p-6">
          <div className="grid grid-cols-1 gap-6">
            <h2 className="text-2xl font-semibold mb-2">
              Produto não encontrado.
            </h2>
          </div>
        </main>
      </>
    );
  }

  //SE TIVER ENCONTRADO, MOSTRA OS DETALHES DO PRODUTO
  else {
    return (
      <>
        <main className="flex-1 container mx-auto p-6">
          <div className="grid grid-cols-1 gap-6">
            <h2 className="text-2xl font-semibold mb-2">
              {produto.nome}
            </h2>
            <p className="font-light text-2xl">{produto.descricao}</p>
          </div>
        </main>
      </>
    );
  }
};
export default ProdutoDetalhe;
