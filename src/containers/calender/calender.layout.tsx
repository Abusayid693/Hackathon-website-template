import React, {useContext} from 'react';
import {CALENDER_VIEW} from '../../constants';
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

const CalenderLayout: React.FC<CalenderLayoutProps> = ({
  children,
  handleActionProcced,
  handleActionBack
}) => {
  const contextTesting = useContext(calenderContext);
  const {state, dispatch} = contextTesting as any;
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
            className={`card-top-inner-item ${
              state.index !== CALENDER_VIEW && 'card-top-inner-item__disabled'
            }`}
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

export default CalenderLayout;
