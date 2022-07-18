import {editNav} from "./components/editNav.js";
import { fieldsValidation, 
         validateEmail,
         validateBirthdate,
         validateFirstName,
         validateLastName,
         validateTournament,
         validateLocation,
         validateCheck } from "./components/validate.js";
import {  launchModal, closeModal } from "./components/modal.js";
import { submitForm } from "./components/submitForm.js"
 
const navIcon = document.querySelector('.icon');
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector("#close");

const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const quantityTournament = document.getElementById('quantity');
const location = document.getElementById('locationField');
const check = document.getElementById('checkbox1')
//const form = document.getElementById("form");

// validate appropriate function on each field focusout
fieldsValidation(email, validateEmail, 'focusout');
fieldsValidation(birthDate, validateBirthdate, 'focusout');
fieldsValidation(firstname, validateFirstName, 'focusout');
fieldsValidation(lastname, validateLastName, 'focusout');
fieldsValidation(quantityTournament, validateTournament, 'focusout');
// validate appropriate function on each field change
fieldsValidation(location, validateLocation, 'change');
fieldsValidation(check, validateCheck, 'change')


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);

// validate form
form.addEventListener('submit',(e) => {
  e.preventDefault();
  submitForm();
});

// set click event on icon bar when max-width 760
navIcon.addEventListener('click', () => {
  editNav();
});