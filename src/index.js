import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './containers/navbar/App.jsx';

const rootElement = document.getElementById('body');

ReactDOM.render(
  <React.Fragment>
    <Nav />
  </React.Fragment>,
  rootElement
);
