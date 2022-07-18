

// radio btn list
const locationRadio = document.querySelectorAll('input[name = "location"]');

// check if checkbox is checked
const checkBox1 = document.getElementById('checkbox1');

// checkbox list
const checkList = document.querySelectorAll('input[name = "checkbox"]');

// Modal-body
const modal = document.querySelector('.modal-body')

//thanks
const thanks = document.querySelector('.thanks')

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
    "birthdate": "minimum deux ans pour zouer",
    "quantity": "Entrez un chiffre entre 0 et 50",
    'location': "choisissez une ville",
    "checkbox": "veuillez valder la condition générale"
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
function setErrorFor(id) {
    document.getElementById(id + 'Field').setAttribute('data-error-visible', true);
    document.getElementById(id + 'Field').setAttribute('data-error', errorList[id]);
}
// remove data error 
function removeErrorFor(id) {
    document.getElementById(id + 'Field').setAttribute('data-error-visible', false);
}


export function validate() {
    // check if radio btn is selected on submit
const locationChecked = document.querySelectorAll('input[name="location"]:checked');

   
    let error = 0;

    if (firstname.value.length <= 2) {
        setErrorFor('firstname');
        error++;
    } else {
        removeErrorFor('firstname');
        firstname.classList.add('success')
    }

    if (lastname.value.length <= 2) {
        setErrorFor('lastname');
        error++;
    } else {
        removeErrorFor('lastname');
        lastname.classList.add('success')
    }

    if (!validateEmail(eMail.value)) {
        setErrorFor('email');
        error++;
    } else {
        removeErrorFor('email');
        eMail.classList.add("success")
    }

    if ((validateBirthdate(birthDate.value) <= 1) || (birthDate.value === "")) {
        setErrorFor('birthdate');
        error++;
    } else {
        removeErrorFor('birthdate');
        birthDate.classList.add('success')
    }

    if ((quantityTournament.value <= 0) || (quantityTournament.value >= 50)) {
        setErrorFor('quantity');
        error++;
    } else {
        removeErrorFor('quantity');
    }

    if (locationChecked.length === 0) {
        console.log('check not ok')
        console.log("locationChecked.length: ", locationChecked.length)
        setErrorFor('location');
        error++;
    } else {
        removeErrorFor('location');
        console.log("check ok")
        console.log("locationChecked.length: ", locationChecked.length)
    }

    if (!checkBox1.checked) {   
        setErrorFor('checkbox');
        error++;
    }
    else {
        removeErrorFor('checkbox');
    }

    if (error === 0) {
        firstname.value = "";
        lastname.value = "";
        eMail.value = "";
        birthDate.value = "";
        quantityTournament.value = "";
        for (let i = 0; i < locationRadio.length; i++) {
            locationRadio[i].checked = "";
        }
        for (let i = 0; i < checkList.length; i++) {
            checkList[i].checked = "";
        }
        modal.classList.add('hidden')
        thanks.classList.remove('hidden')
    }
}