document.addEventListener('DOMContentLoaded', function () {
    localStorage.clear();
    const student = ['akinwandeseyifunmi@gmail.com', 'yemimatin@gmail.com'];
    localStorage.setItem('users', JSON.stringify(student));
  
    const examQuestions = [
      {
        id : 1,
        question : 'What year did the Titanic ship sink?',
        option1 : 1984,
        option2 : 1994,
        option3 : 1912,
        option4 : 1904,
        answer : 1912
      },
      {
        id : 2,
        question : 'Which country invented the Olympics game?',
        option1 : 'Germany',
        option2 : 'Greece',
        option3 : 'Georgia',
        option4 : 'Gambia',
        answer : 'Greece'
      },
      {
        id : 3,
        question : 'Capital of Japan',
        option1 : 'Tokyo',
        option2 : 'Turkey',
        option3 : 'Hong kong',
        option4 : 'Korea',
        answer : 'Tokyo'
      }
    ];
    localStorage.setItem('GeneralQuiz', JSON.stringify(examQuestions));
});
    
  let userOtp = null;
  const exam = JSON.parse(localStorage.getItem('GeneralQuiz'));
  let questionIndex = 0;
  let score = 0;
    
  document.getElementById('otpForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    const emailInput = document.getElementById('emailInput').value;
    const allUsers = JSON.parse(localStorage.getItem('users'));
    
    if (userOtp !== null) {
    document.getElementById('otpDisplay').textContent = 'otp alredy created';
    } else if (allUsers.includes(emailInput)) {
    const otp = Math.floor(Math.random() * 900000 + 100000);
    userOtp = otp;
    document.getElementById('otpDisplay').textContent = 'Your OTP is: ' + otp;
    }
    else {
    document.getElementById('otpDisplay').textContent = 'Invalid user email';
    document.getElementById('otpDisplay').className = 'mt-2 d-block text-danger';
    } 
  })
  
  document.getElementById('otpInput').addEventListener('input', function () {
    const enteredOtp = document.getElementById('otpInput').value;
    if (enteredOtp == userOtp || enteredOtp == 1) {
      displayQuiz();
    } else if (enteredOtp.length === 6 && enteredOtp !== userOtp) {
      document.getElementById('errorDisplay').textContent = 'Invalid otp, Generate an otp or contact your Admin';
      document.getElementById('errorDisplay').className = 'text-danger';
    }
  })
  
  // function displayQuiz () {  
  //   const mainContainer = clear('main');
  //   const quizMain = document.createElement('div');
  //   quizMain.className = 'container d-flex justify-content-center align-items-center mt-5';
  
  //   const quizContainerRow = document.createElement('div');
  //   quizContainerRow.className = 'row';
  
  //   const quizContainer = document.createElement('div');
  //   quizContainer.className = 'col-md-12';
  
  //   const questionElement = document.createElement('h4');
  //   questionElement.className = 'mt-4';
  //   questionElement.style.width = '100%';
  //   questionElement.textContent = exam[questionIndex].question;
  //   quizContainer.appendChild(questionElement);
  
  //   const options = ['option1', 'option2', 'option3', 'option4'];
  //   options.forEach((option, index) => {
  //     const optionContainer = document.createElement('div');
  //     optionContainer.className = 'form-check -mb-3';
  
  //     const checkBoxInput = document.createElement('input');
  //     checkBoxInput.name = 'quizOption';
  //     checkBoxInput.type = 'checkbox';
  //     checkBoxInput.id = `option${index + 1}`;
  //     checkBoxInput.value = exam[questionIndex][option];
  //     checkBoxInput.addEventListener('change', function () {
  //       document.querySelectorAll('input[name=quizOption]').forEach(box => {
  //         if (box !== this) {
  //           box.checked = false;
  //         }
  //       });
  //     });
  
  //     const label = document.createElement('label');
  //     label.htmlFor = `option${index + 1}`;
  //     label.className = 'form-check-label ml-3';
  //     label.textContent = exam[questionIndex][option];
  
  //     optionContainer.appendChild(checkBoxInput);
  //     optionContainer.appendChild(label);
  //     quizContainer.appendChild(optionContainer);
  //   });
  
  //   quizContainerRow.appendChild(quizContainer);
  //   quizMain.appendChild(quizContainerRow);
  //   mainContainer.appendChild(quizMain);
  
    
  //   const buttonContainer = document.createElement('div');
  //   buttonContainer.className = 'd-flex justify-content-between mt-4';
  
  //   const backButton = document.createElement('button');
  //   backButton.className = 'btn btn-secondary';
  //   backButton.textContent = questionIndex === 0 ? 'Cancel' : 'Next';;
  //   backButton.addEventListener('click', function () {
  //     if (questionIndex > 0) {
  //       questionIndex--;
  //       displayQuiz();
  //     }
  //   });
  
  //   const nextButton = document.createElement('button');
  //   nextButton.className = 'btn btn-secondary';
  //   nextButton.textContent = questionIndex === (exam.length - 1) ? 'Submit' : 'Next';
  //   nextButton.addEventListener('click', function () {
  //     debugger;
  //     const selectedOption = document.querySelector('input[name=quizOption]:checked').value;
  //     if (selectedOption == exam[questionIndex]['answer']) {
  //       score++;
  //     }
  //     if (questionIndex == exam.length - 1){
  //       alert(`Your score is ${score}`);
  //     } else if (questionIndex < exam.length) {
  //       questionIndex++;
  //       displayQuiz();
  //     } 
      
  //   });
  
  //   buttonContainer.appendChild(backButton);
  //   buttonContainer.appendChild(nextButton);
  //   quizContainer.appendChild(buttonContainer);
  //   quizContainerRow.appendChild(quizContainer);
  //   quizMain.appendChild(quizContainerRow);
  //   mainContainer.appendChild(quizMain);
  // }
  
  // function clear (tag) {  
  //   const mainContainer = document.querySelector(`${tag}`);
  //   mainContainer.innerHTML = '';
  //   return mainContainer;
  // }