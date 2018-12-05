var alertRedInput = "#8C1010";
var defaultInput = "rgba(10, 180, 180, 1)";

function nameValidation(nameInput) {
    var name = document.getElementById("name");
    var issueArr = [];
    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(nameInput)) {
        name.setCustomValidity("No special characters!");
        name.style.borderColor = alertRedInput;
    }
    else {
        name.setCustomValidity("");
        name.style.borderColor = defaultInput;
    }
}

function validateEmail(emailInput) {
    var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.test(String(emailInput).toLowerCase());
}

function emailValidation(emailInput) {
    var email= document.getElementById("email");
    var issueArr = [];
    if (!/^.{7,15}$/.test(emailInput)) {
        issueArr.push("Please submit valid email.");
    }
    if (!/\d/.test(emailInput)) {
        issueArr.push("Must contain at least one number.");
    }
    if (!/[a-z]/.test(emailInput)) {
        issueArr.push("Must contain a lowercase letter.");
    }
    if (!/[A-Z]/.test(emailInput)) {
        issueArr.push("Must contain an uppercase letter.");
    }
    if (issueArr.length > 0) {
        email.setCustomValidity(issueArr.join("\n"));
        password.style.borderColor = alertRedInput;
    } else {
        password.setCustomValidity("");
        password.style.borderColor = defaultInput;
    }
}