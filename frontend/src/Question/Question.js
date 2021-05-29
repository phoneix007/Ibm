import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Question.css';

class Question extends Component {
  render() {
    return <h4>{this.props.current_question}</h4>
  }
}

Question.propTypes = {
  current_question: PropTypes.string.isRequired
}

export default Question;
