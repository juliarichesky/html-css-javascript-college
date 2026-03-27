const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <i data-lucide="box" className="w-6 h-6 text-purple-600"></i>
                <span className="text-lg font-bold">Miniature World</span>
              </div>
              <p className="text-sm text-gray-600">
                Sua loja especializada em miniaturas de alta qualidade desde
                2014.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Veículos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Casas de Boneca
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Figuras de Ação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Natureza
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ajuda</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Envio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Devoluções
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
                >
                  <i data-lucide="instagram" className="w-5 h-5"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
                >
                  <i data-lucide="facebook" className="w-5 h-5"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
                >
                  <i data-lucide="youtube" className="w-5 h-5"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; 2026 Miniature World. Todos os direitos reservados. || Julia Spanopoulos - RM: 566754 || Julia Guimarães - RM: 568275</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-purple-600">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-purple-600">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
