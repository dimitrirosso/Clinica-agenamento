import "../pages/App.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Servicos from "../components/Servicos";
import Infos from "../components/Infos";
import Agendamentos from "../components/Agendamentos";
import { useState, useEffect } from "react";

function App() {
  const [agendamentos, setAgendamentos] = useState([]);

  async function buscarAgendamento() {
    try {
      const resposta = await fetch(
        "https://clinica-agenamento.onrender.com/agendamentos",
        {
          method: "GET",
        },
      );

      if (!resposta.ok) {
        throw new Error("Erro ao agendar!");
      }
      const dados = await resposta.json();
      setAgendamentos(dados);
    } catch (erro) {
      console.log(erro.message);
    }
  }

  useEffect(() => {
    buscarAgendamento();
  }, []);
  return (
    <div className="container">
      <Header />

      <section className="secao1">
        <Hero />
        <Form atualizarAgendamentos={buscarAgendamento} />
      </section>

      <section className="secao2">
        <Servicos />
        <Infos />
      </section>

      <section className="secao3">
        <Agendamentos
          agendamentos={agendamentos}
          atualizarAgendamentos={buscarAgendamento}
        />
      </section>
    </div>
  );
}

export default App;
