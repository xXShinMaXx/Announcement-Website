const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const loginForm = document.getElementById("login__form");
const signupForm = document.getElementById("signup__form");

const buttons = document.querySelectorAll(".tab__btn");

function showLogin() {

  loginForm.style.display = "block";
  signupForm.style.display = "none";

  buttons[0].classList.add("active");
  buttons[1].classList.remove("active");
}

function showSignup() {

  loginForm.style.display = "none";
  signupForm.style.display = "block";

  buttons[1].classList.add("active");
  buttons[0].classList.remove("active");
}

const signupValidationForm = document.querySelector('#signup__form form');

signupValidationForm.addEventListener('submit', function(e) {

  const password =
    signupValidationForm.querySelector(
      'input[name="password"]'
    ).value;

  const confirmPassword =
    signupValidationForm.querySelector(
      'input[name="confirm_password"]'
    ).value;

  if(password !== confirmPassword) {

    e.preventDefault();
    alert("パスワードが一致しません");

  }

});

const params =
new URLSearchParams(window.location.search);

const message =
document.getElementById("message");

if(params.get("signup") === "success") {
  message.style.display = "block";

  message.classList.add("success");
  message.innerHTML =
  "アカウントが正常に作成されました";
  showLogin();
}

if(params.get("login") === "success") {
  message.style.display = "block";

  message.classList.add("success");
  message.innerHTML =
  "ログインに成功しました";
}

if(params.get("login") === "failed") {
  message.style.display = "block";

  message.classList.add("error");
  message.innerHTML =
  "無効なメールアドレスまたはパスワード";
}

const popup =
document.getElementById("welcomePopup");

if(popup) {

  const params =
  new URLSearchParams(
    window.location.search
  );

  if(params.get("login") === "success") {

    popup.classList.add("active");
  }

  function closePopup() {

    popup.classList.remove("active");
  }
}