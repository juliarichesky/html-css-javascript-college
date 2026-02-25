import estilos from "./Mensagem.module.css";
import "../../teste.css"

const Mensagem = () => {
    return(
        <>
            <p className={estilos.paragrafo}>Isso é um componente utilizando CSS Modules.</p>
            <h1 className={estilos.paragrafo2}>Hello World!</h1>
            <h2 className="paragrafo">Hello World 2</h2>
        </>
    )
}
export default Mensagem;