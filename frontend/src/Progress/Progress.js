import React from 'react';
import { Line } from 'rc-progress';
import PropTypes from 'prop-types';
import './Progress.css';

// stateless component

const Progress = ({ current_step, question_length }) => {
  let percent=0
  percent = current_step / question_length * 100;

  return (
    <div>
      <p>Progress: {current_step}/{question_length}</p>
      <Line className="progressBar" percent={percent} strokeWidth="1" strokeColor="rgb(234, 32, 80)" />
    </div>
  )
}

Progress.propTypes = {
  current_step: PropTypes.number,
  question_length: PropTypes.number
}

export default Progress;
