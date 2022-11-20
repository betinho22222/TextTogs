import logo from "./assets/logo.svg";
import flecha from "./assets/seta-direita.svg"


import "../src/global.css"
export function App() {


  return <div className="container">
    <header className="header">
      <img src={logo} alt="logo" className="logo"/>
      <span>Bem vindo ao Textogs.</span>
    </header>
    <form>
    <div className="inputcontainer">
        <label 
        htmlFor="email">E-mail</label>
        <input 
          type="text"
          name="email" 
          id="email" 
          placeholder="exemplo@gmail.com" />

    </div>

    <div className="inputcontainer">
        <label 
        htmlFor="password">Senha</label>
        <input 
          type="text"
          name="password" 
          id="passworld" 
          placeholder="*****" />

    </div>


    <a href="#">Esqueceu Sua Senha ?</a>

    <button className="Button">
      Se Conectar <img src={flecha} alt="" />
    </button>

    <div className="footer">
      <p>Não Tem Conta ? Se Registre <a href="#">Aqui</a> Caso Não Tenha. </p>    

    </div>
    </form>
  </div>;
    
  
}


