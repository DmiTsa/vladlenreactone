import { Component } from 'react';
import styleclasses from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    name: 'Главный квиз',
    currentQuestions: 0,
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
        rightIndex: 2,
      },
    ],
  };

  onAnswerClickHandler = (answerIndex) => {
    let resAnswer =
      answerIndex === this.state.quiz[this.state.currentQuestions].rightIndex;

    if (this.state.currentQuestions < this.state.quiz.length - 1) {
      this.setState({ currentQuestions: this.state.currentQuestions + 1 });
    } else {
      console.log('finish');
    }
    // console.log('правильно? ' + resAnswer);
    // console.log(this.state.currentQuestions);
    return;
  };

  render() {
    return (
      <div className={styleclasses.Quiz}>
        <h1>{this.state.name}</h1>
        <ActiveQuiz
          answers={this.state.quiz[this.state.currentQuestions]}
          qestionsCount={this.state.quiz.length}
          currentQuestions={this.state.currentQuestions}
          onAnswerClick={this.onAnswerClickHandler}
        />
      </div>
    );
  }
}

export default Quiz;
