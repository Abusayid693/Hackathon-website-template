import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 450px;
  max-height: 520px;

  background-color: white;
  border-radius: 8px;

  margin: 20px 0;

  .card-top {
    background-color: #b2b2b2;
    height: 80px;
    border-radius: 8px 8px 0 0;
    padding: 0 5%;
    overflow: auto;

    &-inner {
      width: 20%;

      &-item {
        background: #bbbbbb;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        cursor: pointer;
        &__disabled {
          opacity: 0.3;
        }
        & img {
          width: 95%;
        }
      }

      @media only screen and (max-width: 450px) {
        width: 30%;
      }
    }
  }
  .card-body {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;

    overflow: scroll;

    &-header {
      width: 45px;
      height: 45px;
      border-radius: 8px;
    }
    &-inner {
      width: 45px;
      height: 45px;
      border-radius: 8px;
      margin: 10px 4px;
      background: #fff;
      color: #e0e0e0;
      &__active {
        transition: 0.2s;
        color: #241b5b;
        cursor: pointer;
        p {
          font-weight: 600;
          position: relative;
        }
        &:hover {
          background: #ff4a6f;
          box-shadow: 0px 1px 5px #ff4a6f;
          color: white;
        }
        &__event {
          &:after {
            position: absolute;
            content: '';
            width: 6px;
            height: 6px;
            background-color: #ff4a6f;
            bottom: -5px;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;

export const Event = styled.div`
  box-shadow: 0px 1px 5px rgba(167, 167, 167, 0.15);

  margin: 10px 0px;
  padding: 0 10px;
  border: none;

  background: #fff;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: black;

  .event-subcard {
    padding: 0;
    text-align: left;

    & h3 {
      font-size: 20px;
      background-image: linear-gradient(
        83.2deg,
        rgba(150, 93, 233, 1) 10.8%,
        rgba(99, 88, 238, 1) 94.3%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    & p {
      font-size: 17px;
      font-weight: 500;
    }
  }

  & button {
    font-size: 15px;
    width: unset;
    height: fit-content;
    padding: 5px;
    border-radius: 4px;
  }
`;

export const EventContainer = styled.div`
  background: transparent;
  overflow: scroll;
  height: 400px;
`;

export const EventLayout = styled.div`
  background: #fff;
  overflow: scroll;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;

  color: black;

  & button {
    display: block;
    background-color: #ff4a6f;
    margin: 15px auto;
    border: none;
    padding: 12px 30px;
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
  }
  & p {
    font-weight: 300;
  }
  .image-layout {
    text-align: center;
    width: 150px;
  }
  & img {
    height: 120px;
    width: 120px;
    border-radius: 5px;
    border: 2px solid #ff69ac;
    box-shadow: 0px 2px 7px #ffd3cc;
  }
`;

export const GradientBorder = styled.div`
  background: linear-gradient(to right, red, purple);
  padding: 5px;
`;
