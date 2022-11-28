import styleClasses from './ActiveQuiz.module.css';
import AnsversList from '../AnswersList/AnswersList';

function ActiveQuiz(props) {
  const { onAnswerClick, qestionsCount, currentQuestions } = props;
  const { question, answers } = props.answers;
  return (
    <div className={styleClasses.ActiveQuiz}>
      <p>
        <span>{`Вопрос № ${currentQuestions + 1} из ${qestionsCount}`}</span>
      </p>
      <p>
        <strong>{question}</strong>
      </p>
      <p>Варианты ответа:</p>
      <AnsversList answers={answers} onAnswerClick={onAnswerClick} />
    </div>
  );
}

export default ActiveQuiz;

// id: 'q1',
// question: '2 + 2 ?',
// answers: ['5', '4', '3', '88'],
// rightIndex: 1,
