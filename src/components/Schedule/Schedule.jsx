import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {ViewState} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  DayView
} from "@devexpress/dx-react-scheduler-material-ui";
import "./Styles.css";
import SchedulerData from "./data";

export default class Schedule extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: SchedulerData
    };
  }

  render() {
    const {data} = this.state;

    return (
      <div className="schedule">
        <Paper>
          <Scheduler data={data}>
            <ViewState defaultCurrentDate="2021-11-20" />
            <DayView startDayHour={9} endDayHour={18} />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments />
          </Scheduler>
        </Paper>
      </div>
    );
  }
}
