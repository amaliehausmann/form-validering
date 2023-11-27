const formParent = document.getElementById('myForm');
const formContain = document.getElementById('formContainer');
const heading = document.getElementById('header');

const myFirstName = document.getElementById('firstName');
const firstNameError = document.getElementById('firstNameError');

const myLastName = document.getElementById('lastName');
const lastNameError = document.getElementById('lastNameError');

const myAdress = document.getElementById('myAdress');
const adressError = document.getElementById('myAdressError');

const myPostalNumber = document.getElementById('postalNumber');
const postalError = document.getElementById('postalNumberError');

const myEmail = document.getElementById('myEmail');
const emailError = document.getElementById('myEmailError');

const myButton = document.getElementById('submitButton');

myFirstName.addEventListener('input', (event) => {
    if (myFirstName.value.trim().length > 1) {
        console.log('Fornavnet er langt nok');
        firstNameError.textContent = '';
        myFirstName.classList.remove('invalid');
        myFirstName.classList.add('valid');
        firstNameError.style.display = 'none';
    } else{
        console.log('Fornavnet er IKKE langt nok');
        firstNameError.textContent = 'Fornavn skal være minimum 2 tegn';
        myFirstName.classList.remove('valid');
        myFirstName.classList.add('invalid');
        firstNameError.style.display = 'block';
    } 
});

myLastName.addEventListener('input', (event) => {
    if (myLastName.value.trim().length > 1){
        console.log('Efternavnet er langt nok');
        lastNameError.textContent = '';
        myLastName.classList.remove('invalid');
        myLastName.classList.add('valid');
        lastNameError.style.display = 'none';
    } else{
        console.log('Efternavnet er IKKE langt nok');
        lastNameError.textContent = 'Efternavn skal være minimum 2 tegn';
        myLastName.classList.remove('valid');
        myLastName.classList.add('invalid');
        lastNameError.style.display = 'block';
    }
});

myAdress.addEventListener('input', (event) => {
    
    if (myAdress.value.trim().length > 4){
        console.log('Adressen er lang nok');
        adressError.textContent = '';
        myAdress.classList.remove('invalid');
        myAdress.classList.add('valid');
        adressError.style.display = 'none';
    } else{
        console.log('Adressen er IKKE lang nok');
        adressError.textContent = 'Adresse skal være minimum 5 tegn';
        myAdress.classList.remove('valid');
        myAdress.classList.add('invalid');
        adressError.style.display = 'block';
    }

});

myPostalNumber.addEventListener('input', (event) => {
    
    if (postalValidation(myPostalNumber.value)){
        console.log('Dette er et gyldigt postnummer');
        postalError.textContent = '';
        myPostalNumber.classList.remove('invalid');
        myPostalNumber.classList.add('valid');
        postalError.style.display = 'none';
    }  else{
        console.log('Dette er IKKE et gyldigt postnummer');
        postalError.textContent = 'Postnummer må kun være tal';
        myPostalNumber.classList.remove('valid');
        myPostalNumber.classList.add('invalid');
        postalError.style.display = 'block';
    }
});

myEmail.addEventListener('input', (event) => {
    if(emailValidation(myEmail.value)){
        console.log('Dette er en gyldig email')
        emailError.textContent = '';
        myEmail.classList.remove('invalid');
        myEmail.classList.add('valid');
        emailError.style.display = 'none';
    } else{
        console.log('Dette er IKKE en gyldig email');
        emailError.textContent = 'Email skal være gyldig';
        myEmail.classList.remove('valid');
        myEmail.classList.add('invalid');
        emailError.style.display = 'block';
    }
});


myButton.addEventListener('click', (event) =>{
    event.preventDefault();

    if(myFirstName.value.trim().length > 1 && myLastName.value.trim().length > 1 && myAdress.value.trim().length > 5 && postalValidation(myPostalNumber.value) && emailValidation(myEmail.value)){
        console.log('Formen er udfyldt korrekt');

        console.clear();

        let myResponseElement = document.createElement('h2');
        myResponseElement.innerText = 'Tak for din tilmelding!';
        
        formContain.appendChild(myResponseElement);

        formParent.style.display = 'none';
        heading.style.display = 'none';

        myResponseElement.style.display = 'block';
        myResponseElement.style.textAlign = 'center';
        myResponseElement.style.marginTop = '20%';
        myResponseElement.style.fontSize = '4vw';
    } else{
        alert('Formularen skal udfyldes!')
    }

});

function postalValidation(postnummer){
    let postalRegex = /^\d+$/;

    let isValid = postalRegex.test(postnummer);

    return isValid;
};

function emailValidation(email){
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = emailRegex.test(email);

    return isValid;
};