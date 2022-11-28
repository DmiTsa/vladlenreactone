import Answer from '../Answer/Answer';
import styleClasses from './AnswersList.module.css';

function AnswersList({ answers, onAnswerClick }) {
  return (
    <ul className={styleClasses.ActiveQuizList}>
      {answers.map((answer, i) => {
        return (
          <Answer key={i} text={answer} num={i} onAnswerClick={onAnswerClick} />
        );
      })}
    </ul>
  );
}
export default AnswersList;
