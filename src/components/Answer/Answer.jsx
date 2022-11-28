import styleclasses from './Answer.module.css';

function Answer({ text, num }) {
  return <li className={styleclasses.Answer}>{`${num + 1} - ${text}`}</li>;
}
export default Answer;
