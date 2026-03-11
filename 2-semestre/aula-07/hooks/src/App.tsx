import { useState } from "react";

const App = () => {
  const [valor, setValor] = useState(0);
  return (
    <>
      <h1>UseState</h1>
      <h2>Conteúdo do state: {valor}</h2>
      <button type="button" onClick={() => setValor(valor + 1)} disabled={valor >= 10}>
        +1
      </button>
      <button type="button" onClick={() => setValor(valor - 1)} disabled={valor <= 0}>
        -1
      </button>
    </>
  );
};
export default App;
