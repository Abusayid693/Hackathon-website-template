function SponsorsHead() {
  return <h2 className="shead">Parceiros</h2>;
}

function Sponsor(props) {
  return (
    <a
      className="sponsorLink"
      target="_blank"
      rel="noopener noreferrer"
      href={props.link}
    >
      <div className="Sponsor">
        <img src={props.srcx} alt="Hackathon moinho" />
        <p>{props.name}</p>
      </div>
    </a>
  );
}

export {SponsorsHead, Sponsor};
