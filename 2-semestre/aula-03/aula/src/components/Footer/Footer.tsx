const Footer = () => {
    return (
        <>
        <footer>
                <div className="content">
                    <div className="content-footer">
                        <div className="address">
                            <h1>Contato</h1>
                            <p>
                                <i className="fa fa-envelope-o"></i> frontmusics@frontmusics.com.br
                            </p>
                        </div>
                        <div className="address">
                            <h1>Endereço</h1>
                            <p>
                                <i className="fa fa-map-marker"></i>Avenida do Sobe e Desce 1234
                                <br />
                                <i className="fa fa-globe"></i>São Paulo - SP
                                <br />
                                <i className="fa fa-phone"></i>11-1234-5678
                            </p>
                        </div>
                        <div className="address">
                            <h1>Mapa do Site</h1>
                            <ul>
                                <li ><i className="fa fa-music"></i> <a href="#">Home</a></li>
                                <li><i className="fa fa-music"></i> <a href="#">Bandas</a></li>
                                <li><i className="fa fa-music"></i> <a href="#"> Discos</a></li>
                                <li><i className="fa fa-music"></i> <a href="#">Estilos Musicais</a></li>
                            </ul>
                        </div>
                        <div className="redes-sociais">
                            <h1>Redes Sociais</h1>
                            <img src="img/redes-sociais.png" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;