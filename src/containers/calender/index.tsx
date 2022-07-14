import React from 'react';
import {schedule} from '../../Module/General';
import {Calender} from './calender.component';

export default function MyCalender(props: any) {
  return <Calender data={schedule} {...props} />;
}
