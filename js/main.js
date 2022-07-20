import { editNav } from "./components/editNav.js";
import {
    fieldsValidation,
    validateEmail,
    validateBirthdate,
    validateFirstName,
    validateLastName,
    validateTournament,
    validateLocation,
    validateCheck
} from "./components/validate.js";
import {
    getEmail,
    getBirthDate,
    getFirstname,
    getLastname,
    getQuantityTournament,
    getLocationField,
    getCheckbox
} from "./components/getElement.js";
import { launchModal, closeModal } from "./components/modal.js";
import { submitForm } from "./components/submitForm.js"

const navIcon = document.querySelector('.icon');
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector("#close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
    launchModal()
    const email = getEmail();
    const birthDate = getBirthDate();
    const firstname = getFirstname();
    const lastname = getLastname();
    const quantityTournament = getQuantityTournament();
    const location = getLocationField();
    const check = getCheckbox();

    const thanksBtn = document.querySelector('.thanks-closeBtn')

    // validate appropriate function on each field focusout
    fieldsValidation(email, validateEmail, 'focusout');
    fieldsValidation(birthDate, validateBirthdate, 'focusout');
    fieldsValidation(firstname, validateFirstName, 'focusout');
    fieldsValidation(lastname, validateLastName, 'focusout');
    fieldsValidation(quantityTournament, validateTournament, 'focusout');
    // validate appropriate function on each field change
    fieldsValidation(location, validateLocation, 'change');
    fieldsValidation(check, validateCheck, 'change')

const modalBtn = document.querySelectorAll(".modal-btn");

    // close modal event
    modalClose.addEventListener("click", closeModal);

    // validate form
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitForm();
    });

    // close thanks modal
    thanksBtn.addEventListener("click", closeModal)

}));

// set click event on icon bar when max-width 760
navIcon.addEventListener('click', () => {
    editNav();
});