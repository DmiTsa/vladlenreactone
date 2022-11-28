import styleClasses from './ActiveQuiz.module.css';
import AnsversList from '../AnswersList/AnswersList';

function ActiveQuiz(props) {
  return (
    <div className={styleClasses.ActiveQuiz}>
      <p>
        <span>Вопрос № 1 (из 12)</span>
      </p>
      <p>
        <strong>Как дела?</strong>
      </p>
      <p>Варианты ответа:</p>
      <AnsversList />
    </div>
  );
}

export default ActiveQuiz;
