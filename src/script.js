const fname = document.querySelector('#firstName');
const lname = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const span = document.querySelectorAll('#form span')

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

document.querySelector('#form button').addEventListener('click', function(){

    if(fname.value == ""){
        fname.style.border = 'solid 2px #ff7a7a';
        fname.classList.add('error-img');

        span[0].innerHTML = "First Name cannot be empty";
    }

    else {
        fname.style.border = 'solid 2px #38cc8c';
        fname.classList.remove('error-img');

        span[0].innerHTML = "";
    }

    if(lname.value == ""){
        lname.style.border = 'solid 2px #ff7a7a';
        lname.classList.add('error-img');

        span[1].innerHTML = "Last Name cannot be empty";
    }

    else{
        lname.style.border = 'solid 2px #38cc8c';
        lname.classList.remove('error-img')

        span[1].innerHTML = "";
    }

    if(email.value == ""){
        email.style.border = 'solid 2px #ff7a7a';
        email.classList.add('error-img');

        span[2].innerHTML = "Looks like this is not an email";
    }

    else if (email.value.match(validRegex)){
        email.style.border = 'solid 2px #38cc8c';
        email.classList.remove('error-img');

        span[2].innerHTML = "";
    }

    else{
        email.style.border = 'solid 2px #ff7a7a';
        email.classList.add('error-img');

        span[2].innerHTML = "Looks like this is not an email";
    }

    if(password.value == ""){
        password.style.border = 'solid 2px #ff7a7a';
        password.classList.add('error-img');

        span[3].innerHTML = "Password cannot be empty";
    }

    else{
        password.style.border = 'solid 2px #38cc8c';
        password.classList.remove('error-img')

        span[3].innerHTML = "";
    }

})
