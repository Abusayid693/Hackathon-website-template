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
    | 'UPDATE_INDEX'
    | 'SHOW_EVENTS_FOR_SELECTED_DATE'
    | 'UPDATE_DATES'
    | 'MONTH_BACKYARD'
    | 'MONTH_FORWARD'
    | 'SHOW_SELECTED_EVENT_DETAILS';
  data?: number | string | EventArrayType[];
}

export const calenderReducer = (
  state: CalenderStateTypes,
  payload: payloadTypes,
) => {
  switch (payload.type) {
    case 'UPDATE_INDEX':
      return {...state, index: payload.data};
    case 'SHOW_EVENTS_FOR_SELECTED_DATE':
      return {...state, selectedData: payload.data};
    case 'UPDATE_DATES':
      return {...state, dates: payload.data};
    case 'MONTH_FORWARD':
      return {...state, month: state.month + 1};

    case 'MONTH_BACKYARD':
      return {...state, month: state.month - 1};
    default:
      return state;
  }
};