export interface EventType {
    title: string;
    timings: string;
    content: string;
    image?: string;
    ended: boolean;
    previousYoutubeRecording?: string; // If event ended provide recording
    organizer?: string;
    role?:string;
    company?:string;
  }

  export interface EventArrayType {
    day: number;
    event: boolean;
    events: EventType[];
    dumpDay:boolean;
  }
  
  
// This is Global state types (i.e store type for calender global store)
  export interface CalenderStateTypes {
    index: number;
    selectedData: EventType[];
    selectedEvent:EventType,
    month: number;
    year: number;
    dates: EventArrayType[];
  }