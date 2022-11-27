import { Component } from 'react';
import styleclasses from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    quiz: null,
  };

  render() {
    return (
      <div className={styleclasses.Quiz}>
        <h1>quiz</h1>
        <ActiveQuiz />
      </div>
    );
  }
}

export default Quiz;
