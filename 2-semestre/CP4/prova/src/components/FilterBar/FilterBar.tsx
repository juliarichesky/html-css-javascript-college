const FilterBar = () => {
  return (
    <>
      <section className="sticky top-16 z-40 bg-white border-y shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2" id="filter-buttons">
              <button
                className="filter-btn active px-4 py-2 rounded-full border border-gray-300 text-sm font-medium transition"
                data-filter="all"
              >
                Todos
              </button>
              <button
                className="filter-btn px-4 py-2 rounded-full border border-gray-300 text-sm font-medium transition"
                data-filter="veiculos"
              >
                Veículos
              </button>
              <button
                className="filter-btn px-4 py-2 rounded-full border border-gray-300 text-sm font-medium transition"
                data-filter="casas"
              >
                Casas de Boneca
              </button>
              <button
                className="filter-btn px-4 py-2 rounded-full border border-gray-300 text-sm font-medium transition"
                data-filter="figuras"
              >
                Figuras
              </button>
              <button
                className="filter-btn px-4 py-2 rounded-full border border-gray-300 text-sm font-medium transition"
                data-filter="natureza"
              >
                Natureza
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <i
                  data-lucide="search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                ></i>
                <input
                  type="text"
                  id="search-input"
                  placeholder="Buscar miniaturas..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
                />
              </div>
              <select
                id="sort-select"
                className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="newest">Mais Recentes</option>
                <option value="price-low">Menor Preço</option>
                <option value="price-high">Maior Preço</option>
                <option value="popular">Mais Populares</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FilterBar;
