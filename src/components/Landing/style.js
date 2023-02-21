import styled from 'styled-components';

export const Button = styled.button`
  width: 22rem;
  height: 6rem;
  border: none;
  border-radius: 19px;
  font-size: 2rem;
  color: rgb(255, 255, 255);
  background-color: #6a63b7;
  font-weight: 300;
  position: relative;

  &[type='join_disco'] {
    width: 25rem;
    background: linear-gradient(90deg, #9796f0 0%, #fbc7d4 100%);
    i {
      margin-right: 10px;
    }
  }

  &[type='register'] {
    margin-left: 1rem;
    border: 2px solid rgb(255, 255, 255);
    background-color: transparent;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 100%;
    right: 0;
    background-color: white;
    overflow: hidden;
    width: 0;
    height: 100%;
    transition: 0.3s ease;
    border-radius: 12px;
  }

  .overlay-text {
    font-weight: 300;
    color: #2c4677;
    font-size: 17px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }

  &:hover .overlay {
    width: 100%;
    left: 0;
  }
`;

export const Container = styled.div`
  text-align: left;
  margin-left: 10vh;

  .h1 {
    margin: 0;
  }

  .join_dis {
    margin-bottom: 29px;
    margin-top: 19px;
  }

  .buttom-group {
    width: 100%;
    overflow: auto;
  }

  .AboutMe h2 {
    font-size: 8rem;
    font-family: 'Noto Sans', sans-serif;
  }

  p {
    font-size: 2rem;
    line-height: 1.6;
    font-weight: 300;
  }

  p {
    width: 70%;
  }

  /* main targer */

  @media (max-width: 570px) {
    text-align: center;
    margin-left: 0;
    p {
      width: 100%;
    }
    .AboutMe h2 {
      font-size: 4rem;
    }
    .register {
      margin-left: 0;
      margin-top: 3vh;
    }

    p {
      font-size: 1.9rem;
    }
    .AboutMe {
      text-align: center;
    }
  }

  @media (max-width: 330px) {
    .register {
      margin-left: 0;
      margin-top: 3vh;
    }
    .AboutMe h1 {
      font-size: 2.2em;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;
