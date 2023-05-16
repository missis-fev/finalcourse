const passwordField1 = document.querySelector(".password-user-form-1");
const passwordField2 = document.querySelector(".password-user-form-2");
passwordField2.addEventListener("input", () => {
  if (passwordField1.value === passwordField2.value) {
    passwordField1.style.border = "2px solid green";
    passwordField2.style.border = "2px solid green";
  } else {
    passwordField1.style.border = "2px solid red";
    passwordField2.style.border = "2px solid red";
  }
});