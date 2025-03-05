import { useState } from 'react';
import { listQuestion } from '../objet/listQuestion';

export default function Jeu() {
  const [indexQuestion, setIndexQuestion] = useState(0);
  const question = listQuestion[indexQuestion];
  const [score, setScore] = useState(0);
  const [answerChoiced, setAnswerChoiced] = useState(0);

  function handleValider() {
    // if(answerChoiced)
    setScore(score + answerChoiced);
    setIndexQuestion(indexQuestion + 1);
    setAnswerChoiced(0);
  }

  return (
    <div className="container-jeu">
      {listQuestion.length > indexQuestion ? (
        <>
          <div className="question">{listQuestion[indexQuestion].question}</div>
          {question.typeRep === 'boolean' ? (
            //Display les 2 boutons pour vrai ou faux
            question.reponses.map((answer, index) => (
              <div key={index} className="button-boolean">
                <input
                  type="radio"
                  id={answer.reponse}
                  name="jeu"
                  value={answer.point}
                  onChange={() => setAnswerChoiced(answer.point)}
                />
                <label htmlFor={answer.reponse}>{answer.reponse}</label>
              </div>
            ))
          ) : (
            //Display l'échelle faire le if dans l'échelle et sortir 1 ou 0 dans setAnswerChoiced()
            <p>échelle</p>
          )}
          <button type="button" onClick={handleValider}>
            Valider
          </button>

          <p>Score : {score}</p>
        </>
      ) : (
        <p>afficher score {score}</p>
      )}
    </div>
  );
}
