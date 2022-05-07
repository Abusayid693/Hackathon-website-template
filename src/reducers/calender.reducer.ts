import {
  CalenderStateTypes,
  EventArrayType
} from '../types/calenderState.types';

export const initialState = {
  index: 1,
  selectedData: [],
  selectedEvent: {},
  month: 12,
  year: 2021,
  dates: [],
};

interface payloadTypes {
  type:
    | 'UPDATE_CALENDER_VIEW'
    | 'SHOW_EVENTS_FOR_SELECTED_DATE'
    | 'UPDATE_DATES'
    | 'MONTH_BACKWARD'
    | 'MONTH_FORWARD'
    | 'SHOW_SELECTED_EVENT_DETAILS';
  data?: number | string | EventArrayType[];
}

export const calenderReducer = (
  state: CalenderStateTypes,
  payload: payloadTypes,
) => {
  switch (payload.type) {
    case 'UPDATE_CALENDER_VIEW':
      return {...state, index: payload.data};
    case 'SHOW_EVENTS_FOR_SELECTED_DATE':
      return {...state, selectedData: payload.data};
    case 'UPDATE_DATES':
      return {...state, dates: payload.data};
    case 'MONTH_FORWARD': {
      if(state.month === 12) 
        return {...state, month: 1, year: state.year + 1 }
      return {...state, month: state.month + 1}
    }

    case 'MONTH_BACKWARD': {
      if(state.month === 1) 
        return {...state, month: 12, year: state.year - 1 }
      return {...state, month: state.month - 1};
    }
    default:
      return state;
  }
};