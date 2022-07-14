import React, {useContext, useEffect} from 'react';
import {CALENDER_VIEW, EVENT_VIEW} from '../../constants';
import {calenderContext} from '../../Context/calender.context';
import {Flexbox} from '../../elements/Flexbox';
import {calenderMainLogic} from './calender.function';
import {CalenderLayout} from './calender.layout';
import * as H from './style';

export const Calender = ({data}: any) => {
  const contextTesting = useContext(calenderContext);
  // @ts-ignore
  const [state, dispatch] = contextTesting;

  useEffect(() => {
    calenderMainLogic(state, dispatch, data);
  }, [state.month]);

  if (state.index === CALENDER_VIEW) {
    return (
      <CalenderLayout
        handleActionProcced={{type: 'MONTH_FORWARD'}}
        handleActionBack={{type: 'MONTH_BACKWARD'}}
      >
        <div className="card-body">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, j) => (
            <Flexbox alignCenter justifyCenter className="card-body-header">
              <p color="#9E9E9E">{day}</p>
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
                  dispatch({type: 'UPDATE_CALENDER_VIEW', data: 2});
                  dispatch({
                    type: 'SHOW_EVENTS_FOR_SELECTED_DATE',
                    data: state.dates[j].events
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
  } else if (state.index === EVENT_VIEW) {
    return (
      <CalenderLayout
        handleActionBack={{type: 'UPDATE_CALENDER_VIEW', data: 1}}
        handleActionProcced={{type: 'DISABLED'}}
      >
        <H.EventContainer>
          {state.selectedData.map((event: any, j: number) => (
            <H.Event
              key={j}
              onClick={() => {
                window.open(event.link, '_blank');
              }}
            >
              <div className="event-subcard">
                <h3>{event.title}</h3>
                <p>{event.timings}</p>
              </div>
              <button>Add to calender</button>
            </H.Event>
          ))}
        </H.EventContainer>
      </CalenderLayout>
    );
  }
  return <H.Container></H.Container>;
};
