import styled from 'styled-components';
import * as React from 'react';

interface ButtonProps {
  element?: string;
}

const Button = styled.button<ButtonProps>`
  width: 22rem;
  height: 6rem;
  border-radius: 19px;
  font-size: 2rem;
  color: rgb(255, 255, 255);
  font-weight: 300;
  position: relative;
  background-color: ${props =>
    props.element === 'primary' ? 'transparent' : '#6A63B7'};
  border: ${props =>
    props.element === 'primary' ? '1px solid white' : 'none'};
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

const Index: React.FC<{type?: string; title?: string; subtitle?: string}> = ({
  type = 'primary',
  title = 'Register',
  subtitle = 'Fill the form',
}) => {
  return (
    <Button element={type}>
      {title}
      <div className="overlay">
        <div className="overlay-text">{subtitle}</div>
      </div>
    </Button>
  );
};

export default Index;
