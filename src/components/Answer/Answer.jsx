import styleclasses from './Answer.module.css';

function Answer({ text, num, onAnswerClick }) {
  return (
    <li className={styleclasses.Answer} onClick={() => onAnswerClick(num)}>
      {`${num + 1} - ${text}`}
    </li>
  );
}
export default Answer;
