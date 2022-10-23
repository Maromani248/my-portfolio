// SECTIONS
let homeSection = document.querySelector(".home-section");
let aboutmeSection = document.querySelector(".aboutme-section");
let projectsSection = document.querySelector(".projects-section");
let contactSection = document.querySelector(".contact-section");
let thanksContactSection = document.querySelector(".thanks-contact-section");

// FORM 
let nameInput = document.querySelector("#input-name");
let nameErrorDiv = document.querySelector(".form-name-error");
let emailInput = document.querySelector("#input-email");
let emailErrorDiv = document.querySelector(".form-email-error");
let messageInput = document.querySelector("#textarea-mensaje");
let messageErrorDiv = document.querySelector(".form-message-error");

// BUTTONS 
let aboutmeButton = document.querySelector("#acerca-de-mi");
let projectsButton = document.querySelector("#proyectos");
let contactButton = document.querySelector("#contacto");

let menuHomeButton = document.querySelector("#a-home");
let menuAboutmeButton = document.querySelector("#a-aboutme");
let menuProjectButton = document.querySelector("#a-project");
let menuContactButton = document.querySelector("#a-contact");


aboutmeButton.addEventListener('click', event=>{
    event.preventDefault();
    homeSection.style.display = 'none';
    aboutmeSection.style.display = 'block';
});

projectsButton.addEventListener("click", event=> {
  event.preventDefault();
  homeSection.style.display = "none";
  projectsSection.style.display = "block";
});

contactButton.addEventListener("click", event=> {
  event.preventDefault();
  homeSection.style.display = "none";
  contactSection.style.display = "block";
});


// BUTTONS MENU
menuHomeButton.addEventListener("click", (event) => {
  aboutmeSection.style.display = "none";
  projectsSection.style.display = "none";
  contactSection.style.display = "none";
  thanksContactSection.style.display = "none";

  homeSection.style.display = "block";
});

menuAboutmeButton.addEventListener("click", (event) => {
  homeSection.style.display = "none";
  projectsSection.style.display = "none";
  contactSection.style.display = "none";
  thanksContactSection.style.display = "none";

  aboutmeSection.style.display = "block";
});

menuProjectButton.addEventListener("click", (event) => {
  homeSection.style.display = "none";
  contactSection.style.display = "none";
  aboutmeSection.style.display = "none";
  thanksContactSection.style.display = "none";

  projectsSection.style.display = "block";
});

menuContactButton.addEventListener("click", (event) => {
  homeSection.style.display = "none";
  projectsSection.style.display = "none";
  aboutmeSection.style.display = "none";
  thanksContactSection.style.display = "none";
  
  contactSection.style.display = "block";
});


// CONTACT
let confirmButton = document.querySelector('.button-contact');

let nameValidation = false;
let emailValidation = false;
let messageValidation = false;

// Secciones Formulario y Thanks
let formSection = document.querySelector(".contact-form");
let thanksSection = document.querySelector('.thanks-contact-section');

confirmButton.addEventListener('click', event=>{
  event.preventDefault();

  // Validar nombre
  if (verifyIsFilled(nameInput, nameErrorDiv)) {
    nameValidation = true;
  } else {
    nameValidation = false;
  }

  // Validar email
  if (verifyIsFilled(emailInput, emailErrorDiv)) {
    emailValidation = true;
  } else {
    emailValidation = false;
  }

  // Validar mensaje
  if (verifyIsFilled(messageInput, messageErrorDiv)) {
    messageValidation = true;
  } else {
    messageValidation = false;
  }

  if (nameValidation == true && emailValidation == true && messageValidation == true) {
    formSection.style.display = "none";
    thanksSection.style.display = "block";
  }
})

// FUNTIONS
function showError(divInput, divError, msgError, show = true) {
  if (show) {
    divError.innerText = msgError;
    divInput.style.borderColor = "#d1495b";
  } else {
    divError.innerText = msgError;
    divInput.style.borderColor = "hsl(270, 3%, 87%)";
  }
}

function verifyIsFilled(divInput, divError) {
  if (divInput.value.length > 0) {
    showError(divInput, divError, "", false);
    return true;
  } else {
    showError(divInput, divError, "No puede estar vacío");
    return false;
  }
}