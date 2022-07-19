import { getFirstname, 
         getLastname, 
         getBirthDate,
         getEmail,
         getQuantityTournament
         } from "./getElement.js";

// check if checkbox is checked
const checkBox1 = document.getElementById('checkbox1');

const firstname = getFirstname();
const lastname = getLastname();
const eMail = getEmail();
const birthDate = getBirthDate();
const quantityTournament = getQuantityTournament();

//const REGEX pour nom prenom
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/

// error list
const errorList = {
    "firstname": "veuillez ecrire deux caractères au minimum",
    "lastname": "veuillez ecrire deux caractères au minimum",
    "email": "veuillez entrez un mail valide",
    "birthdate": "minimum deux ans pour zouer",
    "quantity": "Entrez un chiffre entre 0 et 50",
    'location': "choisissez une ville",
    "checkbox": "veuillez valder la condition générale"
}


// firstname validation
export function validateFirstName(){
    if (firstname.value.trim().length >= 2 && firstname.value.trim().match(regex)){
        setSuccessFor("firstname")
        return true
    }else{
        setErrorFor('firstname')
        return false
    }
}

// firstname validation
export function validateLastName(){
    if (lastname.value.trim().length >= 2 && lastname.value.trim().match(regex)){
        setSuccessFor("lastname")
        return true
    }else{
        setErrorFor('lastname')
        return false
    }
}

// email validation
export function validateEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailValue = eMail.value;
    if(emailValue.trim().match(re)){
        setSuccessFor("email")
        return true
    }else{
        setErrorFor('email')
        return false
    }    
}

// birth date validation, will be over 1 year
export function validateBirthdate() {
    const dateNow = new Date();
    const date = dateNow.getFullYear() - new Date(birthDate.value).getFullYear();
    if(date > 10){
        setSuccessFor("birthdate")
        return true
    }else{
        setErrorFor('birthdate')
        return false
    }
}

// tournament validation between 0 and 50 set
export function validateTournament(){
    if ((quantityTournament.value <= 0) || (quantityTournament.value >= 50)){
        setErrorFor("quantity")
        return false
    }else{
        setSuccessFor('quantity')
        return true
    }
}

// location validation
export function validateLocation(){
    // check if radio btn is selected on submit
    const locationChecked = document.querySelectorAll('input[name="location"]:checked');
    if (locationChecked.length === 0) {
        setErrorFor('location')
        return false
    }else{
        removeErrorFor('location')
        return true
    }
}

// checkbox validation
export function validateCheck(){
    if (!checkBox1.checked){
        setErrorFor("checkbox")
        return false
    }else{
        removeErrorFor("checkbox")
        return true
    }
}

// check fields validation on each focus out
export function fieldsValidation(elt, method, event){
    elt.addEventListener(event, method)
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

// set success for eache elt according to id
function setSuccessFor(id) {
    document.getElementById(id + 'Field').setAttribute('data-error-visible', false);
}

