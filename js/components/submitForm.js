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

// show thanks div on submit success
const thanks = document.querySelector('.thanks')
const body = document.querySelector('.modal-body')
const modalBtnClose = document.querySelector('.close')

function resetField(){
    const firstname = getFirstname()
    const lastname = getLastname()
    const eMail = getEmail()
    const birthDate = getBirthDate()
    const quantityTournament = getQuantityTournament()
    // radio btn list
    const locationRadio = getLocationRadio()
    // checkbox list
    const checkList = getCheckList()

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

// vérifier tous les champs formulaires, si ok passer border en vert sinon msg error
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
// submit Form, si tous les champs validés alors 
// on vide les champs
// on cache modal
// et on montre remerciement
// sinon on  validateAllFields()
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
        modalBtnClose.classList.add('hidden')

    }else{
        validateAllFields()
    }

}