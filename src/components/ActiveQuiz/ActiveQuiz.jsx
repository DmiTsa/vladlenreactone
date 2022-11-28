import styleClasses from './ActiveQuiz.module.css';
import AnsversList from '../AnswersList/AnswersList';

function ActiveQuiz(props) {
  const { id, question, answers, rightIndex } = props.answers;
  return (
    <div className={styleClasses.ActiveQuiz}>
      <p>
        <span>{`Вопрос № ${id}`} (из 12)</span>
      </p>
      <p>
        <strong>{question}</strong>
      </p>
      <p>Варианты ответа:</p>
      <AnsversList answers={answers} rightIndex={rightIndex} />
    </div>
  );
}

export default ActiveQuiz;

// id: 'q1',
// question: '2 + 2 ?',
// answers: ['5', '4', '3', '88'],
// rightIndex: 1,
