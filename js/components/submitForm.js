import { closeModal } from "./modal.js";

import {  
    validateEmail,
    validateBirthdate,
    validateFirstName,
    validateLastName,
    validateTournament,
    validateLocation,
    validateCheck } from "./validate.js";


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
    }else{
        console.log('il en reste')
    }

}