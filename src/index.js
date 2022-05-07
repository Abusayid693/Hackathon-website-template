import React from 'react';
import ReactDOM from 'react-dom';
import LOADER from './components/Loading/loading.jsx';
import NAV from './containers/navbar/App.jsx';
import {CalenderContextProvider} from './Context/calender.context';

const rootElement = document.getElementById('body');
const footer = document.getElementById('footer');

ReactDOM.render(
  <React.Fragment>
    <CalenderContextProvider>
      <NAV />
    </CalenderContextProvider>
  </React.Fragment>,
  rootElement
);

ReactDOM.render(
  <React.Fragment>
    <LOADER />
  </React.Fragment>,
  footer
);
