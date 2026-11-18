import "../components/Servicos.css";

function Servico() {
  return (
    <div id="tratamentos" className="container__servicos">
      <div className="titulos__servicos">
        <p className="titulo__servicos">SERVIÇOS</p>
        <h2 className="segundo__titulo__servicos">Procedimentos em Destaque</h2>
        <p className="terceiro__titulo__servicos">
          Tratamentos essenciais realizados com tecnologia moderna, conforto e
          rapidez.
        </p>
      </div>

      <div className="servicos__principais">
        <div className="limpeza__servicos">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
          <h3>Limpeza & Profilaxia</h3>
          <p>
            Remoção completa de tártaro e placa bacteriana com ultrassom indolor
            e polimento.
          </p>
        </div>

        <div className="clareamento__servicos">
          <i className="fa-regular fa-sun"></i>
          <h3>Clareamento Dental</h3>
          <p>
            Clareamento a laser e moldeiras anatômicas para um sorriso luminoso
            sem sensibilidade.
          </p>
        </div>

        <div className="ortondontia__servicos">
          <i className="fa-solid fa-grip"></i>
          <h3>Ortodontia & Alinhadores</h3>
          <p>
            Alinhadores invisíveis Invisalign e aparelhos modernos com
            planejamento 100% digital.
          </p>
        </div>

        <div className="implantes__servicos">
          <i className="fa-solid fa-wrench"></i>
          <h3>Implantes & Restauração</h3>
          <p>
            Cirurgia guiada precisa, próteses de alta estética e recuperação
            rápida do seu dente.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Servico;
