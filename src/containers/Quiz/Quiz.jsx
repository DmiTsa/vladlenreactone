import { Component } from 'react';
import styleclasses from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    name: 'Главный квиз',
    nQuestions: 2,
    quiz: [
      {
        id: '1',
        question: '2 + 2 ?',
        answers: ['5', '4', '3', '88'],
        rightIndex: 1,
      },
      {
        id: '2',
        question: '2 + 10 ?',
        answers: ['0', '4', '12', '7', '69'],
        rightIndex: 1,
      },
    ],
  };

  render() {
    return (
      <div className={styleclasses.Quiz}>
        <h1>quiz</h1>
        <ActiveQuiz answers={this.state.quiz[0]} />
      </div>
    );
  }
}

export default Quiz;
