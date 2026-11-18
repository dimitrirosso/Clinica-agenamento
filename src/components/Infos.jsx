import "../components/Infos.css";

function Infos() {
  return (
    <div className="container__infos">
      <div className="titulos__infos">
        <p className="titulo__infos">ATENDIMENTO</p>
        <h2 className="segundo__titulo__infos">
          Informações Essenciais da Clínica
        </h2>
      </div>

      <div className="infos__principais">
        <div className="localizacao__infos">
          <i className="fa-solid fa-location-dot"></i>

          <h3>Localização</h3>
          <p>
            Av. Paulista, 1500 - Sala 804 A 200m do Metrô Trianon-Masp
            Estacionamento no local com manobrista
          </p>
        </div>

        <div className="horarios__infos">
          <i className="fa-solid fa-clock"></i>

          <h3>Horários</h3>
          <p>
            Segunda a Sexta: 08:00 às 19:00 Sábados: 08:00 às 13:00 Plantão de
            urgência via WhatsApp
          </p>
        </div>

        <div className="fale__infos">
          <i className="fa-solid fa-comment-sms"></i>

          <h3>Fale com a equipe</h3>
          <p>Dúvidas ou agendamento telefônico direto com nossa recepção.</p>
          <button className="botao__infos">Chamar no WhatsApp</button>
        </div>
      </div>
    </div>
  );
}

export default Infos;
