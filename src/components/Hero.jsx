import "../components/Hero.css";

function Hero() {
  return (
    <div className="container__hero">
      <div className="texto__principal">
        <p className="atendimento__p">Atendimento ágil & sem burocrácia</p>
        <h1>Agende sua consulta odontológica em poucos minutos</h1>
        <p className="cuidado__p">
          Cuidado humanizado, profissionais experientes e tecnologia de ponta no
          coração de São Paulo. Selecione seu horário diretamente abaixo.
        </p>
      </div>

      <div className="info__hero">
        <div className="pontualidade">
          <i className="fa-regular fa-circle-check"></i>
          <p>Pontualidade garantida</p>
        </div>

        <div className="convenio">
          <i className="fa-solid fa-shield"></i>
          <p>Aceitamos convenio & particular</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
