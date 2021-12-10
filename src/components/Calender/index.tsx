import React, {useState, useEffect} from 'react';
import {Flexbox} from '../elements/Flexbox';
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
        {data.map((day, j) => (
          <Flexbox
            alignCenter
            justifyCenter
            className="card"
            onClick={() => {
              setIndex(2);
              setSelectedDate(j);
            }}
          >
            <p>{day.day}</p>
          </Flexbox>
        ))}
      </H.Container>
    );
  } else if (index === 2) {
    return (
      <H.Container>
        {data[selectedDate].event ? (
          data[selectedDate].events.map((event, j) => <h3>{event.title}</h3>)
        ) : (
          <p>No evnets</p>
        )}
      </H.Container>
    );
  }
  return <H.Container></H.Container>;
};
