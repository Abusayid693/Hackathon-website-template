import { Dispatch } from "react";

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

  export interface Action {
    type:
      | 'UPDATE_CALENDER_VIEW'
      | 'SHOW_EVENTS_FOR_SELECTED_DATE'
      | 'UPDATE_DATES'
      | 'MONTH_BACKWARD'
      | 'MONTH_FORWARD'
      | 'SHOW_SELECTED_EVENT_DETAILS';
    data: number | string | EventArrayType[];
  }

  export interface State {
    month: number;
    year: number;
    index: number;
    selectedData: any[];
    selectedEvent: {};
    dates: any[];
}

export interface ContextType{
  state:State;
  dispatch: Dispatch<Action>;
}