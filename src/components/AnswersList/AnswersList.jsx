import Answer from '../Answer/Answer';
import styleClasses from './AnswersList.module.css';

function AnswersList(props) {
  return (
    <p>
      <ol className={styleClasses.ActiveQuizList}>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </ol>
    </p>
  );
}
export default AnswersList;
