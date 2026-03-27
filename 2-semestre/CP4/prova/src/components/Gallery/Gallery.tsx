const Gallery = () => {
  return (
    <>
      <section id="colecoes" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Nossas Coleções
              </h2>
              <p className="text-gray-600 mt-2">
                Miniaturas em escala realista com detalhes impressionantes
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Mostrando
              <span
                id="showing-count"
                className="font-semibold text-purple-600"
              >
                12
              </span>
              de <span id="total-count">12</span> itens
            </div>
          </div>

          <div
            id="gallery-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          ></div>

          <div className="mt-12 text-center">
            <button
              id="load-more"
              className="bg-white border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition"
            >
              Carregar Mais
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;
