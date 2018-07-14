const user = {
    username: null,
    password: null,
    greet: function() {
        if (typeof this.username === 'string') {
            console.log(`Hello, I'm ${this.username}`);
        } else {
            console.log('Please assign a username value.')
        }
    },
    updatePassword: function(passwordChange) {
        this.password = passwordChange;
    },
    updateUsername: function(usernameChange) {
        this.username = usernameChange;
    }
}

user.updatePassword('password123');
user.updateUsername();
user.greet();