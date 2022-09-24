import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './containers/navbar/App.jsx';
import {CalenderContextProvider} from './Context/calender.context';

const rootElement = document.getElementById('body');

ReactDOM.render(
  <React.Fragment>
    <CalenderContextProvider>
      <Nav />
    </CalenderContextProvider>
  </React.Fragment>,
  rootElement
);
