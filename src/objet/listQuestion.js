export const listQuestion = [
  {
    idQuestion: 1,
    question: 'Es-tu parti en vacances ces 6 derniers mois ?',
    reponses: [
      {
        reponse: 'Oui',
        point: 0,
      },
      {
        reponse: 'Non',
        point: 1,
      },
    ],
    typeRep: 'vrai_faux',
  },
  {
    idQuestion: 2,
    question: 'A quel point es-tu fatigué ?',
    //0 en forme - 5 mort
    typeRep: 'echelle',
  },
  {
    idQuestion: 3,
    question: 'As-tu fait un hackathon cette semaine ?',
    reponses: [
      {
        reponse: 'Oui',
        point: 1,
      },
      {
        reponse: 'Non',
        point: 0,
      },
    ],
    typeRep: 'vrai_faux',
  },
];
