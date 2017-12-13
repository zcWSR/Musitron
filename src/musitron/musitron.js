import React from 'react';
import ReactDOM from 'react-dom';
import Main from './views/main';
import PlayerStore from './store';

const start = (Entry, store) => {
  ReactDOM.render(
    <Entry store={store} />,
    document.getElementById('entry'),
  );
};

start(Main, PlayerStore);
