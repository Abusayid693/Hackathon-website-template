function PrizeHeading(props) {
  return (
    <div className="PrizeHeading">
      <h1>{props.title}</h1>
    </div>
  );
}

function FirstPrize(props) {
  return (
    <div className="Prizes">
      {props.icon}
      <h2>{props.title}</h2>
    </div>
  );
}

export {FirstPrize, PrizeHeading};
