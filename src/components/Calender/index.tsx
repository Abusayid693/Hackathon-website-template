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

export const Calender = () => {
  const [index, setIndex] = useState(1);
  const [selectedDate, setSelectedDate] = useState(0);

  if (index === 1) {
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

          {data.map((day, j) => (
            <Flexbox
              alignCenter
              justifyCenter
              className="card-body-inner"
              onClick={() => {
                setIndex(2);
                setSelectedDate(j);
              }}
            >
              <p>{day.day}</p>
            </Flexbox>
          ))}
        </div>
      </H.Container>
    );
  } else if (index === 2) {
    return (
      <H.Container>
        {data[selectedDate].event ? (
          data[selectedDate].events.map((event, j) => (
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
