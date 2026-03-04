import { useParams } from "react-router-dom";

const ProdutoDetalhe = () => {
    const {id} = useParams(); //Aqui pegamos o id do produto que foi passado na URL
  return (
    <>
      <main className="flex-1 container mx-auto p-6">
        <div className="grid grid-cols-1 gap-6">
          <h2 className="text-2xl font-semibold mb-2">Produto {id}</h2>
        </div>
      </main>
    </>
  );
};
export default ProdutoDetalhe;
