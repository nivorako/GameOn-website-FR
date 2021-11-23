function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector("#close");
const formDatas = document.querySelectorAll('.formData');

// form must be valid when user click on "submit"
const form = document.getElementById("form");
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const eMail = document.getElementById ('email');
const birthDate = document.getElementById ('birthdate');
const quantityTournament = document.getElementById ('quantity');

// check if radio btn is selected on submit
const locationButton = document.querySelectorAll('input[name = "location"]:checked');

// check if checkbox is checked
const checkBox = document.getElementById('checkbox1');

const loc1 = document.getElementById ('location1');
const loc2 = document.getElementById ('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');

const dateFormat = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const numbers = /^[0-9]+$/;

// error list
const errorList = {
  "firstname" : "veuillez ecrire deux caractères au minimum",
  "lastname" : "veuillez ecrire deux caractères au minimum",
  "email" : "veuillez entrez un mail valide",
  "birthdate": "trop jeune pour zouer",
  "quantity": "Entrez un chiffre entre 0 et 50",
  'location': "choisissez une ville",
  "checkbox": "veuillez valder la condition générale"
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
//modalClose.foreach((elt) => elt.addEventListener("click", closeModal));
modalClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {  
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// email validation
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// birth date validation, will be over 1 year
function validateBirthdate(date) {
  const dateNow = new Date();
  return (dateNow.getFullYear() - new Date(date).getFullYear());
} 

// set data error for each elt according to id
function setErrorFor(id){
  document.getElementById(id + 'Field').setAttribute('data-error-visible', true);
  document.getElementById(id + 'Field').setAttribute('data-error', errorList[id]);
}



function validate(){
  // alert (locationButton.length);
  if (firstname.value.length <= 2 ) {
    setErrorFor('firstname');

    return false;
  }
  else if (lastname.value.length <= 2) { 
    setErrorFor('lastname');
    return false;
  } 
  else if (!validateEmail(eMail.value)) { 
    setErrorFor('email');
    return false;
  } 
  else if ((validateBirthdate(birthDate.value) <= 1) ||  (birthDate.value === "")){ 
    setErrorFor('birthdate');
    return false;
  } 
  else if ((quantityTournament.value <= 0 ) || (quantityTournament.value >= 50)) { 
    setErrorFor('quantity');
    return false;
  } 
  else if (locationButton.length === 0) { 
    setErrorFor('location');
    return false;
  } 
  else if (!checkBox.checked) { 
    setErrorFor('checkbox');
    return false;
  } 
}