import styled from 'styled-components';
import {desktop, mobile} from '../../../util/mediaQuery';

interface HeadingTypes {
  fontMax?: number;
//   fontAbsolute?: number;
  fontSm?: number;
  color?: string;
  hColor?: string;
}

export const H1 = styled.h1<HeadingTypes>`
  font-size: ${({fontSm}) => fontSm && `${fontSm}px`};
  color: ${({color}) => color && `${color}`};
  transition: 0.2s;
  &:hover {
    color: ${({hColor}) => hColor && `${hColor}`};
  }

  ${desktop} {
    font-size: ${({fontMax}) =>
      fontMax && `${fontMax}px`};
  }
`;

export const H2 = styled.h2<HeadingTypes>`
  font-size: ${({fontSm}) => fontSm && `${fontSm}px`};
  color: ${({color}) => color && `${color}`};
  transition: 0.2s;
  &:hover {
    color: ${({hColor}) => hColor && `${hColor}`};
  }
  ${desktop} {
    font-size: ${({fontMax}) =>
      fontMax && `${fontMax}px`};
  }
`;

export const H3 = styled.h3<HeadingTypes>`
  font-size: ${({fontSm}) => fontSm && `${fontSm}px`};
  color: ${({color}) => color && `${color}`};
  transition: 0.2s;
  &:hover {
    color: ${({hColor}) => hColor && `${hColor}`};
  }
  ${desktop} {
    font-size: ${({fontMax}) =>
      fontMax && `${fontMax}px`};
  }
`;

export const H4 = styled.h4<HeadingTypes>`
  font-size: ${({fontSm}) => fontSm && `${fontSm}px`};
  color: ${({color}) => color && `${color}`};
  transition: 0.2s;
  &:hover {
    color: ${({hColor}) => hColor && `${hColor}`};
  }
  ${desktop} {
    font-size: ${({fontMax}) =>
      fontMax && `${fontMax}px`};
  }
`;

export const H5 = styled.h5<HeadingTypes>`
  font-size: ${({fontSm}) => fontSm && `${fontSm}px`};
  color: ${({color}) => color && `${color}`};
  transition: 0.2s;
  &:hover {
    color: ${({hColor}) => hColor && `${hColor}`};
  }
  ${desktop} {
    font-size: ${({fontMax}) =>
      fontMax && `${fontMax}px`};
  }
`;

export const H6 = styled.h6<HeadingTypes>`
  font-size: ${({fontSm}) => fontSm && `${fontSm}px`};
  color: ${({color}) => color && `${color}`};
  transition: 0.2s;
  &:hover {
    color: ${({hColor}) => hColor && `${hColor}`};
  }
  ${desktop} {
    font-size: ${({fontMax}) =>
      fontMax && `${fontMax}px`};
  }
`;

export const P = styled.p<HeadingTypes>`
  font-size: ${({fontSm}) => fontSm && `${fontSm}px`};
  color: ${({color}) => color && `${color}`};
  transition: 0.2s;
  &:hover {
    color: ${({hColor}) => hColor && `${hColor}`};
  }
  ${desktop} {
    font-size: ${({fontMax}) =>
      fontMax && `${fontMax}px`};
  }
`;
