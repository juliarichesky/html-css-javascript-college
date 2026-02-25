import "./App.css";

function App() {
  return (
    <>
      <div className='min-h-screen bg-rose-400 flex items-center justify-center'>
        <div className="bg-white p-10 rounded-xl text-center shadow-lg">
          <h1 className="text-4xl font-bold text-emerald-800 mb-6">Tailwind!</h1>
          <p className="text-gray-600 mb-10">Exemplo de utilização do Tailwind.</p>
          <button className="bg-emerald-800 text-white px-6 py-3 rounded hover:bg-emerald-400 transition hover:text-black">Clique aqui!</button>
        </div>
      </div>
    </>
  );
}
export default App;
