const Newsletter = () => {
  return (
    <>
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Receba Novidades Exclusivas
          </h2>
          <p className="text-gray-400 mb-8">
            Cadastre-se para receber alertas de novas coleções e promoções
            especiais
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition whitespace-nowrap"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Newsletter;
