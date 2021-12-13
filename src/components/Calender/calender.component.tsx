import React, {useEffect, useContext} from 'react';
import {calenderContext} from '../../Context/calender.context';
import {Flexbox} from '../elements/Flexbox';
import {H3, P} from '../elements/Heading';

import {calenderMainLogic} from './calender.function';

// Layout
import {CalenderLayout} from './calender.layout';

// Styles
import * as H from './style';

// @ts-ignore
export const Calender = ({data}) => {
  const contextTesting = useContext(calenderContext);
  // @ts-ignore
  const [state, dispatch] = contextTesting;

  useEffect(() => {
    calenderMainLogic(state, dispatch, data);
  }, [state.month]);

  if (state.index === 1) {
    return (
      <CalenderLayout
        handleActionProcced={{type: 'MONTH_FORWARD'}}
        handleActionBack={{type: 'MONTH_BACKYARD'}}
      >
        <div className="card-body">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, j) => (
            <Flexbox alignCenter justifyCenter className="card-body-header">
              <P color="#9E9E9E">{day}</P>
            </Flexbox>
          ))}
          {/* @ts-ignore */}
          {state.dates.map((day, j) => (
            <Flexbox
              alignCenter
              justifyCenter
              className={
                day.dumpDay
                  ? 'card-body-inner'
                  : 'card-body-inner card-body-inner__active'
              }
              onClick={() => {
                if (day.event) {
                  dispatch({type: 'UPDATE_INDEX', data: 2});
                  dispatch({
                    type: 'SHOW_EVENTS_FOR_SELECTED_DATE',
                    data: state.dates[j].events,
                  });
                } else {
                  alert('No events');
                }
              }}
            >
              {day.event ? (
                <p className="card-body-inner__active__event">{day.day}</p>
              ) : (
                <p>{day.day}</p>
              )}
            </Flexbox>
          ))}
        </div>
      </CalenderLayout>
    );
  } else if (state.index === 2) {
    return (
      <CalenderLayout
        handleActionBack={{type: 'UPDATE_INDEX', data: 1}}
        handleActionProcced={{type: 'DISABLED'}}
      >
        <H.EventContainer>
          {state.selectedData.map((event: any, j: number) => (
            <H.Event
              key={j}
              onClick={() => {
                dispatch({type: 'UPDATE_INDEX', data: 3});
                dispatch({type: 'SHOW_SELECTED_EVENT_DETAILS', data: event});
              }}
            >
              <h3>{event.title}</h3>
              <p>{event.timings}</p>
            </H.Event>
          ))}
        </H.EventContainer>
      </CalenderLayout>
    );
  } else if (state.index === 3) {
    return (
      <CalenderLayout
        handleActionProcced={{type: 'DISABLED'}}
        handleActionBack={{type: 'UPDATE_INDEX', data: 2}}
      >
        <H.EventLayout>
          <h2>{state.selectedEvent.title}</h2>
          <p> {state.selectedEvent.timings}</p>
          <div className="image-layout">
            <img src="https://i.imgur.com/EjM8qVK.jpg" alt="A dinosaur" />
            <p>{state.selectedEvent.organizer}</p>
            <h5>{state.selectedEvent.role}</h5>
            <h5>{state.selectedEvent.company}</h5>
          </div>
          <p>{state.selectedEvent.content}</p>

          <button>
            {state.selectedEvent.timings} <br />
            <p>Add to calender</p>
          </button>
        </H.EventLayout>
      </CalenderLayout>
    );
  }
  return <H.Container></H.Container>;
};
