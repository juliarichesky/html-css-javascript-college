import { useForm, type SubmitHandler } from "react-hook-form";

type Dados = {
  nome: string;
  sobrenome: string;
};

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Dados>(); // chamando o tipo Dados
  const onSubmit: SubmitHandler<Dados> = (data) => {
    console.log("Dados prontos para o envio:", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="txtName">Nome:</label>
        <input
          type="text"
          {...register("nome", {
            required: "Nome é obrigatório!",
            minLength: { value: 3, message: "Mínimo de 3 caracteres" },
            maxLength: { value: 20, message: "Máximo de 20 caracteres" },
          })}
        />
        {/* tradução: se houver erro no campo 'nome', mostre o span */}
        {errors.nome && (
          <span style={{ color: "red" }}>{errors.nome.message}</span>
        )}
        <br />
        <label htmlFor="txtSobrenome">Sobrenome:</label>
        {/* tradução: se houver erro no campo 'sobrenome', mostre o span */}
        <input
          type="text"
          {...register("sobrenome", {
            required: "Sobrenome é obrigatório",
            minLength: { value: 3, message: "Mínimo de 3 caracteres" },
            maxLength: { value: 20, message: "Máximo de 20 caracteres" },
          })}
        />
        {errors.sobrenome && (
          <span style={{ color: "red" }}>{errors.sobrenome.message}</span>
        )}
        <br />
        <button>Enviar</button>
      </form>
    </>
  );
};
export default App;
