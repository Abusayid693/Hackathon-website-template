const OnlineMeetings = () => {
  return (
    <div className="online-meetings-container">
      <div className="section-top">
        <h2 className="title_default">Semana de design thinking</h2>
      </div>

      <div className="objectives-container">
        <div className="subtitle">
          Entre os dias 16 e 20 de janeiro nosso discord estará aberto, e
          acontecerão encontros online com os seguintes objetivos:
        </div>
        <ul className="objectives-list">
          <li>Apresentar a metodologia do Design Thinking</li>
          <li>
            Apresentar todos{' '}
            <a
              href="https://hackathon-inovacao-social.notion.site/85b8d765f1de4293946b0a0a54f73300?v=332836713aad4d1fa131034ba89fa342"
              target="_blank"
              rel="noreferrer"
            >
              problemas
            </a>
          </li>
          <li>
            Discussão dos{' '}
            <a
              className="lime-link"
              href="https://hackathon-inovacao-social.notion.site/85b8d765f1de4293946b0a0a54f73300?v=332836713aad4d1fa131034ba89fa342"
              target="_blank"
              rel="noreferrer"
            >
              problemas
            </a>
            , juntamente com outros inscritos e mentores
          </li>
          <li>
            Proposição de soluções, sugestão de projetos e criação dos primeiros
            times
          </li>
        </ul>
      </div>

      <div className="description">
        Será um momento de você tomar conhecimento dos{' '}
        <a
          className="lime-link"
          href="https://hackathon-inovacao-social.notion.site/85b8d765f1de4293946b0a0a54f73300?v=332836713aad4d1fa131034ba89fa342"
          target="_blank"
          rel="noreferrer"
        >
          problemas
        </a>
        , conhecer alguns dos mentores e participantes, discutir suas ideias e
        se conectar.
      </div>
      <div className="description">
        Quem não puder participar dos encontros, não tem problema! No dia 21 o
        Hackathon começa a todo o vapor!
      </div>
    </div>
  );
};

export {OnlineMeetings};
