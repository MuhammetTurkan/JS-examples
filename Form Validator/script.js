const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("repassword");

function err(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}

function success(input) {
  input.className = "form-control is-valid";
}
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value)) {
    success(input);
  } else {
    err(input, "Geçerli bir email adresi giriniz.");
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    err(input, `${input.id} ${min} den küçük olamaz`);
  } else if (input.value.length > max) {
    err(input, `${input.id} ${max} den büyük olamaz`);
  } else {
    success(input);
  }
}

function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    err(input2, "Şifreler uyuşmuyor.");
  }
}

function checkReuired(inputs) {
  inputs.forEach((input) => {
    if (input.value === "") {
      err(input, "Alan boş bırakılmamalı.");
    } else {
      success(input);
    }
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkReuired([username, email, password, rePassword]);
  checkEmail(email);
  checkLength(password, 5, 10);
});
