import { closeModal } from "./modal.js";

// check if radio btn is selected on submit
const locationChecked = document.querySelectorAll('input[name="location"]:checked');

// radio btn list
const locationRadio = document.querySelectorAll('input[name = "location"]');

// check if checkbox is checked
const checkBox1 = document.getElementById('checkbox1');

// checkbox list
const checkList = document.querySelectorAll('input[name = "checkbox"]');


// form must be valid when user click on "submit"
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const eMail = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantityTournament = document.getElementById('quantity');

// error list
const errorList = {
    "firstname": "veuillez ecrire deux caractères au minimum",
    "lastname": "veuillez ecrire deux caractères au minimum",
    "email": "veuillez entrez un mail valide",
    "birthdate": "trop jeune pour zouer",
    "quantity": "Entrez un chiffre entre 0 et 50",
    'location': "choisissez une ville",
    "checkbox": "veuillez valder la condition générale"
}


// email validation
function validateEmail(emailValue) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(emailValue)
}

// birth date validation, will be over 1 year
function validateBirthdate(date) {
    const dateNow = new Date();
    return (dateNow.getFullYear() - new Date(date).getFullYear());
}

// set data error for each elt according to id
function setErrorFor(id) {
    document.getElementById(id + 'Field').setAttribute('data-error-visible', true);
    document.getElementById(id + 'Field').setAttribute('data-error', errorList[id]);
}
// remove data error 
function removeErrorFor(id) {
    document.getElementById(id + 'Field').setAttribute('data-error-visible', false);
}


// export function validate() {
//     let error = 0;

//     if (firstname.value.length <= 2) {
//         setErrorFor('firstname');
//         error++;
//     } else {
//         removeErrorFor('firstname');
//     }

//     if (lastname.value.length <= 2) {
//         setErrorFor('lastname');
//         error++;
//     } else {
//         removeErrorFor('lastname');
//     }

//     if (!validateEmail(eMail.value)) {
//         setErrorFor('email');
//         error++;
//     } else {
//         removeErrorFor('email');
//     }

//     if ((validateBirthdate(birthDate.value) <= 1) || (birthDate.value === "")) {
//         setErrorFor('birthdate');
//         error++;
//     } else {
//         removeErrorFor('birthdate');
//     }

//     if ((quantityTournament.value <= 0) || (quantityTournament.value >= 50)) {
//         setErrorFor('quantity');
//         error++;
//     } else {
//         removeErrorFor('quantity');
//     }

//     if (locationChecked.length === 0) {
//         setErrorFor('location');
//         error++;
//     } else {
//         removeErrorFor('location');
//     }

//     if (!checkBox1.checked) {
//         setErrorFor('checkbox');
//         error++;
//     }
//     else {
//         removeErrorFor('checkbox');
//     }

//     if (error === 0) {
//         firstname.value = "";
//         lastname.value = "";
//         eMail.value = "";
//         birthDate.value = "";
//         quantityTournament.value = "";
//         for (let i = 0; i < locationRadio.length; i++) {
//             locationRadio[i].checked = "";
//         }
//         for (let i = 0; i < checkList.length; i++) {
//             checkList[i].checked = "";
//         }
//         closeModal();
//     }
// }