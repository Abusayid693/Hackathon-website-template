import {PrizeHeadingContainer, PrizesContainer} from './style';

const PrizeHeading = props => {
  return (
    <PrizeHeadingContainer>
      <h1>{props.type}</h1>
    </PrizeHeadingContainer>
  );
};

const FirstPrize = props => {
  return (
    <PrizesContainer>
      {props.icon}
      <h2>{props.type}</h2>
      <p>{props.content}</p>
    </PrizesContainer>
  );
};

export {FirstPrize, PrizeHeading};
