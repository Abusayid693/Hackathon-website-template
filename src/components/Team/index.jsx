const Team = () => {
  return (
    <div className="teamContainer">
      <div className="team-top">
        <h2 className="title_default">Sua equipe, seu time, seu projeto</h2>
        <p className="description">
          Um time precisa ter ao menos 3 pessoas, com qualquer perfil. Não é
          mais necessário ter sempre um dev ou empreendedor no time. Se tem
          outras duas pessoas contigo, já pode ser considerado um time.
        </p>
      </div>

      <div className="team">
        <div className="subtitle">
          Existem três maneiras de estar em um time:
        </div>
        <ul className="team-rules">
          <li>
            Participando dos <a href="#online-meetings">encontros online</a> na
            semana do dia 16 de Janeiro
          </li>
          <li>Se inscrevendo com seus amigos e já com um time pré-montado</li>
          <li>
            Conectando com outras pessoas na primeira hora do evento, para
            aderir a um time já existente
          </li>
        </ul>
      </div>
    </div>
  );
};

export {Team};
