const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");
const placeholder = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const validEmail = email.value;

  if (validateEmail(email.value)) {
    error.classList.remove("err");
  } else {
    error.classList.add("err");
    email.classList.add("red-border");
    placeholder.setAttribute('placeholder', 'email@example/com');
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
