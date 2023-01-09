var database = [
    {
        username: "blaz",
        password: "supersecret"
    },
    {
        username: "bobby",
        password: "12345"
    },
    {
        username: "sally",
        password: "77777"
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning."
    },
    {
        username: "Sally",
        timeline: "Javascript is soooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is very nice."
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (username === database[i].username &&
            password === database[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password!");
    }
}

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt);