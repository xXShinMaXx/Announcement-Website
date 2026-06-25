const menu =
document.querySelector('#mobile-menu');

const menuLinks =
document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {

  menu.classList.toggle('is-active');

  menuLinks.classList.toggle('active');

});

// =========================
// LOGIN SUCCESS
// =========================

const params =
new URLSearchParams(
  window.location.search
);

if(
  params.get("login") === "success"
) {

  localStorage.setItem(
    "loggedIn",
    "true"
  );

}


// =========================
// PAGE PROTECTION
// =========================

const currentPage =
window.location.pathname.split('/').pop();

const protectedPages = [
  "",
  "index.html",
  "archive.html",
  "announcements.html"
];

const isLoggedIn =
localStorage.getItem(
  "loggedIn"
);


// IMPORTANT:
// NEVER protect auth.html

if (
  currentPage === "" ||
  protectedPages.includes(currentPage)
) {
  if (isLoggedIn !== "true") {
    alert("先にサインインしてください。");
    window.location.href = "auth.html";
  }
}


// =========================
// AUTH BUTTON
// =========================

const authButton =
document.getElementById(
  "authButton"
);

if(authButton) {

  if(isLoggedIn === "true") {

    authButton.innerText =
      "ログアウト";

    authButton.href = "#";

    authButton.addEventListener(
      "click",
      function(e) {

        e.preventDefault();

        localStorage.removeItem(
          "loggedIn"
        );

        window.location.href =
          "auth.html";

      }
    );

  }

}


// =========================
// LOGIN / SIGNUP TABS
// =========================

const loginForm =
document.getElementById(
  "login__form"
);

const signupForm =
document.getElementById(
  "signup__form"
);

const buttons =
document.querySelectorAll(
  ".tab__btn"
);


function showLogin() {

  if(loginForm && signupForm) {

    loginForm.style.display =
      "block";

    signupForm.style.display =
      "none";

    buttons[0].classList.add(
      "active"
    );

    buttons[1].classList.remove(
      "active"
    );

  }

}


function showSignup() {

  if(loginForm && signupForm) {

    loginForm.style.display =
      "none";

    signupForm.style.display =
      "block";

    buttons[1].classList.add(
      "active"
    );

    buttons[0].classList.remove(
      "active"
    );

  }

}


// =========================
// PASSWORD VALIDATION
// =========================

const signupFormElement =
document.querySelector(
  '#signup__form form'
);

if(signupFormElement) {

  signupFormElement.addEventListener(
    'submit',
    function(e) {

      const password =

      signupFormElement.querySelector(
        'input[name="password"]'
      ).value;

      const confirmPassword =

      signupFormElement.querySelector(
        'input[name="confirm_password"]'
      ).value;

      if(password !== confirmPassword) {

        e.preventDefault();

        alert(
          "パスワードが一致しません"
        );

      }

    }
  );

}


// =========================
// LOGIN SUCCESS POPUP
// =========================

const popup =
document.getElementById(
  "welcomePopup"
);

if(popup) {

  if(
    params.get("login") === "success"
  ) {

    popup.classList.add(
      "active"
    );

  }

}


function closePopup() {

  const popup =
  document.getElementById(
    "welcomePopup"
  );

  if(popup) {

    popup.classList.remove(
      "active"
    );

  }

}