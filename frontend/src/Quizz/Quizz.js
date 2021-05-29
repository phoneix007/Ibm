import React from 'react';
import axios from 'axios';
import Flexbox from 'flexbox-react';
//import './App.css';
import Question from '../Question/Question';
import Progress from '../Progress/Progress';
import MultiChoice from '../MultiChoice/MultiChoice';
import Results from '../Results/Results';
 class Quizz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'None yet!',
      score: 0,
      loading: true,
    data: null,
    quiz_data:"",
    
    }
    //this.state.quiz_data="";
    this.updateSelected = this.updateSelected.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.retryQuiz = this.retryQuiz.bind(this);
    
    axios.get("http://localhost:3002/content").then((res) => {
      //console.log(res);
  }).then((myJson)=>{JSON.stringify(myJson); this.state.quiz_data=myJson})
    
    // this.state.quiz_data = [{"AQ_id":1,"AQ_SeqNum":1,"AQ_Question":"ur name?","AQ_Type":"o","AQ_Option1":"a","AQ_Option2":"b","AQ_Option3":"c","AQ_Option4":"d","AQ_AnswerText":"b","AM_id":1,"CO_id":1},{"AQ_id":2,"AQ_SeqNum":2,
    // "AQ_Question":"age?","AQ_Type":"o","AQ_Option1":"12","AQ_Option2":"13","AQ_Option3":"14","AQ_Option4":"18","AQ_AnswerText":"18","AM_id":1,"CO_id":1}]
  }
  async componentDidMount()
  {
    await fetch("http://localhost:3002/content").then((response) => {
      return response.json();
    })
    .then((myJson) => {
     (JSON.stringify(myJson));
      this.setState({quiz_data: myJson});
      
    })

  }
  
  
  submitAnswer() {
    if (this.state.selected !== 'None yet!') {
      if (this.state.selected === this.state.quiz_data[this.state.progress].AQ_AnswerText) {
        this.setState({
          score: this.state.score + 1,
          progress: this.state.progress + 1,
          selected: 'None yet!'
        })
      } else {
        this.setState({
          progress: this.state.progress + 1,
          selected: 'None yet!'
        })
      }
    }
  }

  updateSelected(answer) {
    this.setState({
      selected: answer
    })
  }

  retryQuiz() {
    this.setState({
      progress: 0,
      selected: 'None yet!',
      score: 0
    })
  }

  render() {

    return (
        
        <Flexbox element="div" className="App" flexDirection="column" minHeight="100vh">
          <h2>Quiz</h2>

        {/* {console.log(this.state.quiz_data)} */}
      ( {this.state.quiz_data?(<Progress current_step={this.state.progress} question_length={this.state.quiz_data.length} />):null}
        {this.state.progress < this.state.quiz_data.length ? (
          <div>

              <Question current_question={this.state.quiz_data[this.state.progress].AQ_Question} />

              <MultiChoice
                answers={[this.state.quiz_data[this.state.progress].AQ_Option1,
                this.state.quiz_data[this.state.progress].AQ_Option2,
                  this.state.quiz_data[this.state.progress].AQ_Option3,
                  this.state.quiz_data[this.state.progress].AQ_Option4]
                }
                updateSelected={this.updateSelected}
                handleSubmit={this.submitAnswer}
                selectedAnswer={this.state.selected} />

          </div>
        )
        : (

            <Results score={this.state.score} end_message="Congratulations, you have finished!" retry={this.retryQuiz} />

          )}
        
    );
    </Flexbox>
    )
  }
}

export default Quizz;
