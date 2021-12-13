import React, {useEffect, useContext} from 'react';
// Types
import {EventArrayType} from '../../types/calenderState.types';
import {weekDays} from '../../constants/week';
// @ts-ignore
export const getDatesForMonth = state => {
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

// =====================================================================================

// @ts-ignore
export const calenderMainLogic = (state, dispatch, data) => {

  let structureToHoldDates: EventArrayType[] = [];

  const [num, paddingDay, totalNumOfDaysInPreviousMonths] =
    getDatesForMonth(state);

  for (let i = 1; i <= num + paddingDay; i++) {
    if (i > paddingDay) {
      const currentDay = i - paddingDay;
      const currentMonth = state.month;
      const currentYear = state.year;
      const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

      // Searching in event list for matching events
      // @ts-ignore
      let obj = data.find(o => o.day === currentDate);
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
};
