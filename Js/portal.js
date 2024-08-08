let userOtp = null;
let questionIndex = 0;
let exam = null;
let userIndex = 0;
let score = 0;
let examName = null;
const allUsers = JSON.parse(localStorage.getItem('users'));

document.getElementById('otpForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('emailInput').value;

    let checkUser = function () {
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].mail == emailInput) {
                userIndex = i;
                return true;
            }
        }
        return false;
    }

    if (userOtp !== null) {
        document.getElementById('otpDisplay').textContent = 'otp already created';
    } else if (checkUser()) {
        const otp = Math.floor(Math.random() * 900000 + 100000);
        userOtp = otp;
        document.getElementById('otpDisplay').textContent = 'Your OTP is: ' + otp;
    } else {
        document.getElementById('otpDisplay').textContent = 'Invalid user email';
        document.getElementById('otpDisplay').className = 'mt-2 d-block text-danger';
    }
});

document.getElementById('otpInput').addEventListener('input', function () {
    const enteredOtp = document.getElementById('otpInput').value;
    if (enteredOtp == userOtp) {
        examPage();
    } else if (enteredOtp.length === 6 && enteredOtp !== userOtp) {
        document.getElementById('errorDisplay').textContent = 'Invalid otp, Generate an otp or contact your Admin';
        document.getElementById('errorDisplay').className = 'text-danger';
    }
});

function displayQuiz() { debugger
    const mainContainer = clear('main');
    const quizMain = document.createElement('div');
    quizMain.className = 'container d-flex justify-content-center align-items-center mt-5';

    const quizContainerRow = document.createElement('div');
    quizContainerRow.className = 'row';

    const quizContainer = document.createElement('div');
    quizContainer.className = 'col-md-12';

    const questionElement = document.createElement('h4');
    questionElement.className = 'mt-4';
    questionElement.style.width = '100%';
    questionElement.textContent = exam[questionIndex].question;
    quizContainer.appendChild(questionElement);

    const options = ['option1', 'option2', 'option3', 'option4'];
    options.forEach((option, index) => {
        const optionContainer = document.createElement('div');
        optionContainer.className = 'form-check -mb-3';

        const checkBoxInput = document.createElement('input');
        checkBoxInput.name = 'quizOption';
        checkBoxInput.type = 'checkbox';
        checkBoxInput.id = `option${index + 1}`;
        checkBoxInput.value = exam[questionIndex][option];
        checkBoxInput.addEventListener('change', function () {
            document.querySelectorAll('input[name=quizOption]').forEach(box => {
                if (box !== this) {
                    box.checked = false;
                }
            });
        });

        if (exam[questionIndex].selected == exam[questionIndex][option]) {
            checkBoxInput.checked = true;
        }

        const label = document.createElement('label');
        label.htmlFor = `option${index + 1}`;
        label.className = 'form-check-label ml-3';
        label.textContent = exam[questionIndex][option];

        optionContainer.appendChild(checkBoxInput);
        optionContainer.appendChild(label);
        quizContainer.appendChild(optionContainer);
    });

    quizContainerRow.appendChild(quizContainer);
    quizMain.appendChild(quizContainerRow);
    mainContainer.appendChild(quizMain);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'd-flex justify-content-between mt-4';

    const backButton = document.createElement('button');
    backButton.className = 'btn btn-secondary';
    backButton.textContent = questionIndex === 0 ? 'Cancel' : 'Back';
    backButton.addEventListener('click', function () {
        if (questionIndex > 0) {
            questionIndex--;
            displayQuiz();
        }
    });

    const nextButton = document.createElement('button');
    nextButton.className = 'btn btn-secondary';
    nextButton.textContent = questionIndex === (exam.length - 1) ? 'Submit' : 'Next';
    nextButton.addEventListener('click', function () {
        const selectedOption = document.querySelector('input[name=quizOption]:checked').value;
        exam[questionIndex].selected = selectedOption;
        if (questionIndex == exam.length - 1) {
            scoreDisplay();
        } else if (questionIndex < exam.length) {
            questionIndex++;
            displayQuiz();
        }
    });

    buttonContainer.appendChild(backButton);
    buttonContainer.appendChild(nextButton);
    quizContainer.appendChild(buttonContainer);
    quizContainerRow.appendChild(quizContainer);
    quizMain.appendChild(quizContainerRow);
    mainContainer.appendChild(quizMain);
}

function clear(tag) {
    const mainContainer = document.querySelector(`${tag}`);
    mainContainer.innerHTML = '';
    return mainContainer;
}

function scoreDisplay() {
    for (let i = 0; i < exam.length; i++) {
        if (exam[i].selected == exam[i].answer) {
            score += 2;
        }
    }
    clear('main');
    document.getElementById('score').textContent = 'Congratulation! \nYour exam has been completed, you can exit the hall now';
    allUsers[userIndex][examName] = score;
    localStorage.setItem('Students', JSON.stringify(allUsers));
    examPage();
}

function examPage() {debugger
    const mainContainer = clear('main');
    const courseListMain = document.createElement('div');
    courseListMain.className = 'container d-flex justify-content-center align-items-center mt-5';

    const courseListContainerRow = document.createElement('div');
    courseListContainerRow.className = 'row';

    const courseListContainer = document.createElement('div');
    courseListContainer.className = 'col-md-12';

    const courseListElement = document.createElement('h4');
    courseListElement.className = 'mt-4';
    courseListElement.style.width = '100%';
    courseListElement.textContent = 'Your pending exams';
    courseListContainer.appendChild(courseListElement);

    const courses = ['Maths', 'Eng', 'GSc', 'Yor', 'Govt'];
    courses.forEach((option, index) => {
        const coursesContainer = document.createElement('div');
        coursesContainer.className = 'form-check -mb-3';

        const checkBoxInput = document.createElement('input');
        checkBoxInput.name = 'quizOption';
        checkBoxInput.type = 'checkbox';
        checkBoxInput.id = `option${index + 1}`;
        checkBoxInput.value = option;
        if (allUsers[userIndex][option] != null) {
            checkBoxInput.disabled = true;
        }

        checkBoxInput.addEventListener('change', () => {
            if (checkBoxInput.checked) {
                getExam(checkBoxInput.value);
            }
        });

        const label = document.createElement('label');
        label.htmlFor = `option${index + 1}`;
        label.className = 'form-check-label ml-3';
        label.textContent = option;

        coursesContainer.appendChild(checkBoxInput);
        coursesContainer.appendChild(label);
        courseListContainer.appendChild(coursesContainer);
        courseListContainerRow.appendChild(courseListContainer);
        courseListMain.appendChild(courseListContainerRow);
        mainContainer.appendChild(courseListMain);
    });
}

function getExam(course) { debugger
    examName = course;
    exam = JSON.parse(localStorage.getItem(`${course}`));
    questionIndex = 0;
    displayQuiz();
}
