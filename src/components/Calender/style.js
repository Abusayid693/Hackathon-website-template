import styled from 'styled-components';
import {mobile} from '../../util/mediaQuery';

export const Container = styled.div`
  width: 530px;
  height: 400px;
  background-color: white;
  border-radius: 8px;
  border: 5px solid #c8e9fc;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;

  .card {
    width: 45px;
    height: 50px;
    background-color: grey;
    border-radius: 8px;
    margin: 10px 4px;
    background:#fff;
    transition:0.2s;
    color:#241B5B;
    cursor:pointer;
    p{margin:0}
    &:hover{
        background: rgba(36, 27, 91, 0.15);
    }
    &__selected{
        background: #241B5B;
    }
  }
`;
