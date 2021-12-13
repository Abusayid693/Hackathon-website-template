import styled from 'styled-components';
import {mobile, desktop} from '../../util/mediaQuery';

export const Container = styled.div`
  width: 530px;
  min-height: 450px;
  max-height: 500px;

  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 1px 7px #ffd3cc;
  .card-top {
    background-color: #b2b2b2;
    height: 80px;
    border-radius: 8px 8px 0 0;
    padding: 0 5%;

    &-inner {
      width: 20%;
      &-item {
        background: #bbbbbb;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        cursor: pointer;
        & img {
          width: 95%;
        }
      }
    }
  }
  .card-body {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
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
  height: 70px;
  margin: 10px 10px;
  border: none;
`;


export const EventContainer = styled.div`
background:transparent;
overflow: scroll;
height: 400px;
`

export const EventLayout = styled.div`
background:#fff;
overflow: scroll;
height: 400px;
display:flex;
flex-direction:column;
align-items:center;
padding:0 5%;
& button{
  display: block;
  background-color:#FF4A6F;
  margin:15px auto;
  border:none;
  padding: 12px 30px;
  border-radius:8px;
  color:#fff;
  font-size:18px;

}
& p{
  font-weight:300;
}
.image-layout{
  text-align:center;
  width:150px;
}
& img {
  height:120px;
  width:120px;
  border-radius:5px;
  border: 2px solid #FF69AC;
  box-shadow: 0px 2px 7px #FFD3CC;
}
`