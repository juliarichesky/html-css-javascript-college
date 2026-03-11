import { Link } from "react-router-dom";
import produtos from "../../data/produtos.json";

import Card from "../../components/Card/Card";

const Home = () => {

  return (
    <>
      <main className="flex-1 container mx-auto p-6">
        <div className="grid grid-cols-3 gap-6">
          {produtos.map((produto) => (
            <Card key={produto.id}>
              <h2 className="text-2xl font-semibold mb-2">
                {produto.nome}
              </h2>
              <p>
                {produto.descricao.substring(0, 99) + "..."}
                <Link to={`/produto/${produto.id}`} className="text-blue-500">
                  Saiba mais
                </Link>
              </p>
              <Link
                to={`/produto/${produto.id}`}
                className="bg-green-500 text-white text-center px-4 py-2 rounded mt-6 inline-block"
              >
                Clique aqui!
              </Link>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
};
export default Home;
