const Header = () => {
  return (
    <>
      <nav className="fixed w-full z-50 glass-effect bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <i data-lucide="box" className="w-8 h-8 text-purple-600"></i>

              <span className="text-xl font-bold gradient-text">
                Miniature World
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Início
              </a>

              <a
                href="#colecoes"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Coleções
              </a>
              <a
                href="#categorias"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Categorias
              </a>
              <a
                href="#sobre"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Sobre
              </a>

              <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition flex items-center gap-2">
                <i data-lucide="shopping-cart" className="w-4 h-4"></i>
                <span>Carrinho</span>
                <span
                  id="cart-count"
                  className="bg-white text-purple-600 text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  0
                </span>
              </button>
            </div>
          </div>

          <button id="mobile-menu-btn" className="md:hidden text-gray-700">
            <i data-lucide="menu" className="w-6 h-6"></i>
          </button>
        </div>

        <div id="mobile-menu" className="hidden md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a href="#home" className="block py-2 text-gray-700">
              Início
            </a>
            <a href="#colecoes" className="block py-2 text-gray-700">
              Coleções
            </a>
            <a href="#categorias" className="block py-2 text-gray-700">
              Categorias
            </a>
            <a href="#sobre" className="block py-2 text-gray-700">
              Sobre
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
