const About = () => {
  return (
    <>
      <section
        id="sobre"
        className="py-16 bg-gradient-to-br from-purple-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="http://static.photos/craft/640x360/456"
                alt="Sobre Nós"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm opacity-90">Anos de Experiência</div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Paixão por Miniaturas
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Somos uma equipe de colecionadores apaixonados que entende a
                importância de cada detalhe. Nossa missão é conectar você com as
                miniaturas mais exclusivas do mundo, desde peças artesanais até
                edições limitadas de fabricantes renomados.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i data-lucide="check" className="w-4 h-4 text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Curadoria Especializada</h4>
                    <p className="text-sm text-gray-600">
                      Cada peça é selecionada por especialistas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i data-lucide="check" className="w-4 h-4 text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Edições Limitadas</h4>
                    <p className="text-sm text-gray-600">
                      Acesso exclusivo a miniaturas raras
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i data-lucide="check" className="w-4 h-4 text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Comunidade Ativa</h4>
                    <p className="text-sm text-gray-600">
                      Participe de eventos e workshops
                    </p>
                  </div>
                </div>
              </div>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
                Conheça Nossa História
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
