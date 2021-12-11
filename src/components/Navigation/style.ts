import styled from 'styled-components';
import {mobile} from "../../util/mediaQuery"


interface wrapperPropTypes {
  toggle: boolean;
}

export const Container= styled.div`
nav {
    list-style-type: none;
    height: 7.5vh;
    font-size: 1.8rem;
    position: fixed;
    width: 100%;
    z-index: 10;
    top:0;
    transition: 0.2s;
    box-shadow: 0px 1px 7px #FFD3CC;
    img {
      z-index: 1000000;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .s-open,
  .s-close {
    display: none;
  }
  .nav-inner {
    width: 30%;
  }
  ul {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
  }
  nav ul li {
    display: inline-block;
    margin: 0;
    font-size:16px;

  }
  .links {
    color:black;
    transition: 0.5s;
    font-weight: 300;
    letter-spacing: 1.3px;
    font-weight:400;
    font-size: 17px;
  }
  .links:hover {
    color: rgb(184, 180, 180);
  }
  a:link {
    text-decoration: none;
    padding: 1px;
  }
  
  ${mobile} {
    .ease {
      background: #484848;
      height: 75%;
      opacity: 0.2;
      pointer-events: none;
    }
    ul {
      flex-direction: column;
      padding: 30px 20;
    }
    .s-open {
      display: inline;
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: -1;
    }
    .s-close {
      display: block;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  `


export const Wrapper = styled.div<wrapperPropTypes>`
  display: block;
  width: 40%;
  margin-top: 20px;
  ${mobile} {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    transition: top 1s;
    .nav-content {
      height: 35%;
      background-color: rgba(50, 13, 136);
    }
  }
`;

export const Link = styled.a`
transition: 1s;

`