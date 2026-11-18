import { useState } from "react";
import "../components/Form.css";

function Form({ atualizarAgendamentos }) {
  const [paciente, setPaciente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [procedimento, setProcedimento] = useState("");
  const [data, setData] = useState("");
  const [profissional, setProfissional] = useState("");
  const [horario, setHorario] = useState("");

  async function confirmarAgendamento() {
    const agendamento = {
      paciente,
      telefone,
      procedimento,
      data,
      profissional,
      horario,
    };

    try {
      const resposta = await fetch("http://localhost:3000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(agendamento),
      });

      if (!resposta.ok) {
        throw new Error("erro ao cadastrar!");
      }

      const dados = await resposta.json();
      await atualizarAgendamentos();

      setPaciente("");
      setTelefone("");
      setProcedimento("");
      setData("");
      setProfissional("");
      setHorario("");
      alert("Cadastrado!");
    } catch (erro) {
      console.log(erro.message);
    }
  }
  return (
    <div className="container__form">
      <div className="cabecalho__form">
        <div className="texto__calendario__form">
          <i className="fa-regular fa-calendar"></i>
          <p>Agendamento Rápido</p>
        </div>
        <p className="texto__online__form">100% online</p>
      </div>

      <div className="inputs__form">
        <div className="nome__form">
          <p>Nome completo</p>
          <input
            className="nome"
            value={paciente}
            onChange={(e) => setPaciente(e.target.value)}
            placeholder="Seu nome completo"
            type="text"
          />
        </div>

        <div className="numero__form">
          <p>WhatsApp</p>
          <input
            className="numero"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="(51) 99999-9999"
            type="tel"
          />
        </div>
      </div>

      <div className="outros__inputs">
        <div className="procedimento">
          <p>Procedimento</p>
          <select
            value={procedimento}
            onChange={(e) => setProcedimento(e.target.value)}
          >
            <option value="Limpeza">Limpeza</option>
            <option value="Canal">Canal</option>
            <option value="Clareamento">Clareamento</option>
            <option value="Aparelho">Aparaelho</option>
          </select>
        </div>

        <div className="data__form">
          <p>Data preferida</p>
          <input
            value={data}
            onChange={(e) => setData(e.target.value)}
            type="date"
          />
        </div>

        <div className="profissional__form">
          <p>Profissional</p>
          <select
            onChange={(e) => setProfissional(e.target.value)}
            value={profissional}
          >
            <option value="Dimitri">Dimitri</option>
            <option value="Julia">Julia</option>
            <option value="Pedro">Pedro</option>
            <option value="Antonia">Antonia</option>
            <option value="Bruna">Bruna</option>
          </select>
        </div>

        <div className="horario__form">
          <p>Horário preferencial</p>
          <input
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            type="time"
          />
        </div>
      </div>

      <div className="botao__form">
        <button onClick={confirmarAgendamento} className="botao__check">
          <i className="fa-solid fa-check"></i>
          <p>Confirmar Agendamento</p>
        </button>
      </div>
    </div>
  );
}

export default Form;
