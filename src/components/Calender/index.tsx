import React, {useEffect, useContext} from 'react';
import {calenderContext} from '../Context/calender.context';
import {Flexbox} from '../elements/Flexbox';
import {StaticImage} from 'gatsby-plugin-image';
import {StaticQuery, graphql} from 'gatsby';
import {H3, P} from '../elements/Heading';
import * as H from './style';

// Demo API data
import {calenderData} from './api';

// Layout
import {CalenderLayout} from './calender.layout';

//
import {EventArrayType} from '../../types/calenderState.types';

// @ts-ignore
export const Calender = ({data}) => {
  console.log('MDX file :',data.allMdx.edges);
  const contextTesting = useContext(calenderContext);
  // @ts-ignore
  const [state, dispatch] = contextTesting;

  useEffect(() => {
    let structureToHoldDates: EventArrayType[] = [];

    const [num, paddingDay, totalNumOfDaysInPreviousMonths] =
      getDatesForMonth();

    for (let i = 1; i <= num + paddingDay; i++) {
      if (i > paddingDay) {
        const currentDay = i - paddingDay;
        const currentMonth = state.month;
        const currentYear = state.year;
        const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

        // Searching in event list for matching events
        let obj = calenderData.find(o => o.day === currentDate);
        if (obj) {
          console.log('Find date in :', obj);

          structureToHoldDates.push({
            day: i - paddingDay,
            event: true,
            dumpDay: false,
            events: obj.events,
          });
        } else {
          structureToHoldDates.push({
            day: i - paddingDay,
            event: false,
            dumpDay: false,
            events: [],
          });
        }
      } else {
        structureToHoldDates.push({
          day: totalNumOfDaysInPreviousMonths - paddingDay + i,
          event: false,
          dumpDay: true,
          events: [],
        });
      }
    }

    dispatch({type: 'UPDATE_DATES', data: structureToHoldDates});
  }, [state.month]);

  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const getDatesForMonth = () => {
    const [firstDay, lastDay, lastDayOfPreviousMonth] = [
      new Date(state.year, state.month - 1, 1),
      new Date(state.year, state.month, 0),
      new Date(state.year, state.month - 1, 0),
    ];

    const [
      firstDayOfTheMonth,
      lastDayOfTheMonth,
      totalNumOfDays,
      totalNumOfDaysInPreviousMonths,
    ] = [
      firstDay.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      lastDay.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      lastDay.getDate(),
      lastDayOfPreviousMonth.getDate(),
    ];

    const extraDays = weekDays.indexOf(firstDayOfTheMonth.split(',')[0]);
    console.log(
      firstDayOfTheMonth + ' - ' + lastDayOfTheMonth + '- ' + totalNumOfDays,
    );
    console.log('Padding days :', extraDays);
    return [totalNumOfDays, extraDays, totalNumOfDaysInPreviousMonths];
  };

  if (state.index === 1) {
    return (
      <CalenderLayout
        handleActionProcced={{type: 'MONTH_FORWARD'}}
        handleActionBack={{type: 'MONTH_BACKYARD'}}
      >
        {data.allMdx.edges[0].node.frontmatter.title}
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

// @ts-ignore
export default function MyCalender(props) {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allMdx(filter: {fileAbsolutePath: {regex: "/content/schedule/"}}) {
            edges {
              node {
                fileAbsolutePath
                id
                frontmatter {
          title
          day
          items{
          value
            title
            timings
            content
          }
        }
              }
            }
          }
        }
      `}
      render={data => <Calender data={data} {...props} />}
    />
  );
}

// Calender.propTypes = {
//   data: PropTypes.shape({
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }).isRequired,
//     }).isRequired,
//   }).isRequired,
// }
