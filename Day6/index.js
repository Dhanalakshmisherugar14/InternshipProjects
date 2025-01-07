const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const surname = document.getElementById("surname");
const company = document.getElementById("company");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
// event

form.addEventListener("submit", (e) => {
  e.preventDefault();

  valildateInputs();
});










const valildateInputs = () => {
  const firstName = form
    .querySelector('input[placeholder="First name"]')
    .value.trim();
  const surname = form
    .querySelector('input[placeholder="Surname"]')
    .value.trim();
  const company = form
    .querySelector('input[placeholder="Company"]')
    .value.trim();
  const jobTitle = form
    .querySelector('input[placeholder="Job title"]')
    .value.trim();
  const email = form.querySelector('input[placeholder="Email"]').value.trim();
  const phone = form.querySelector('input[placeholder="Phone"]').value.trim();

  if (firstName == "" || email == "" || phone == "") {
    alert("Please fill required field");
    return;
  }

  if (firstName == "" || firstName.length < 2 || firstName.length > 10) {
    alert("Please enter a  valid Full name with 2-10 char");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number");
    return;
  }

  const newContact = {
    id: generateId(),
    firstName,
    surname,
    company,
    email,
    phone,
    createdAt: new Date().toISOString(),
  };
};
