import { Link } from "react-router-dom";

import Card from "../../components/Card/Card";

const Home = () => {
  const produtos = [
    {
      id: 1,
      nome: "Produto Garrafa Termica",
      descricao: "Deixe seu café quentinho",
    },
    {
      id: 2,
      nome: "Produto 2",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quidem deserunt, quo soluta animi nobis ducimus possimus? Quia temporibus consequuntur, obcaecati maxime recusandae enim sequi nulla a, fuga, totam tempora.",
    },
    {
      id: 3,
      nome: "Produto 3",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quidem deserunt, quo soluta animi nobis ducimus possimus? Quia temporibus consequuntur, obcaecati maxime recusandae enim sequi nulla a, fuga, totam tempora.",
    },
    {
      id: 4,
      nome: "Produto 4",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quidem deserunt, quo soluta animi nobis ducimus possimus? Quia temporibus consequuntur, obcaecati maxime recusandae enim sequi nulla a, fuga, totam tempora.",
    },
    {
      id: 5,
      nome: "Produto 5",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quidem deserunt, quo soluta animi nobis ducimus possimus? Quia temporibus consequuntur, obcaecati maxime recusandae enim sequi nulla a, fuga, totam tempora.",
    },
    {
      id: 6,
      nome: "Produto Panela de Pressão",
      descricao: "Panela de pressão anti-aderente",
    },
  ];

  return (
    <>
      <main className="flex-1 container mx-auto p-6">
        <div className="grid grid-cols-3 gap-6">



          {produtos.map((produto) => (
            <Card key={produto.id}>
              <h2 className="text-2xl font-semibold mb-2">Produto {produto.id}</h2>
              <p>{produto.descricao}</p>
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
