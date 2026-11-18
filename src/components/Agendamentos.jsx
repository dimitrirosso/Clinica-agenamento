import "../components/Agendamentos.css";

function Agendamentos({ agendamentos, atualizarAgendamentos }) {
  async function deletar(indice) {
    try {
      const resposta = await fetch(
        `http://localhost:3000/agendamentos/${indice}`,
        {
          method: "DELETE",
        },
      );

      if (!resposta.ok) {
        throw new Error("Erro ao deletar!");
      }

      await atualizarAgendamentos();
    } catch (erro) {
      console.log(erro.message);
    }
  }
  return (
    <div id="agendamentos" className="container__agendamentos">
      <div className="cabecalho__agendamento">
        <div className="titulos__agendamentos">
          <p className="titulo__agendamento">CONSULTAS</p>
          <h2 className="segundo__titulo__agendamento">Consultas Agendadas</h2>
          <p className="terceiro__titulo__agendamento">
            Acompanhe suas consultas marcadas pelo WhatsApp ou nesta sessão
          </p>
        </div>

        <div className="busca__agendamento">
          <input type="text" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i> Buscar
          </button>
        </div>
      </div>

      <div className="tabela__agendamento">
        <table>
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Procedimento</th>
              <th>Profissional</th>
              <th>Data e Horário</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {agendamentos.map((agendamento, index) => (
              <tr key={index}>
                <td>{agendamento.paciente}</td>
                <td>{agendamento.procedimento}</td>
                <td>{agendamento.profissional}</td>
                <td>
                  {new Date(agendamento.data).toLocaleDateString("pt-BR", {
                    timeZone: "UTC",
                  })}
                  ({agendamento.horario.slice(0, 5)})
                </td>
                <td className="status_confirmado">● Confirmado</td>
                <td>
                  <button
                    className="botao__cancelar"
                    onClick={() => deletar(agendamento.id)}
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Agendamentos;
