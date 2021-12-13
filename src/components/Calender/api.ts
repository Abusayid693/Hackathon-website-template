interface eventType {
    title: string;
    timings: string;
    content: string;
    image?: string;
    ended: boolean;
    previousYoutubeRecording?: string; // If event ended provide recording
    organizer?: string;
  }
  
  interface dataProps {
    day?: number | string;
    month?: number;
    year?: number;
    dumpDay?: boolean;
    event: boolean;
    events: eventType[];
  }
  
  export const data: dataProps[] = [
    {
      day: '1-12-2021',
      event: true,
      events: [
        {
          title: 'Intro to deep learning',
          timings: '12 AM - 1 Pm',
          content: 'Intro to python .....',
          ended: false,
          image: 'https://i.imgur.com/c5CxFPs.png',
          organizer: 'Rahul Dravid',
        },
        {
          title: 'Intro to Java',
          timings: '12 AM - 1 Pm',
          content: 'Intro to python .....',
          ended: false,
          image: 'https://i.imgur.com/c5CxFPs.png',
          organizer: 'Rahul Dravid',
        },
        {
          title: 'Intro to deep learning',
          timings: '12 AM - 1 Pm',
          content: 'Intro to python .....',
          ended: false,
          image: 'https://i.imgur.com/c5CxFPs.png',
          organizer: 'Rahul Dravid',
        },
        {
          title: 'Intro to deep learning',
          timings: '12 AM - 1 Pm',
          content: 'Intro to python .....',
          ended: false,
          image: 'https://i.imgur.com/c5CxFPs.png',
          organizer: 'Rahul Dravid',
        },
        {
          title: 'Intro to deep learning',
          timings: '12 AM - 1 Pm',
          content: 'Intro to python .....',
          ended: false,
          image: 'https://i.imgur.com/c5CxFPs.png',
          organizer: 'Rahul Dravid',
        },
        {
          title: 'Intro to deep learning',
          timings: '12 AM - 1 Pm',
          content: 'Intro to python .....',
          ended: false,
          image: 'https://i.imgur.com/c5CxFPs.png',
          organizer: 'Rahul Dravid',
        },
      ],
    },
    {
      day: '2-12-2021',
      event: true,
      events: [
        {
          title: 'Intro to python',
          timings: '12 AM - 1 Pm',
          content: 'Intro to python .....',
          ended: false,
          image: 'https://i.imgur.com/c5CxFPs.png',
          organizer: 'Rahul Dravid',
        },
        {
          title: 'Intro to Java',
          timings: '12 AM - 1 Pm',
          content: 'Intro to python .....',
          ended: false,
          image: 'https://i.imgur.com/c5CxFPs.png',
          organizer: 'Rahul Dravid',
        },
      ],
    },
    {
      day: '1-11-2021',
      event: true,
      events: [
        {
          title: 'C++ STL in advanced',
          timings: '12 AM - 1 Pm',
          content: 'Intro to python .....',
          ended: false,
          image: 'https://i.imgur.com/c5CxFPs.png',
          organizer: 'Rahul Dravid',
        },
        {
          title: 'Intro to web Programming',
          timings: '12 AM - 1 Pm',
          content: 'Intro to python .....',
          ended: false,
          image: 'https://i.imgur.com/c5CxFPs.png',
          organizer: 'Rahul Dravid',
        },
      ],
    },
  ];