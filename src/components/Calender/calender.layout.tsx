import React, {useContext} from 'react';
import {calenderContext} from '../../Context/calender.context';
import {StaticImage} from 'gatsby-plugin-image';
import {Flexbox} from '../elements/Flexbox';
import {H3, P} from '../elements/Heading';
import * as H from './style';

interface actionTypes{
    type:string;
    data?:number|string;
}


interface CalenderLayoutProps {
    handleActionProcced?:actionTypes;
    handleActionBack?:actionTypes
}


export const CalenderLayout:React.FC<CalenderLayoutProps> = ({children,handleActionProcced,handleActionBack})=>{
    const contextTesting = useContext(calenderContext);
    // @ts-ignore
    const [,dispatch] = contextTesting;
    return (
        <H.Container>
        <Flexbox className="card-top" flexRow>
        <H3 fontMax={20} color="white">
          {/* @ts-ignore */}
          Events schedule
        </H3>
        <Flexbox flexRow className="card-top-inner">
          <Flexbox
            justifyCenter
            alignCenter
            className="card-top-inner-item"
            onClick={() => dispatch(handleActionBack)}
          >
            <StaticImage src="../../images/left-icon.svg" alt="A dinosaur" />
          </Flexbox>
          <Flexbox
            justifyCenter
            alignCenter
            className="card-top-inner-item"
            onClick={() => dispatch(handleActionProcced)}
          >
            <StaticImage src="../../images/right-icon.svg" alt="A dinosaur" />
          </Flexbox>
        </Flexbox>
      </Flexbox>
      {children}
      </H.Container>
    )
}