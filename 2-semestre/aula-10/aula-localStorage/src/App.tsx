import { useEffect, useState } from "react";
 
const App = () =>{
  const [msg,setMsg]=useState("");
  const [nome,setNome]=useState("");
  const [usuario,setUsuario]=useState("");
  const [logado,setLogado]=useState(false);
 
  useEffect(()=>{
      setMsg("Componente Carregado");
  },[])
 
  //carrega o valor salvo quando o componente abrir
  const nomeSalvo = localStorage.getItem("nome");
  useEffect(()=>{
    if(nomeSalvo){
      setNome(nomeSalvo);
    }
  },[])
 
  // salva no localStorage, sempre que o nome mudar
  useEffect(() =>{
    localStorage.setItem("nome",nome)
  },[ nome ])
 
  function entrar(){
    if(usuario.trim() !=""){
      localStorage.setItem("usuario",usuario);
      setLogado(true);
    }
  }
 
  return(
    <>
      <h1>useEffect</h1>
      <h2>Exemplo 01: Receber valor e atribuir ao localStorage</h2>
      <p>{ msg }</p>
 
      <input type="text" onChange={ (e)=>{ setNome(e.target.value)} } value={ nome } />
      <p>Olá, { nome  || "visitante"}! Seja bem vindo!!</p>
 
 
      <h2>Exemplo 02: Efetuar Login</h2>
      { logado ? (
        <>
          <p>Olá, xxxx! Seja bem vindo!!</p>
          <p><button>Sair</button></p>
        </>
      ) : (
        <>
          <p><input type="text" value={ usuario } onChange={ (e)=> { setUsuario(e.target.value) } }/></p>
          <p><button onClick={ entrar }>Login</button></p>
        </>
      )
      }
    </>
  )
}
 
export default App;