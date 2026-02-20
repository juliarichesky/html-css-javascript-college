
const Home = () =>{
    return(
        <>
            <main>
                <div id="imageContainer">
                    <div id="carousel">
                        <ul>
                            <li>
                                <picture>
                                    <source media="(max-width: 479.98px)" srcSet="img/slider01_320.png" />
                                    <source media="(max-width: 599.98px)" srcSet="img/slider01_480.png" />
                                    <source media="(max-width: 991.98px)" srcSet="img/slider01_600.png" />
                                    <img src="img/slider01.png" />
                                </picture>
                            </li>
                            <li>
                                <picture>
                                    <source media="(max-width: 479.98px)" srcSet="img/slider02_320.png" />
                                    <source media="(max-width: 599.98px)" srcSet="img/slider02_480.png" />
                                    <source media="(max-width: 991.98px)" srcSet="img/slider02_600.png" />
                                    <img src="img/slider02.png" />
                                </picture>
                            </li>
                            <li>
                                <picture>
                                    <source media="(max-width: 479.98px)" srcSet="img/slider03_320.png" />
                                    <source media="(max-width: 599.98px)" srcSet="img/slider03_480.png" />
                                    <source media="(max-width: 991.98px)" srcSet="img/slider03_600.png" />
                                    <img src="img/slider03.png" />
                                </picture>
                            </li>
                            <li>
                                <picture>
                                    <source media="(max-width: 479.98px)" srcSet="img/slider04_320.png" />
                                    <source media="(max-width: 599.98px)" srcSet="img/slider04_480.png" />
                                    <source media="(max-width: 991.98px)" srcSet="img/slider04_600.png" />
                                    <img src="img/slider04.png" />
                                </picture>
                            </li>
                            <li>
                                <picture>
                                    <source media="(max-width: 479.98px)" srcSet="img/slider05_320.png" />
                                    <source media="(max-width: 599.98px)" srcSet="img/slider05_480.png" />
                                    <source media="(max-width: 991.98px)" srcSet="img/slider05_600.png" />
                                    <img src="img/slider05.png" />
                                </picture>
                            </li>
                            <li>
                                <picture>
                                    <source media="(max-width: 479.98px)" srcSet="img/slider06_320.png" />
                                    <source media="(max-width: 599.98px)" srcSet="img/slider06_480.png" />
                                    <source media="(max-width: 991.98px)" srcSet="img/slider06_600.png" />
                                    <img src="img/slider06.png" />
                                </picture>
                            </li>
                        </ul>
                        <div className="content">
                            <div className="controls">
                                <button id="prev">⟨</button>
                                <button id="next">⟩</button>
                            </div>
                        </div>
                        
                        <div className="indicators">
                            <div className="content">
                                <div className="indicator-container">
                                    <span className="indicator active" data-index="0"></span>
                                    <span className="indicator" data-index="1"></span>
                                    <span className="indicator" data-index="2"></span>
                                    <span className="indicator" data-index="3"></span>
                                    <span className="indicator" data-index="4"></span>
                                    <span className="indicator" data-index="5"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <section id="cds">
                        <article>
                            <div className="cd" id="div1">
                                <a href="backspacer.html">
                                    <figure>
                                        <img src="img/backspacer.jpg" alt="" />
                                    </figure>
                                </a>
                                <div className="article-body">
                                    <a href="backspacer.html">
                                        <h2>Backspacer</h2>
                                        <h3>Pearl Jam</h3>
                                        <p>Backspacer é o nono álbum de estúdio da banda de rock americana Pearl Jam, lançado em 20 de setembro de 2009....</p>
                                        <span className="read-more">Saiba mais...</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        
                        <article>
                            <div className="cd" id="div2">
                                <a href="boy.html">
                                    <figure>
                                        <img src="img/boy.jpg" alt="" />
                                    </figure>
                                </a>
                                <div className="article-body">
                                    <a href="boy.html">
                                        <h2>Boy</h2>
                                        <h3>U2</h3>
                                        <p>Boy é o álbum de estreia da banda de rock irlandesa U2, lançado em 20 de outubro de 1980. Produzido por Steve... </p>
                                        <span className="read-more">Saiba mais...</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="cd" id="div3">
                                <a href="fear-of-the-dark.html">
                                    <figure>
                                        <img src="img/fear-of-the-dark.jpg" alt="" />
                                    </figure>
                                </a>
                                <div className="article-body">
                                    <a href="fear-of-the-dark.html">
                                        <h2>Fear of the Dark</h2>
                                        <h3>Iron Maiden</h3>
                                        <p>Fear of the Dark é o nono álbum de estúdio da banda banda britânica de heavy metal Iron Maiden. Lançado em 11 de...</p>
                                        <span className="read-more">Saiba mais...</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="cd" id="div1">
                                <a href="led-zeppelin.html">
                                    <figure>
                                        <img src="img/led_zeppelin.jpg" alt="" />
                                    </figure>
                                </a>
                                <div className="article-body">
                                    <a href="led-zeppelin.html">
                                        <h2>Led Zeppelin</h2>
                                        <h3>Led Zeppelin</h3>
                                        <p>Led Zeppelin é o álbum de estreia da banda britânica de rock Led Zeppelin. Foi gravado em outubro de 1968 no Olympic Studios...</p>
                                        <span className="read-more">Saiba mais...</span>
                                    </a>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="cd" id="div1">
                                <a href="road-to-ruin.html">
                                    <figure>
                                        <img src="img/road-to-ruin.jpg" alt="" />
                                    </figure>
                                </a>
                                <div className="article-body">
                                    <a href="road-to-ruin.html">
                                        <h2>Road to Ruin</h2>
                                        <h3>Ramones</h3>
                                        <p>Road to Ruin é o quarto álbum de estúdio da banda americana de punk rock Ramones, lançado em 22 de setembro de 1978...</p>
                                        <span className="read-more">Saiba mais...</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        
                        <article>
                            <div className="cd" id="div2">
                                <figure>
                                  <img src="img/master-of-puppets.jpg" alt="" />
                                </figure>
                                <div className="article-body">
                                    <a href="#">
                                        <h2>Master of Puppets</h2>
                                        <h3>Metallica</h3>
                                        <p>
                                        Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta.
                                        </p>
                                        <span className="read-more">Saiba mais...</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="cd" id="div3">
                                <a href="#">
                                    <figure>
                                        <img src="img/nocode.jpg" alt="" />
                                    </figure>
                                </a>
                                <div className="article-body">
                                    <a href="#">
                                        <h2>No Code</h2>
                                        <h3>Pearl Jam</h3>
                                        <p>
                                        Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta.
                                        </p>
                                        <span className="read-more">Saiba mais...</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="cd" id="div1">
                                <figure>
                                  <img src="img/quadra.jpg" alt="" />
                                </figure>
                                <div className="article-body">
                                    <a href="#">
                                        <h2>Quadra</h2>
                                        <h3>Sepultura</h3>
                                        <p>
                                        Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta.
                                        </p>
                                        <span className="read-more">Saiba mais...</span>
                                    </a>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="cd" id="div1">
                                <figure>
                                  <img src="img/road-to-ruin.jpg" alt="" />
                                </figure>
                                <div className="article-body">
                                    <a href="#">
                                        <h2>Road to Ruin</h2>
                                        <h3>Ramones</h3>
                                        <p>
                                        Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta.
                                        </p>
                                        <span className="read-more">Saiba mais...</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        
                        <article>
                            <div className="cd" id="div2">
                                <figure>
                                  <img src="img/master-of-puppets.jpg" alt="" />
                                </figure>
                                <div className="article-body">
                                    <a href="#">
                                        <h2>Master of Puppets</h2>
                                        <h3>Metallica</h3>
                                        <p>
                                        Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta.
                                        </p>
                                        <span className="read-more">Saiba mais...</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="cd" id="div3">
                                <a href="#">
                                    <figure>
                                        <img src="img/nocode.jpg" alt="" />
                                    </figure>
                                </a>
                                <div className="article-body">
                                    <a href="#">
                                        <h2>No Code</h2>
                                        <h3>Pearl Jam</h3>
                                        <p>
                                        Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta.
                                        </p>
                                        <span className="read-more">Saiba mais...</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="cd" id="div1">
                                <figure>
                                  <img src="img/quadra.jpg" alt="" />
                                </figure>
                                <div className="article-body">
                                    <a href="#">
                                        <h2>Quadra</h2>
                                        <h3>Sepultura</h3>
                                        <p>
                                        Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta.
                                        </p>
                                        <span className="read-more">Saiba mais...</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>              
            </main>
        </>
    )
}
export default Home;