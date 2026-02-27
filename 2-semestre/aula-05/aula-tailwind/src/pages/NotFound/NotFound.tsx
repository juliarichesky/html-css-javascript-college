import icon404 from '../../assets/img/404.png'

const NotFound = () => {
    return(
        <>
        <main className="flex-1 container mx-auto p-6 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 gap-6">
                <h1 className="text-6xl font-semibold mb-2 text-center">Página não encontrada!</h1>
                <img src={icon404} />
            </div>
        </main>
        </>
    )
}
export default NotFound;