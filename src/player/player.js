import React from 'react';
import ReactDOM from 'react-dom';
import Main from './views/main';

const start = (Entry) => {
  ReactDOM.render(
    <Entry />,
    document.getElementById('entry'),
  );
};

start(Main);
