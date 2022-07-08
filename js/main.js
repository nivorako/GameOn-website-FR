import {editNav} from "./components/editNav.js";
import { validate } from "./components/validate.js";
import {  launchModal, closeModal } from "./components/modal.js";
 
const navIcon = document.querySelector('.icon');
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector("#close");
const form = document.getElementById("form");
const thanksBtn = document.querySelector('.thanks-closeBtn')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);

// validate form
form.addEventListener('submit',(e) => {
  e.preventDefault();
  console.log("hop validate!!!")
  validate();
});

// close thanks modal
thanksBtn.addEventListener("click", closeModal)

// set click event on icon bar when max-width 760
navIcon.addEventListener('click', () => {
  editNav();
});