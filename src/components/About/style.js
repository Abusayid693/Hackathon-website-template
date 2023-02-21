import styled from 'styled-components';

export const LogoSection = styled.div`
  text-align: left;
  width: 80%;
  display: inline-block;
  position: relative;
  font-family: 'Nunito', sans-serif;

  h1 {
    font-weight: 700;
    text-align: left;
  }
`;

export const Logo = styled.div`
  width: 390px;
  height: 390px;
  margin-top: 0;
  padding: 0;
  position: relative;
  right: 130px;

  .Logo {
    width: 60%;
    display: inline-block;
    margin: 0;
    padding: 0;
    position: absolute;
  }

  .Logo {
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 2s infinite alternate;
  }
  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 570px) {
    margin-top: 10rem;
    margin-bottom: -10rem;
    .Logo {
      margin: 0 auto;
    }
  }

  @media (max-width: 570px) {
    margin-top: 10rem;
    margin-bottom: -10rem;
    .Logo {
      margin: 0 auto;
    }
  }
`;
