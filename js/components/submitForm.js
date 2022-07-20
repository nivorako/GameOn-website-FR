import { getFirstname,
         getLastname,
         getEmail,
         getBirthDate,
         getQuantityTournament,
         getLocationRadio,
         getCheckList
         } from "./getElement.js";

import {  
    validateEmail,
    validateBirthdate,
    validateFirstName,
    validateLastName,
    validateTournament,
    validateLocation,
    validateCheck 
    } from "./validate.js";


const firstname = getFirstname()
const lastname = getLastname()
const eMail = getEmail()
const birthDate = getBirthDate()
const quantityTournament = getQuantityTournament()
// radio btn list
const locationRadio = getLocationRadio()
// checkbox list
const checkList = getCheckList()

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
        resetField()
        thanks.classList.remove('hidden')
        thanks.classList.add('show')
        body.classList.add('hidden')
    }else{
        validateAllFields()
    }

}