import "../components/Header.css";

function Header() {
  return (
    <header>
      <div className="container__cabecalho">
        <div className="logo">
          <div className="imagem">
            <i className="fa-solid fa-tooth"></i>
          </div>

          <div className="titulo__clinica">
            <h2>Clínica & Sorisso</h2>
            <p>Odontologia Integrada</p>
          </div>
        </div>

        <div className="links">
          <a href="#tratamentos">Tratamentos</a>
          <a href="#agendamentos">Agendamentos</a>
          <a href="">Contato</a>
        </div>

        <div className="whats">
          <button className="botao__whats">
            <i className="fa-regular fa-message"></i>{" "}
            <p>WhatsApp: (51) 99999-9999</p>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
