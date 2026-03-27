const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="pt-24 pb-12 lg:pt-32 lg:pb-24 bg-gradient-to-br from-purple-50 via-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                <i data-lucide="sparkles" className="w-4 h-4 mr-2"></i>
                Nova Coleção 2026
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Descubra o Mundo das{" "}
                <span className="gradient-text">Miniaturas</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Explore nossa coleção exclusiva de miniaturas meticulosamente
                criadas. Desde carros em escala até casas de bonecas detalhadas,
                encontre a peça perfeita para sua coleção.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition transform hover:scale-105 flex items-center gap-2">
                  Explorar Coleções
                  <i data-lucide="arrow-right" className="w-5 h-5"></i>
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition">
                  Saiba Mais
                </button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900">2,000+</div>
                  <div className="text-sm text-gray-600">Miniaturas</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Coleções</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">15k+</div>
                  <div className="text-sm text-gray-600">Clientes</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl transform rotate-3 opacity-20"></div>
              <img
                src="http://static.photos/craft/640x360/123"
                alt="Miniaturas em Destaque"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i
                      data-lucide="star"
                      className="w-6 h-6 text-purple-600 fill-current"
                    ></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Mais Vendido
                    </div>
                    <div className="text-sm text-gray-600">Coleção Vintage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
