import styled from 'styled-components';
import {mobile, desktop} from '../../util/mediaQuery';

export const Container = styled.div`
  width: 530px;
  height: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 1px 7px #ffd3cc;

  .card-top {
    background-color: #b2b2b2;

    height: 15%;
    border-radius: 8px 8px 0 0;
    padding:0 5%;

    &-inner {
      width: 20%;
      &-item {
        background: #bbbbbb;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        cursor:pointer;
        & img {
          width: 95%;
        }
      }
    }
  }
  .card-body {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
  &-header{
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
      transition: 0.2s;
      color: #241b5b;
      cursor: pointer;
      p {
        font-weight: 600;
      }
      &:hover {
        background: #ff4a6f;
        box-shadow: 0px 1px 5px #ff4a6f;
        color: white;
      }
      &__selected {
        background: #241b5b;
      }
    }
  }
`;


export const Event = styled.div`
box-shadow: 0px 1px 5px rgba(167, 167, 167, 0.15);
height:70px;
margin:10px 10px;
border:none;
`