// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBody = document.querySelector('.modal-body');

// close modal form
export function closeModal() {
  modalbg.style.display = "none";
}

// 
export function launchModal() {
  modalbg.style.display = "block";
}