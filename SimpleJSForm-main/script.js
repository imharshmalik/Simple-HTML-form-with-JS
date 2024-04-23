const form = document.getElementById("myform");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const about = document.getElementById("about").value;
  const country = document.getElementById("country").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const birthday = document.getElementById("birthday").value;
  const file = document.getElementById("file").value;
  const boxcheck = document.getElementById("agree").checked;

  if (name.trim() === "") {
    message.textContent = "Please enter a name";
  } else if (email.trim() === "") {
    message.textContent = "Please enter an email";
  } else if (!isValidEmail(email)) {
    message.textContent = "Please enter a valid email.";
  } else if (country === "none") {
    message.textContent = "Please select a country";
  } else if (!gender) {
    message.textContent = "Please select your gender";
  } else if (birthday === "") {
    message.textContent = "Please enter your birthday";
  } else if (!boxcheck) {
    message.textContent = "Please tick the checkbox";
  } else {
    message.textContent = `Congratulations ${name}. Form submitted successfully!`;
    form.reset();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
