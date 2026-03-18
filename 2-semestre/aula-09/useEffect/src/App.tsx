import { useEffect, useState } from "react";

// definição dos tipos
type Address = {
  street: string;
  city: string;
  zipcode: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  address: Address;
};

const App = () => {
  const [cont, setCont] = useState(0);
  const [segundos, setSegundos] = useState(0);

  // tipagem do estado (essencial para não dar erro no .map)
  const [users, setUsers] = useState<User[]>([]);

  // ATUALIZANDO O TITULO DA PAGINA
  useEffect(() => {
    document.title = `Cont: ${cont}`;
  }, [cont]);

  // CONTAGEM DE SEGUNDOS
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(segundos + 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, [segundos]);

  // ACESSANDO API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: User[]) => {
        setUsers(data);
      })
      .catch((error) => console.error("Erro ao buscar usuários:", error)); // tratamento de erros
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>useEffect e API</h1>
      <hr />

      <section>
        <h2>Contador</h2>
        <button onClick={() => setCont(cont + 1)}>Incrementar: {cont}</button>
      </section>

      <section>
        <h2>Contagem de tempo</h2>
        <p>
          🕒 Segundos passados: <strong>{segundos}s</strong>
        </p>
      </section>

      <section>
        <h2>Lista de Usuários</h2>
        {users.length === 0 ? (
          <p>Carregando usuários... ⏳</p>
        ) : ( // renderização condicional para mostrar mensagem de carregamento (operador ternario if/else)
          <ul>
            {users.map((user) => (
              <li key={user.id} style={{ marginBottom: "15px" }}>
                <strong>{user.name}</strong>
                <ul style={{ listStyleType: "none", color: "#555" }}>
                  <li>📧 Email: {user.email}</li>
                  <li>🏠 Rua: {user.address.street}</li>
                  <li>🏙️ Cidade: {user.address.city}</li>
                </ul>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default App;
