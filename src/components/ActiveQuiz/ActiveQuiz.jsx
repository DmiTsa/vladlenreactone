import styleClasses from './ActiveQuiz.module.css';

function ActiveQuiz(props) {
  return (
    <div className={styleClasses.ActiveQuiz}>
      <p>
        <span>Вопрос № 1</span>
      </p>
      <p>
        <strong>Как дела?</strong>
      </p>
      <p>Варианты ответа:</p>
      <p>
        <ol className={styleClasses.ActiveQuizList}>
          <li>Ответ 1</li>
          <li>Ответ 2</li>
          <li>Ответ 3</li>
          <li>Ответ 4</li>
        </ol>
      </p>
    </div>
  );
}

export default ActiveQuiz;
