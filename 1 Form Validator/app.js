const submit = document.querySelector('#submit');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordConfirmation = document.querySelector('#confirm');

submit.addEventListener('click', formValidation);

function formFailure(field){
    field.classList.add('false');
}

function formSuccess(field){
    field.classList.add('right');
}

function formValidation(e){
    e.preventDefault();
    if (username.value.length < 3){
        formFailure(username);
        document.querySelector('#usernameHelpId').classList.remove('d-none');
    } else {
        formSuccess(username);
        document.querySelector('#usernameHelpId').classList.add('d-none');
    }

    if (email.value.length === null || !email.value.includes('@')){
        formFailure(email);
        document.querySelector('#emailHelpId').classList.remove('d-none');
    } else {
        formSuccess(email);
        document.querySelector('#emailHelpId').classList.add('d-none');
    }

    if (password.value.length < 6){
        formFailure(password);
        document.querySelector('#passwordHelpId').classList.remove('d-none');
    } else {
        formSuccess(password);
        document.querySelector('#passwordHelpId').classList.add('d-none');
    }

    if (passwordConfirmation.value !== password.value || passwordConfirmation.value === ''){
        formFailure(passwordConfirmation);
        document.querySelector('#confirmHelpId').classList.remove('d-none');
    } else {
        formSuccess(passwordConfirmation);
        document.querySelector('#confirmHelpId').classList.add('d-none');
    }
}