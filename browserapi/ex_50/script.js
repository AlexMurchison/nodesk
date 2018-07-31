function runMyCode() {
    let userForm = document.querySelector('form');
    function validation() {
        let userName = userForm.elements[0].value;
        let userPass = userForm.elements[1].value;
        let userEmail = userForm.elements[2].value;
        console.log(userForm);
        console.log(userName);
        console.log(userPass);
        console.log(userEmail);

        const validateUser = (userID) => {
            const regex = /^[a-z0-9]+$/i;
            return regex.test(userID);
        };

        const validateEmail = (email) => {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return regex.test(email);
        };
        const validatePass = (password) => {
            const regex = /^[a-z0-9]+$/i;
            return regex.test(password);
        };

        if (!validateUser(userName)) {
            window.alert(`Your Username is invald. Please only use Alphanumeric Characters!`);
            return false;
        }

        if (!validatePass(userPass)) {
            window.alert(`Your Password is invald. Please only use Alphanumeric Characters!`);
            return false;
        }

        if (!validateEmail(userEmail)) {
            window.alert(`Your Email is invald. Please check your formatting`);
            return false;
        }

        window.alert(`Your username is ${userName}, your password is ${userPass}, and your email is ${userEmail}! Your form is being submit.`);
        return false;
    }

    userForm.onsubmit = validation;
}

window.onload = runMyCode;