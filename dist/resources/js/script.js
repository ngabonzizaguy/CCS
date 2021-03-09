// SIDEBAR NAVIGATION MENU - CODE
// function to select elements
const selectElement = (element) => document.querySelector(element);

// call selectElement function, then values into variables
const header = selectElement('header');
const mainContent = selectElement('main');

// click event on hamburger menu to trigger the .active state
selectElement('.hamburger').addEventListener('click', () => {
  header.classList.toggle('active');
  mainContent.classList.toggle('active');
});

// close sidebar when clicking outside of it.
window.onclick = (event) => {
  if (event.target.matches('.active')) {
    if (header.classList.contains('active')) {
      header.classList.remove('active');
      mainContent.classList.remove('active');
    }
  }
}

// FORM-VALIDATION - CODE
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === '') {
    // show error
    // show error class
    setErrorFor(username, 'Username cannot be blank');
  } else {
    // add success class
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if (password1Value === '') {
    setErrorFor(password1, 'Password cannot be blank');
  } else {
    setSuccessFor(password1);
  }

  if (password2Value === '') {
    setErrorFor(password2, 'Password-2 cannot be blank');
  } else if (password1Value !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
  } else {
    setSuccessFor(password2);
  }

  // show a success message
}

function setErrorFor(input, message) {
  const formCtrl = input.parentElement; // .form-control
  const small = formCtrl.querySelector('small');

  // add error message inside small
  small.innerText = message;

  // add error class
  formCtrl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formCtrl = input.parentElement;
  formCtrl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// REGISTRATION-FORM BOX-MODAL - placeholder// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
