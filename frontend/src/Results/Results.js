import React, { Component } from 'react';
import { Button } from 'react-materialize';

import PropTypes from 'prop-types';
import './Results.css';

class Results extends Component {
  render() {
    return  (
      <div>
        <p>{this.props.end_msg}</p>
        <p>Your score was: {this.props.score}</p>
        <Button onClick={this.props.retry}>Retry</Button>
      </div>
    )
  }
}

Results.propTypes = {
  end_msg: PropTypes.string,
  score: PropTypes.number.isRequired,
  retry: PropTypes.func.isRequired
}

export default Results;
