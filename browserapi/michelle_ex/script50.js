window.onload = function () {
    console.log('loaded');


    const form = document.querySelector('form');

    const validation = function() {

        let emailValidation = form.elements[0].value;
        let usernameValidation = form.elements[1].value;
        let passValidation = form.elements[2].value;

        const validateUser = function(username) {
            const regex = /^[a-z0-9]+$/i;
            return regex.test(username);
        };

        const validateEmail = function(email) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return emailRegex.test(email);
        };

        const validatePassword = function(password) {
            const passwordRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return passwordRegex.test(password);
            
        };

        if (!validateUser(usernameValidation)) {
            console.log('Incorrect username');
            return false;
        }

        if (!validateEmail(emailValidation)) {
            console.log('Incorrect Email');
            return false;
        }

        if (!validatePassword(passValidation)) {
            console.log('Incorrect password');
            return false;
        };
    }
    form.onsubmit=validation;

}