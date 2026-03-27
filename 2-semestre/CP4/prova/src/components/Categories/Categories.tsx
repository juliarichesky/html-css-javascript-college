import CardsCategories from "../CardsCategories/CardsCategories";
import categories from "../../data/categories.json";

const Categories = () => {
  return (
    <>
      <section id="categorias" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Categorias Populares
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Escolha entre nossas diversas categorias de miniaturas
              cuidadosamente selecionadas
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CardsCategories key={category.id}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl aspect-square mb-3">
                    <img
                      src={category.img}
                      alt={category.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                      <i
                        data-lucide={category.icon}
                        className="w-8 h-8 text-white"
                      ></i>
                    </div>
                  </div>
                  <h3 className="font-semibold text-center">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500 text-center">
                    {category.info}
                  </p>
                </div>
              </CardsCategories>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Categories;
