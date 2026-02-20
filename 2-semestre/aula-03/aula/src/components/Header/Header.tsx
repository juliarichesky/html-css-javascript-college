const Header = () => {
    return(
        <>
            <header>
                <div className="content">
                    <div className="header header_esq">
                        <div className="logo"><a href="index.html"><span className="titulo">FRONT</span><span>Musics</span></a></div>
                    </div>
                    <div className="header header_dir">
                        <span>Bem Vindo, ( <a href="perfil.html">Login</a> )</span>
                    </div>
                    <nav className="hamburger-menu">
                        <input type="checkbox" id="menu_toggle" />
                        <label className="menu_btn" htmlFor="menu_toggle"><span></span></label>
                        <ul className="menu_box">
                            <li><a className="menu_item" href="perfil.html">Perfil</a></li>
                            <li><a className="menu_item" href="#">Classic Rock</a></li>
                            <li><a className="menu_item" href="#">Grunge</a></li>
                            <li><a className="menu_item" href="#">Hard Rock</a></li>
                            <li><a className="menu_item" href="#">Pós-Punk</a></li>
                            <li><a className="menu_item" href="#">Punk Rock</a></li>
                        </ul>
                    </nav>
                </div>
                <nav id="menuPrincipal">

                    <div className="content">
                        <ul id="menuPrincipalItens">
                            <li><a href="#">Classic Rock</a></li>
                            <li><a href="#">Grunge</a></li>
                            <li><a href="#">Hard Rock</a></li>
                            <li><a href="#">Pós-Punk</a></li>
                            <li><a href="#" className="last">Punk Rock</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;