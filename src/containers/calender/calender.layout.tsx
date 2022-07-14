import React, {useContext} from 'react';
import {months} from '../../constants/index';
import {calenderContext} from '../../Context/calender.context';
import {Flexbox} from '../../elements/Flexbox';
import * as H from './style';

interface actionTypes {
  type: string;
  data?: number | string;
}

interface CalenderLayoutProps {
  handleActionProcced?: actionTypes;
  handleActionBack?: actionTypes;
}

export const CalenderLayout: React.FC<CalenderLayoutProps> = ({
  children,
  handleActionProcced,
  handleActionBack
}) => {
  const contextTesting = useContext(calenderContext);
  // @ts-ignore
  const [state, dispatch] = contextTesting;
  return (
    <H.Container>
      <Flexbox className="card-top" flexRow>
        <h3 style={{fontSize: 20}} color="white">
          Events schedule {months[state.month - 1]} {state.year}
        </h3>
        <Flexbox flexRow className="card-top-inner">
          <Flexbox
            justifyCenter
            alignCenter
            className="card-top-inner-item"
            onClick={() => dispatch(handleActionBack)}
          >
            P
          </Flexbox>
          <Flexbox
            justifyCenter
            alignCenter
            className="card-top-inner-item"
            onClick={() => dispatch(handleActionProcced)}
          >
            N
          </Flexbox>
        </Flexbox>
      </Flexbox>
      {children}
    </H.Container>
  );
};
