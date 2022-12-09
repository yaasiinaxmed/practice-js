// DOM elements
const studentForm = document.querySelector("#studentForm");
const studentContainer = document.querySelector(".students");
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, roll) => {
    students.push({ 
        name: name,
        age: age,
        roll: roll,
    });

    localStorage.setItem("students", JSON.stringify(students));

    return { name, age, roll }; 
};

const createStudentElement = ({name, age, roll}) => {
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');

    studentName.innerText = "Student name: " + name;
    studentAge.innerText = "Student age: " + age;
    studentRoll.innerText = "Student roll: " + roll;

    studentDiv.append(studentName, studentAge , studentRoll);
    studentContainer.appendChild(studentDiv);
};

students.forEach(createStudentElement);

studentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newStudent = addStudent(
        nameInput.value,
        ageInput.value,
        rollInput.value
    );

    createStudentElement(newStudent);

    nameInput.value = "";
    ageInput.value = "";
    rollInput.value = "";
});