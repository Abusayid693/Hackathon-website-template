import React, {useState, useEffect} from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import {Flexbox} from '../elements/Flexbox';
import {H3, P} from '../elements/Heading';
import * as H from './style';

interface eventType {
  title: string;
  timings: string;
  content: string;
  image?: string;
  ended: boolean;
  previousYoutubeRecording?: string; // If event ended provide recording
}

interface dataProps {
  day: number;
  dumpDay?:boolean;
  event: boolean;
  events: eventType[];
}

const data: dataProps[] = [
  {
    day: 1,
    event: true,
    events: [
      {
        title: 'Intro to python',
        timings: '12 AM - 1 Pm',
        content: 'Intro to python .....',
        ended: false,
      },
      {
        title: 'Intro to Java',
        timings: '12 AM - 1 Pm',
        content: 'Intro to python .....',
        ended: false,
      },
    ],
  },
  {
    day: 2,
    event: true,
    events: [
      {
        title: 'Intro to python',
        timings: '12 AM - 1 Pm',
        content: 'Intro to python .....',
        ended: false,
      },
      {
        title: 'Intro to Java',
        timings: '12 AM - 1 Pm',
        content: 'Intro to python .....',
        ended: false,
      },
    ],
  },
  {
    day: 3,
    event: false,
    events: [],
  },
  {
    day: 4,
    event: false,
    events: [],
  },
  {
    day: 5,
    event: false,
    events: [],
  },
  {
    day: 6,
    event: false,
    events: [],
  },
  {
    day: 7,
    event: false,
    events: [],
  },
  {
    day: 8,
    event: false,
    events: [],
  },
  {
    day: 9,
    event: false,
    events: [],
  },
  {
    day: 10,
    event: false,
    events: [],
  },
  {
    day: 11,
    event: false,
    events: [],
  },
  {
    day: 12,
    event: false,
    events: [],
  },
  {
    day: 13,
    event: false,
    events: [],
  },
  {
    day: 14,
    event: false,
    events: [],
  },
];

interface payloadTypes {
  type: string;
  data?: number | string | dataProps[];
}







export const Calender = () => {
  const initialState = {
    index: 1,
    selectedData: 0,
    month: 1,
    year: 2021,
    dates: data,
  };

  const [state, setState] = useState(initialState);

  const calenderReducer = (state = initialState, payload: payloadTypes) => {
    switch (payload.type) {
      case 'UPDATE_INDEX':
        // @ts-ignore
        setState(state => ({...state, index: payload.data}));
        break;
      case 'SHOW_EVENTS_FOR_SELECTED_DATE':
        // @ts-ignore
        setState(state => ({...state, selectedData: payload.data}));
        break; 
      case 'SWITCH_MONTHS':
        // @ts-ignore
        setState(state => ({...state, dates: payload.data}));
        break;  
    }
  };



  useEffect(()=>{

    let num = 28;

    let structureToHoldDates:dataProps[] = [];


    for (let i = 0; i<= num+4; i++){
       if(i>4){
        structureToHoldDates.push({
          day: i,
          event: true,
          dumpDay:false,
          events: [
            {
              title: 'Intro to python',
              timings: '12 AM - 1 Pm',
              content: 'Intro to python .....',
              ended: false,
            },
            {
              title: 'Intro to Java',
              timings: '12 AM - 1 Pm',
              content: 'Intro to python .....',
              ended: false,
            },
          ],
        })
       }
       else {
        structureToHoldDates.push(
          {
            day: i,
            event: false,
            dumpDay:true,
            events: [],
        })
       }
    }

    calenderReducer(state,{type:'SWITCH_MONTHS',data:structureToHoldDates})
 
  },[])




  if (state.index === 1) {
    return (
      <H.Container>
        <Flexbox className="card-top" flexRow>
          <H3 fontMax={20} color="white">
            Events schedule
          </H3>
          <Flexbox flexRow className="card-top-inner">
            <Flexbox justifyCenter alignCenter className="card-top-inner-item">
              <StaticImage src="../../images/left-icon.svg" alt="A dinosaur" />
            </Flexbox>
            <Flexbox justifyCenter alignCenter className="card-top-inner-item">
              <StaticImage src="../../images/right-icon.svg" alt="A dinosaur" />
            </Flexbox>
          </Flexbox>
        </Flexbox>
        <div className="card-body">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, j) => (
            <Flexbox alignCenter justifyCenter className="card-body-header">
              <P color="#9E9E9E">{day}</P>
            </Flexbox>
          ))}

          {state.dates.map((day, j) => (
            <Flexbox
              alignCenter
              justifyCenter
              className="card-body-inner"
              onClick={() => {
                // setIndex(2);
                calenderReducer(state,{type:'UPDATE_INDEX',data:2})
                // setSelectedDate(j);
                calenderReducer(state,{type:'SHOW_EVENTS_FOR_SELECTED_DATE',data:j})
              }}
            >
              <p>{day.day}</p>
            </Flexbox>
          ))}
        </div>
      </H.Container>
    );
  } else if (state.index === 2) {
    return (
      <H.Container>
        {state.dates[state.selectedData].event ? (
          state.dates[state.selectedData].events.map((event, j) => (
            <H.Event>
              <h3>{event.title}</h3>{' '}
            </H.Event>
          ))
        ) : (
          <p>No evnets</p>
        )}
      </H.Container>
    );
  }
  return <H.Container></H.Container>;
};
