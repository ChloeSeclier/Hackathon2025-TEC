import { useContext, useEffect, useState } from 'react';
import { listQuestion } from '../objet/listQuestion';
import Scale from '../components/Scale';
import { ScaleContext, ScaleProvider } from '../components/scaleContext';
import Presente from './Presente';

export default function Jeu() {
  const [indexQuestion, setIndexQuestion] = useState(0);
  const question = listQuestion[indexQuestion];
  const [score, setScore] = useState(0);
  const [answerChoiced, setAnswerChoiced] = useState(0);
  const { value, setValue } = useContext(ScaleContext);

  function handleValider() {
    setScore(score + answerChoiced);
    setIndexQuestion(indexQuestion + 1);
    setAnswerChoiced(0);
    setValue(0);
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
              <p className="question">{listQuestion[indexQuestion].question}</p>

              {question.typeRep === 'boolean' ? (
                //Display les 2 boutons pour vrai ou faux
                <div className="button-boolean">
                  {question.reponses.map((answer, index) => (
                    <div key={index} className='label-boolean'>
                      <input
                        type="radio"
                        id={answer.reponse}
                        name="jeu"
                        value={answer.point}
                        onChange={() => setAnswerChoiced(answer.point)}
                      />
                      <label htmlFor={answer.reponse}>{answer.reponse}</label>
                    </div>
                  ))}
                </div>
              ) : (
                <Scale />
              )}

              <button
                type="button"
                onClick={handleValider}
                className="button-valider"
              >
                


    <span class="circle1"></span>
    <span class="circle2"></span>
    <span class="circle3"></span>
    <span class="circle4"></span>
    <span class="circle5"></span>
    <span class="text">Valider</span>




              </button>
            </>
          ) : (
            <Presente score={score} />
          )}
        </div>
      </div>
    </div>
  );
}
