var alertRedInput = "#8C1010";
var defaultInput = "rgba(10, 180, 180, 1)";

function nameValidation(nameInput) {
    var name = document.getElementById("name");
    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(nameInput)) {
        name.setCustomValidity("No special characters!");
        name.style.borderColor = alertRedInput;
    }
    else {
        name.setCustomValidity("");
        name.style.borderColor = defaultInput;
    }
}

// function ValidateEmail(inputEmail) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     if(inputEmail.value.match(mailformat)) {
//         document.form1.text1.focus();
//         return true;
//     }
//     else {
//         alert("You have entered an invalid email address!");
//         document.form1.text1.focus();
//         return false;
//     }
// }


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