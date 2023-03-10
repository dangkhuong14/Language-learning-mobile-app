export default [
  {
    id: 'q0',
    type: 'FILL_THE_BLANK',
    questionParts: [
      {
        text: 'la'
      },

      {
        text: 'nino',
        isBlank: true
      },

      {
        text: ',',
      },

      {
        text: 'el',
        isBlank: true
      },

      {
        text: 'nina',
        isBlank: true
      }
    ],
    options: ['nina', 'el', 'mujer', 'la', 'nino'],
  },
  
  {
    id: 'q1',
    type: 'FILL_THE_BLANK',
    questionParts: [
      {
        text: 'una'
      },

      {
        text: 'nina',
      },

      {
        text: ',',
      },

      {
        text: 'una'
      },

      {
        text: 'mujer',
        isBlank: true
      }
    ],
    options: ['es', 'el', 'mujer', 'la'],
  },

  {
    id: "q2",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the glass"?',
    options: [
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
        correct: true,
      },
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
      },
    ],
  },
  {
    id: "q3",
    type: "OPEN_ENDED",
    text: "Yo soy un hombre",
    answer: "I am a man",
  },
  {
    id: "q4",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the coffee"?',
    options: [
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
        correct: true,
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
      },
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
      },
    ],
  },
  {
    id: "q5",
    type: "IMAGE_MULTIPLE_CHOICE",
    type: "OPEN_ENDED",
    text: "La mujer",
    answer: "the woman",
  },
  {
    id: "q6",
    question: 'Which of these is "the cup"?',
    type: "IMAGE_MULTIPLE_CHOICE",
    options: [
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
        correct: true,
      },
    ],
  },
  {
    id: "q7",
    type: "OPEN_ENDED",
    text: "Me gusta React Native",
    answer: "I like react native",
  },
  {
    id: "q8",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the milk"?',
    options: [
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
      },
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
        correct: true,
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
      },
    ],
  },
];
