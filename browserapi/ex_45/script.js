// function runMyCode() {

// };

const myForm = document.querySelector('form');
// const formElements = myForm.elements;
// console.log(formElements);
function printSubmission() {
    let userName = myForm.elements[0].value;
    let userPassword = myForm.elements[1].value;
    window.alert(`Your username is ${userName} and your password is ${userPassword}`);
    return false;
}

myForm.onsubmit = printSubmission;

// window.onload = runMyCode();

