// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBody = document.querySelector('.modal-body');

// close modal form
export function closeModal() {
    modalbg.style.display = "none";
}

// 
export function launchModal() {
    const form = /*html*/`
        <form name="reserve" action="index.html" method="post"  id="form">
                                    

            <div class="formData" id="firstnameField">
                
                <label for="firstname ">Prénom</label><br>
                <input class="text-control" type="text" id="firstname" name="firstname" placeholder="Veuillez entrer 2 caractères ou plus" /><br>
            </div>

            <div class="formData" id="lastnameField">
                <label for="lastname">Nom</label><br>
                <input class="text-control" type="text" id="lastname" name="lastname" placeholder="Veuillez entrer 2 caractères ou plus"/><br>
            </div>

            <div class="formData" id="emailField">
                <label for="email">E-mail</label><br>
                <input class="text-control" type="text" id="email" name="email" placeholder="veuillez entrer email valide"/><br>
            </div>

            <div class="formData" id="birthdateField">
                <label for="birthdate">Date de naissance</label><br>
                <input class="text-control" type="date" id="birthdate" name="birthdate" /><br>
            </div>

            <div class="formData" id="quantityField">
                <label for="quantity">À combien de tournois GameOn avez-vous déjà participé ?</label><br>
                <input type="number" class="text-control" id="quantity" name="quantity" placeholder="veuillez entrer un nombre entre 1 et 50">
            </div>

            <p class="text-label">Quelles villes ?</p>

            <div class="formData" id="locationField">
                <input class="checkbox-input" type="radio" id="location1" name="location" value="New York" />
                <label class="checkbox-label" for="location1">
                    <span class="checkbox-icon"></span>
                    New York
                </label>
                <input class="checkbox-input" type="radio" id="location2" name="location" value="San Francisco" />
                <label class="checkbox-label" for="location2">
                    <span class="checkbox-icon"></span>
                    San Francisco
                </label>
                <input class="checkbox-input" type="radio" id="location3" name="location" value="Seattle" />
                <label class="checkbox-label" for="location3">
                    <span class="checkbox-icon"></span>
                    Seattle
                </label>
                <input class="checkbox-input" type="radio" id="location4" name="location" value="Chicago" />
                <label class="checkbox-label" for="location4">
                    <span class="checkbox-icon"></span>
                    Chicago
                </label>
                <input class="checkbox-input" type="radio" id="location5" name="location" value="Boston" />
                <label class="checkbox-label" for="location5">
                    <span class="checkbox-icon"></span>
                    Boston
                </label>
                <input class="checkbox-input" type="radio" id="location6" name="location" value="Portland" />
                <label class="checkbox-label" for="location6">
                    <span class="checkbox-icon"></span>
                    Portland
                </label>
            </div>

            <div class="formData" id="checkboxField">
                <input class="checkbox-input" type="checkbox" id="checkbox1" name="checkbox"/>
                <label class="checkbox2-label" for="checkbox1">
                    <span class="checkbox-icon"></span>
                    J'ai lu et accepté les conditions d'utilisation.
                </label>
                <br>
                <input class="checkbox-input" type="checkbox" id="checkbox2" name="checkbox"/>
                <label class="checkbox2-label" for="checkbox2">
                    <span class="checkbox-icon"></span>
                    Je souhaite être prévenu des prochains évènements.
                </label>
                <br>
            </div>

            <input class="btn-submit" type="submit" class="button" value="C'est parti" />

        </form>
    `;
    modalBody.innerHTML = form;
    modalbg.style.display = "block";
}