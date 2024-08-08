document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('GSc')) {    
    const GscExam = [
      {
        id: 1,
        question: 'Capital of France',
        option1: 'Paris',
        option2: 'Berlin',
        option3: 'Madrid',
        option4: 'Lisbon',
        answer: 'Paris',
        selected: null
      },
      {
        id: 2,
        question: 'Largest planet in the Solar System',
        option1: 'Earth',
        option2: 'Jupiter',
        option3: 'Saturn',
        option4: 'Mars',
        answer: 'Jupiter',
        selected: null
      },
      {
        id: 3,
        question: 'Capital of Japan',
        option1: 'Tokyo',
        option2: 'Turkey',
        option3: 'Hong Kong',
        option4: 'Korea',
        answer: 'Tokyo',
        selected: null
      },
      {
        id: 4,
        question: 'Smallest prime number',
        option1: '1',
        option2: '2',
        option3: '3',
        option4: '5',
        answer: '2',
        selected: null
      },
      {
        id: 5,
        question: 'Fastest land animal',
        option1: 'Cheetah',
        option2: 'Lion',
        option3: 'Tiger',
        option4: 'Leopard',
        answer: 'Cheetah',
        selected: null
      },
      {
        id: 6,
        question: 'Largest ocean on Earth',
        option1: 'Atlantic Ocean',
        option2: 'Indian Ocean',
        option3: 'Arctic Ocean',
        option4: 'Pacific Ocean',
        answer: 'Pacific Ocean',
        selected: null
      },
      {
        id: 7,
        question: 'Chemical symbol for Gold',
        option1: 'Au',
        option2: 'Ag',
        option3: 'Pb',
        option4: 'Pt',
        answer: 'Au',
        selected: null
      },
      {
        id: 8,
        question: 'Author of "Pride and Prejudice"',
        option1: 'Charlotte Brontë',
        option2: 'Jane Austen',
        option3: 'Emily Brontë',
        option4: 'Mary Shelley',
        answer: 'Jane Austen',
        selected: null
      },
      {
        id: 9,
        question: 'First man to walk on the Moon',
        option1: 'Buzz Aldrin',
        option2: 'Yuri Gagarin',
        option3: 'Neil Armstrong',
        option4: 'Michael Collins',
        answer: 'Neil Armstrong',
        selected: null
      },
      {
        id: 10,
        question: 'Longest river in the world',
        option1: 'Amazon River',
        option2: 'Nile River',
        option3: 'Yangtze River',
        option4: 'Mississippi River',
        answer: 'Nile River',
        selected: null
      },
      {
        id: 11,
        question: 'Capital of Australia',
        option1: 'Sydney',
        option2: 'Melbourne',
        option3: 'Canberra',
        option4: 'Perth',
        answer: 'Canberra',
        selected: null
      },
      {
        id: 12,
        question: 'Chemical symbol for Water',
        option1: 'O2',
        option2: 'H2O',
        option3: 'CO2',
        option4: 'HO',
        answer: 'H2O',
        selected: null
      },    
      {
        id : 13,
        question : 'What year did the Titanic ship sink?',
        option1 : 1984,
        option2 : 1994,
        option3 : 1912,
        option4 : 1904,
        answer : 1912,
        selected : null
      },
      {
        id : 14,
        question : 'Which country invented the Olympics game?',
        option1 : 'Germany',
        option2 : 'Greece',
        option3 : 'Georgia',
        option4 : 'Gambia',
        answer : 'Greece',
        selected : null
      },
      {
        id : 15,
        question : 'Capital of Japan',
        option1 : 'Tokyo',
        option2 : 'Turkey',
        option3 : 'Hong kong',
        option4 : 'Korea',
        answer : 'Tokyo',
        selected : null
      },    
    ];
    localStorage.setItem('GSc', JSON.stringify(GscExam));
    }
    if (!localStorage.getItem('Maths')) {
      const mathsExam = [
        {
         id: 1,
         question: 'What is the value of 2 + 3?',
         option1: '4',
         option2: '5',
         option3: '6',
         option4: '7',
         answer: '5',
         selected: null
        },
        {
         id: 2,
         question: 'What is the square root of 16?',
         option1: '2',
         option2: '4',
         option3: '8',
         option4: '16',
         answer: '4',
         selected: null
        },
        {
         id: 3,
         question: 'What is the value of 5 x 7?',
         option1: '25',
         option2: '35',
         option3: '45',
         option4: '55',
         answer: '35',
         selected: null
        },
        {
         id: 4,
         question: 'What is the value of 10 - 3?',
         option1: '5',
         option2: '6',
         option3: '7',
         option4: '8',
         answer: '7',
         selected: null
        },
        {
         id: 5,
         question: 'What is the value of 12 / 3?',
         option1: '2',
         option2: '3',
         option3: '4',
         option4: '5',
         answer: '4',
         selected: null
        },
        {
         id: 6,
         question: 'What is the value of 8 + 4?',
         option1: '8',
         option2: '10',
         option3: '12',
         option4: '14',
         answer: '12',
         selected: null
        },
        {
         id: 7,
         question: 'What is the value of 15 - 7?',
         option1: '5',
         option2: '6',
         option3: '7',
         option4: '8',
         answer: '8',
         selected: null
        },
        {
         id: 8,
         question: 'What is the value of 6 x 8?',
         option1: '32',
         option2: '40',
         option3: '48',
         option4: '56',
         answer: '48',
         selected: null
        },
        {
         id: 9,
         question: 'What is the value of 18 / 6?',
         option1: '2',
         option2: '3',
         option3: '4',
         option4: '5',
         answer: '3',
         selected: null
        },
        {
         id: 10,
         question: 'What is the value of 7 + 5?',
         option1: '8',
         option2: '10',
         option3: '12',
         option4: '14',
         answer: '12',
         selected: null
        },
        {
         id: 11,
         question: 'What is the value of 20 - 12?',
         option1: '5',
         option2: '6',
         option3: '7',
         option4: '8',
         answer: '8',
         selected: null
        },
        {
         id: 12,
         question: 'What is the value of 3 x 9?',
         option1: '18',
         option2: '21',
         option3: '24',
         option4: '27',
         answer: '27',
         selected: null
        },
        {
         id: 13,
         question: 'What is the value of 24 / 4?',
         option1: '4',
         option2: '5',
         option3: '6',
         option4: '8',
         answer: '6',
         selected: null
        },
        {
         id: 14,
         question: 'What is the value of 11 + 6?',
         option1: '13',
         option2: '15',
         option3: '17',
         option4: '19',
         answer: '17',
         selected: null
        },
        {
         id: 15,
         question: 'What is the value of 14 - 8?',
         option1: '4',
         option2: '5',
         option3: '6',
         option4: '8',
         answer: '6',
         selected: null
        }
      ];
      localStorage.setItem('Maths', JSON.stringify(mathsExam));  
    }
    if (!localStorage.getItem('Eng')) {
      const englishExam = [
        {
         id: 1,
         question: 'Which of the following is a noun?',
         option1: 'Run',
         option2: 'Walk',
         option3: 'Book',
         option4: 'Quickly',
         answer: 'Book',
         selected: null
        },
        {
         id: 2,
         question: 'Which of the following is a verb?',
         option1: 'Happy',
         option2: 'Slowly',
         option3: 'Sing',
         option4: 'The',
         answer: 'Sing',
         selected: null
        },
        {
         id: 3,
         question: 'Which of the following is an adverb?',
         option1: 'Quickly',
         option2: 'Red',
         option3: 'Table',
         option4: 'With',
         answer: 'Quickly',
         selected: null
        },
        {
         id: 4,
         question: 'Which of the following is an adjective?',
         option1: 'Run',
         option2: 'Big',
         option3: 'And',
         option4: 'Happily',
         answer: 'Big',
         selected: null
        },
        {
         id: 5,
         question: 'Which of the following is a preposition?',
         option1: 'Dog',
         option2: 'Under',
         option3: 'Fly',
         option4: 'Beautiful',
         answer: 'Under',
         selected: null
        },
        {
         id: 6,
         question: 'Which of the following is a conjunction?',
         option1: 'Cat',
         option2: 'And',
         option3: 'Quickly',
         option4: 'Red',
         answer: 'And',
         selected: null
        },
        {
         id: 7,
         question: 'Which of the following is a pronoun?',
         option1: 'Table',
         option2: 'He',
         option3: 'Green',
         option4: 'Run',
         answer: 'He',
         selected: null
        },
        {
         id: 8,
         question: 'Which of the following is an interjection?',
         option1: 'Wow',
         option2: 'Book',
         option3: 'With',
         option4: 'Sing',
         answer: 'Wow',
         selected: null
        },
        {
         id: 9,
         question: 'Which of the following is a determiner?',
         option1: 'The',
         option2: 'Run',
         option3: 'Quickly',
         option4: 'Beautiful',
         answer: 'The',
         selected: null
        },
        {
         id: 10,
         question: 'Which of the following is a numeral?',
         option1: 'One',
         option2: 'Red',
         option3: 'Sing',
         option4: 'With',
         answer: 'One',
         selected: null
        },
        {
         id: 11,
         question: 'Which of the following is a participle?',
         option1: 'Singing',
         option2: 'Book',
         option3: 'Quickly',
         option4: 'And',
         answer: 'Singing',
         selected: null
        },
        {
         id: 12,
         question: 'Which of the following is a gerund?',
         option1: 'Running',
         option2: 'Big',
         option3: 'The',
         option4: 'Fly',
         answer: 'Running',
         selected: null
        },
        {
         id: 13,
         question: 'Which of the following is a modal verb?',
         option1: 'Can',
         option2: 'Book',
         option3: 'Slowly',
         option4: 'Beautiful',
         answer: 'Can',
         selected: null
        },
        {
         id: 14,
         question: 'Which of the following is a relative pronoun?',
         option1: 'Who',
         option2: 'Run',
         option3: 'Sing',
         option4: 'Under',
         answer: 'Who',
         selected: null
        },
        {
         id: 15,
         question: 'Which of the following is a possessive pronoun?',
         option1: 'His',
         option2: 'Quickly',
         option3: 'Table',
         option4: 'Wow',
         answer: 'His',
         selected: null
        }
      ];
      localStorage.setItem('Eng', JSON.stringify(englishExam)); 
    }
  });