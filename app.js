const form = document.getElementById('form');
const name  = document.getElementById('f-name');
const email = document.getElementById('f-mail');

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-name error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-name success';
}

function isEmail(email) {
  return /^[a-z0-9.!#$%&'*+=?^_`{|}~-]+@[a-z0-9](?:[a-zA-Z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/.test(email);
}

function checkImputs() {
  const usernameValue = name.value.trim();
  const usermailValue = email.value.trim();

  if (usernameValue === '') {
    setErrorFor(name, 'Full name cannot be in blank');
  } else {
    setSuccessFor(email);
  }
  if (usermailValue === '') {
    setErrorFor(email, 'Email address cannot be in blank');
  } else if (!isEmail(usermailValue)) {
    setErrorFor(email, 'Email address is not valid');
  } else {    
    setSuccessFor(name);
  }
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkImputs();
});
