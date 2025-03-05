import { listQuestion } from '../objet/listQuestion';

export default function Jeu() {
  const indexQuestion = 0;
  const question = listQuestion[indexQuestion];
  console.log(question.reponses);

  return (
    <div className="container-jeu">
      <div className="question">{listQuestion[indexQuestion].question}</div>
      {question.typeRep === 'boolean' ? (
        //Display les 2 boutons pour vrai ou faux

        question.reponses.map((answer, index) => (
          <div key={index} className="button-boolean">
            <input type="radio" id={answer.reponse} name="jeu" value={answer.point} checked />
            <label htmlFor={answer.reponse}>{answer.reponse}</label>
          </div>
        ))
      ) : (
        //Display l'échelle
        <p>non</p>
      )}
      <button type="button" onClick={}>Valider</button>
    </div>
  );
}
