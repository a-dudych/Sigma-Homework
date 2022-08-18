window.addEventListener('DOMContentLoaded', () => {
    let submitButton = document.body.querySelector('.form-container__button');
    submitButton.addEventListener('click', validator)
})

function validator() {

    event.preventDefault();

    const UPPERCASES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LATIN_LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const EMAIL_REGEX = /^(([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+)?$/

    let username = document.forms["contactme"].elements["name"].value;
    let email = document.forms["contactme"].elements["email"].value;
    let subject = document.forms["contactme"].elements["subjectline"].value;
    let message = document.forms["contactme"].elements["messagetext"].value;

    let usernameError = document.body.querySelector('.username-error');
    let emailError = document.body.querySelector('.email-error');
    let subjectError = document.body.querySelector('.subject-error');
    let messageError = document.body.querySelector('.message-error');

    usernameError.innerHTML = "";
    emailError.innerHTML = "";
    subjectError.innerHTML = "";
    messageError.innerHTML = "";

    for (let char of username) {
        if (!LATIN_LETTERS.includes(char)) {
            usernameError.innerHTML = "You can use only latin letters";
            return;
        }
    }

    if (username == "") {
        usernameError.innerHTML = "Type your name";
        return;
    }

    if (!UPPERCASES.includes(username[0])) {
        usernameError.innerHTML = "The first letter should be uppercase";
        return;
    }

    if (email == "") {
        emailError.innerHTML = "Type your email";
        return;
    }

    if (!EMAIL_REGEX.test(email)) {
        emailError.innerHTML = "This email address is incorrect";
        return;
    }
    
    if (subject == "") {
        subjectError.innerHTML = "Type the subject";
        return;
    }

    const regex = /["a-zабвгдеёжзийклмнопрстуфхцчшщъыьэюяґєії "]/g;
    if (subject.toLowerCase().replaceAll(regex, '').length > 0 ) {
        subjectError.innerHTML = "Use can use only letters and spaces in this field";
        return;
    }

    if (message == "") {
        messageError.innerHTML = "Type your message";
        return
    }
    

    if (subject.toLowerCase().includes("зробити замовлення")) {
        party.confetti(document.body.querySelector('.contacts'));
        party.sparkles(document.body.querySelector('.contacts'));
    }

    document.querySelector('.popup').classList.remove('popup_hidden')

    localStorage.setItem('name', username);
    localStorage.setItem('email', email);
    localStorage.setItem('subject', subject);
    localStorage.setItem('message', message);
}