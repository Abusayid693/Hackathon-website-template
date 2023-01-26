import React from 'react';
import logo from './assets/logoDavidson.png';

interface actionTypes {
  type: string;
  data?: number | string;
}

interface CalenderLayoutProps {
  handleActionProcced?: actionTypes;
  handleActionBack?: actionTypes;
}

const CalenderLayout: React.FC<CalenderLayoutProps> = ({
  children,
  handleActionProcced,
  handleActionBack
}) => {
  return <img style={{position: 'relative', top: 50}} src={logo}></img>;
};

export default CalenderLayout;
