
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
