import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('retryQuiz() resets quiz state', () => {
  let component = shallow(<App />);
  component.instance().setState = jest.fn();

  component.instance().state = {
    progress: 2,
    selected: 'Yowzer',
    score: 4
  };

  component.instance().retryQuiz();

  expect(component.instance().setState).toHaveBeenCalledWith({
    progress: 0,
    selected: 'None yet!',
    score: 0
  });
})
