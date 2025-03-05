import { useContext, useEffect, useState } from 'react';
import { listQuestion } from '../objet/listQuestion';
import Scale from '../components/Scale';
import { ScaleContext, ScaleProvider } from '../components/scaleContext';

export default function Jeu() {
  const [indexQuestion, setIndexQuestion] = useState(0);
  const question = listQuestion[indexQuestion];
  const [score, setScore] = useState(0);
  const [answerChoiced, setAnswerChoiced] = useState(0);
  const { value } = useContext(ScaleContext);

  function handleValider() {
    setScore(score + answerChoiced);
    setIndexQuestion(indexQuestion + 1);
    setAnswerChoiced(0);
  }
  useEffect(() => {
    if (question.typeRep !== 'boolean' && listQuestion.length > indexQuestion) {
      if (value > 3) {
        setAnswerChoiced(1);
      } else {
        setAnswerChoiced(0);
      }
    }
  }, [value]);
  return (
    <div className="container-jeu">
      <div className="sous-container-jeu">
        <div className="sous-sous-container-jeu">
          {listQuestion.length > indexQuestion ? (
            <>
              <div className="question">
                {listQuestion[indexQuestion].question}
              </div>
              <div className="button-boolean">
                {question.typeRep === 'boolean' ? (
                  //Display les 2 boutons pour vrai ou faux
                  question.reponses.map((answer, index) => (
                    <div key={index}>
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
                  <Scale />
                )}
              </div>
              <button
                type="button"
                onClick={handleValider}
                className="button-valider"
              >
                Valider
              </button>
            </>
          ) : (
            <p className="resultat-jeu">afficher score + recompenses {score}</p>
          )}
        </div>
      </div>
    </div>
  );
}
