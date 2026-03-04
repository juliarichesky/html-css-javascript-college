import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
        <header className='bg-pink-300 text-white p-6 text-center'>
        <h1 className='text-6xl font-bold mb-2'>Bem vindo!</h1>
        <p className='text-lg'>Trabalhando com TailwindCSS.</p>
            <nav className='mt-4 float-end'>
          
          <Link to= "/" className='text-white hover:text-pink-800 mx-2 bg-[#bd6c87] p-2 rounded'>Home</Link>
          <Link to="/sobre" className='text-white hover:text-pink-800 mx-2 bg-[#bd6c87] p-2 rounded'>Sobre</Link>
          <Link to="/contato" className='text-white hover:text-pink-800 mx-2 bg-[#bd6c87] p-2 rounded'>Contato</Link>
            </nav>
      </header>
        </>
    )
}
export default Header;