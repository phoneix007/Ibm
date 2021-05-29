import React from 'react';
import ReactDOM from 'react-dom';
import Progress from './Progress';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Progress />, div);
});

