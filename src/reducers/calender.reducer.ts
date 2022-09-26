import {Action, State} from '../../types/calenderState.types';
import {CALENDER_VIEW} from '../constants';
import {calenderStartingDate} from '../Module/General';

export const initialState = {
  index: CALENDER_VIEW,
  selectedData: [],
  selectedEvent: {},
  dates: [],
  ...calenderStartingDate
};

export const calenderReducer = (state: State, payload: Action): State => {
  switch (payload.type) {
    case 'UPDATE_CALENDER_VIEW':
      return {...state, index: payload.data as number};
    case 'SHOW_EVENTS_FOR_SELECTED_DATE':
      return {...state, selectedData: payload.data as any[]};
    case 'UPDATE_DATES':
      return {...state, dates: payload.data as any[]};
    case 'MONTH_FORWARD': {
      if (state.month === 12) return {...state, month: 1, year: state.year + 1};
      return {...state, month: state.month + 1};
    }

    case 'MONTH_BACKWARD': {
      if (state.month === 1) return {...state, month: 12, year: state.year - 1};
      return {...state, month: state.month - 1};
    }
    default:
      return state;
  }
};
