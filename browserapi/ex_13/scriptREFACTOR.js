function lengthPrompt () {
    let sessionLength = prompt('How long would you like to use our site?');
    parseInt(sessionLength);
        function timer() {
            console.log(sessionLength);
            sessionLength--;
        };
        setInterval(timer, 1000);
}

lengthPrompt();