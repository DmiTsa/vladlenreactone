import Answer from '../Answer/Answer';
import styleClasses from './AnswersList.module.css';

function AnswersList({ answers, rightIndex }) {
  return (
    <ul className={styleClasses.ActiveQuizList}>
      {answers.map((answer, i) => {
        return <Answer key={i} text={answer} num={i} />;
      })}
    </ul>
  );
}
export default AnswersList;
