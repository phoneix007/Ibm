import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Collection, CollectionItem, Card, Row, Col} from 'react-materialize';
import './MultiChoice.css';

class MultiChoice extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col s={8} offset="s4">
          {this.props.answers.map((answer, i) =>
            <Collection className="collection">
              <CollectionItem className="collectionItem"key={i} href='#' onClick={() => this.props.updateSelected(answer)}>
                {answer}
              </CollectionItem>
            </Collection>
            )}
          </Col>
        </Row>


 

        <br />
        <br />

        <Row>
          <Col s={8} offset="s4">
            <Card className='cardTitle'>
              <Row>
                You have selected: {this.props.selectedAnswer}
              </Row>
              <br />
              <Button className="blueBtn" onClick={this.props.handleSubmit}>Next</Button>
            </Card>
          </Col>
        </Row>

      </div>
    )
  }
}

MultiChoice.propTypes = {
  answers: PropTypes.array.isRequired,
  updateSelected: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default MultiChoice;
