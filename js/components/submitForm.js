import { closeModal } from "./modal.js";

import {  
    validateEmail,
    validateBirthdate,
    validateFirstName,
    validateLastName,
    validateTournament,
    validateLocation,
    validateCheck } from "./validate.js";


const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const eMail = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantityTournament = document.getElementById('quantity');
// radio btn list
const locationRadio = document.querySelectorAll('input[name = "location"]');
// checkbox list
const checkList = document.querySelectorAll('input[name = "checkbox"]');

// show thanks div on submit success
const thanks = document.querySelector('.thanks')
const body = document.querySelector('.modal-body')

function resetField(){
    firstname.value = ""
    lastname.value = ""
    eMail.value = ""
    birthDate.value = ""
    quantityTournament.value = ""
    for (let i = 0; i < locationRadio.length; i++) {
    locationRadio[i].checked = "";
    }
    for (let i = 0; i < checkList.length; i++) {
    checkList[i].checked = "";
    }
    //closeModal();
}

function validateAllFields(){
    validateEmail()
    validateFirstName()
    validateBirthdate()
    validateFirstName()
    validateLastName()
    validateTournament()
    validateLocation()
    validateCheck()
}
export function submitForm(){
    if(
        validateEmail() &&
        validateFirstName() &&
        validateBirthdate() &&
        validateFirstName() &&
        validateLastName() &&
        validateTournament() &&
        validateLocation() &&
        validateCheck()
    ){
        console.log('ok tout est validé')
        resetField()
        thanks.classList.remove('hidden')
        thanks.classList.add('show')
        body.classList.add('hidden')
    }else{
        console.log('il en reste')
        validateAllFields()
    }

}