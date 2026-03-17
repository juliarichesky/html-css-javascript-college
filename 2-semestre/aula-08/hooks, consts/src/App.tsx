import { useState } from "react";

const App = () => {
  const [cont, setCont] = useState(0);
  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");
  const [nomeConfirmado, setNomeConfirmado] = useState("");

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome1(event.target.value);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome2(event.target.value);
  };

  const handleClick = () => {
    setNomeConfirmado(nome2);
    setNome2("");
  };

  const handleReset = () => {
    setCont(0);
    setNome1("");
    setNome2("");
    setNomeConfirmado("");
    localStorage.setItem("teste", nome1);
  }

  return (
    <>
      <h3>Contador</h3>
      CONT: {cont}
      <br />
      <button onClick={() => setCont(cont + 1)} disabled={cont >= 10}>+1</button>
      <button onClick={() => setCont(cont - 1)} disabled={cont === 0}>-1</button>

      <hr />

      <h3>Input em tempo real</h3>
      Nome: <input type="text" value={nome1} onChange={handleChange1} />
      <p>Nome digitado: {nome1}</p>

      <hr />

      <h3>Input com botão</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        Nome: <input type="text" value={nome2} onChange={handleChange2} />
        <button type="button" onClick={handleClick}>Mostrar nome</button>
        <p>Nome confirmado: {nomeConfirmado}</p>
      </form>

      <hr />

      <button type="button" onClick={handleReset}>Reset</button>
    </>
  );
};

export default App;