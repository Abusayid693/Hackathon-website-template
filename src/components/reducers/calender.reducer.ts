import { Reducer } from 'react'
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
  dumpDay?: boolean;
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

export const initialState = {
  index: 1,
  selectedData: 0,
  month: 12,
  year: 2021,
  dates: data,
};

interface payloadTypes {
  type: 'UPDATE_INDEX' |'SHOW_EVENTS_FOR_SELECTED_DATE' | 'UPDATE_DATES' | 'MONTH_BACKYARD' | 'MONTH_FORWARD';
  data?: number | string | dataProps[];
}

interface State {
  index: number;
  selectedData: number;
  month: number;
  year: number;
  dates: dataProps[];
}

export const calenderReducer = (state: State, payload: payloadTypes) => {
  switch (payload.type) {
    case 'UPDATE_INDEX':
      // @ts-ignore
      return {...state, index: payload.data};
    case 'SHOW_EVENTS_FOR_SELECTED_DATE':
      // @ts-ignore
      return {...state, selectedData: payload.data};
    case 'UPDATE_DATES':
      // @ts-ignore
      return {...state, dates: payload.data};
    case 'MONTH_FORWARD':
      // @ts-ignore
      return {...state, month: state.month + 1};

    case 'MONTH_BACKYARD':
      // @ts-ignore
      return {...state, month: state.month - 1};
    default:
      return state;
  }
};
