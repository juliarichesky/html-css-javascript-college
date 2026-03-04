const Contato = () => {
    return(
        <>
        <main className='flex-1 container mx-auto p-6'>
        <div className='grid grid-cols-3 p-6 gap-6'>


          <div className='bg-blue-100 p-4 rounded'>
            <h2 className='text-2xl font-semibold mb-2'>Coluna 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloribus aliquam nesciunt, dolor mollitia corrupti tempora fugit rerum odio explicabo facilis voluptas a, quasi porro nihil animi nostrum. Quod, dolorum.</p>
            <a href="www.google.com.br/" className='bg-blue-500 text-white text-center px-4 py-2 rounded mt-6 inline-block'>Clique aqui!</a>
          </div>

        </div>
      </main>
        </>
    )
}
export default Contato;