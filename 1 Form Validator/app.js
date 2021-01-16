const submit = document.querySelector('#submit');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordConfirmation = document.querySelector('#confirm');

submit.addEventListener('click', formValidation);

function formValidation(event) {
    event.preventDefault();
    if (username.value.length < 3 || username.value.lenght === null){
        console.log(`${username.value} is too short`);
        username.classList.add('false');
        document.querySelector('#usernameHelpId').classList.remove('d-none');
    } else {
        console.log(`${username.value} is OK`)
        username.classList.add('right');
        document.querySelector('#usernameHelpId').classList.add('d-none');
    }

    if (email.value.length === null || !email.value.includes('@')){
        console.log(`${email.value} is not valid`);
        email.classList.add('false');
        document.querySelector('#emailHelpId').classList.remove('d-none');
    } else {
        console.log(`${email.value} is OK`)
        email.classList.add('right');
        document.querySelector('#emailHelpId').classList.add('d-none');
    }

    if (password.value.length < 6 || password.value.lenght === null){
        console.log(`${password.value} is too short`);
        password.classList.add('false');
        document.querySelector('#passwordHelpId').classList.remove('d-none');
    } else {
        console.log(`${password.value} is OK`)
        password.classList.add('right');
        document.querySelector('#passwordHelpId').classList.add('d-none');
    }

    if (passwordConfirmation.value !== password.value || passwordConfirmation.value === ''){
        console.log(`The passwords do not match`);
        passwordConfirmation.classList.add('false');
        document.querySelector('#confirmHelpId').classList.remove('d-none');
    } else {
        console.log(`Passwords match`)
        passwordConfirmation.classList.add('right');
        document.querySelector('#confirmHelpId').classList.add('d-none');
    }
}