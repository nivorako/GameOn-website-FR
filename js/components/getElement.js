const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const eMail = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantityTournament = document.getElementById('quantity');
// radio btn list
const locationRadio = document.querySelectorAll('input[name = "location"]');
// checkbox list
const checkList = document.querySelectorAll('input[name = "checkbox"]');
const checkBox1 = document.getElementById('checkbox1');
const location = document.getElementById('locationField');


export function getFirstname(){
    return document.getElementById('firstname')
}

export function getLastname() {
    return document.getElementById('lastname')
}

export function getEmail(){
    return document.getElementById('email')
}

export function getBirthDate(){
    return document.getElementById('birthdate')
}

export function getQuantityTournament(){
    return document.getElementById('quantity')
}

export function getLocationRadio(){
    return document.querySelectorAll('input[name = "location"]')
}

export function getCheckList(){
    return document.querySelectorAll('input[name = "checkbox"]')
}

export function getCheckbox(){
    return document.getElementById('checkbox1');
}

export function getLocationField(){
    return document.getElementById('locationField')
}