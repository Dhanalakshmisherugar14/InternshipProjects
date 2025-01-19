const contact_list = document.getElementById("contact-list");
const formContainer = document.getElementById("form");
const create_contact = document.getElementById("create-contact");
const closeForm = document.getElementById("closeButton");
const contactForm = document.getElementById("contactForm");
const contactTable = document.getElementById("contact-table");

let contactData = [];
let editingContactIndex = null;

create_contact.addEventListener("click", function () {
  formContainer.classList.toggle("d-block");
  contact_list.classList.toggle("d-none");
});

closeButton.addEventListener("click", function () {
  formContainer.classList.remove("d-block");
  contact_list.classList.remove("d-none");
  contact_list.classList.add("d-block");
  resetForm();
});

function getData() {
  contactData = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    try {
      const value = JSON.parse(localStorage.getItem(key));
      contactData.push(value);
    } catch (e) {
      alert("Unable to store the data.");
    }
  }
}

function fillTable() {
  contactTable.innerHTML = "";
  contactData.forEach((element, index) => {
    contactTable.innerHTML += `
      <tr>
        <td>${element.firstName}</td>
        <td>${element.surname}</td>
        <td>${element.email}</td>
        <td>${element.phone}</td>
        <td>${element.company}</td>
        <td>
          <button class="btn btn-sm btn-warning edit-btn" data-index="${index}">Edit</button>
          <button class="btn btn-sm btn-danger delete-btn" data-index="${index}">Delete</button>
        </td>
      </tr>`;
  });
  addEventListeners();
}

// Add event listeners for edit and delete buttons
function addEventListeners() {
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      editContact(index);
    });
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      deleteContact(index);
    });
  });
}

// Reset form
function resetForm() {
  contactForm.reset();
  editingContactIndex = null;
  clearErrors();
}

function editContact(index) {
  const contact = contactData[index];
  editingContactIndex = index;

  formContainer.classList.add("d-block");
  contact_list.classList.add("d-none");

  contactForm.querySelector('input[placeholder="First name"]').value = contact.firstName;
  contactForm.querySelector('input[placeholder="Surname"]').value = contact.surname;
  contactForm.querySelector('input[placeholder="Company"]').value = contact.company;
  contactForm.querySelector('input[placeholder="Email"]').value = contact.email;
  contactForm.querySelector('input[placeholder="Phone"]').value = contact.phone;
}

function deleteContact(index) {
  const contact = contactData[index];
  const isConfirmed = confirm("Are you sure you want to delete this contact");

  if (isConfirmed) {
    localStorage.removeItem(contact.firstName);
    contactData.splice(index, 1);
    fillTable();
    alert(`Contact "${contact.firstName} ${contact.surname}" has been deleted.`);
  }
}

function validateName(name) {
  const nameRegex = /^[A-Za-z\s]+$/;
  return nameRegex.test(name);
}

function validatePhoneNumber(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => message.remove());

  const invalidFields = document.querySelectorAll(".invalid");
  invalidFields.forEach((field) => field.classList.remove("invalid"));
}

function showError(inputField, message) {
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = message;

  inputField.classList.add("invalid");
  inputField.parentNode.appendChild(errorMessage);
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formElements = {
    firstName: contactForm.querySelector('input[placeholder="First name"]').value,
    surname: contactForm.querySelector('input[placeholder="Surname"]').value,
    company: contactForm.querySelector('input[placeholder="Company"]').value,
    email: contactForm.querySelector('input[placeholder="Email"]').value,
    phone: contactForm.querySelector('input[placeholder="Phone"]').value,
  };

  clearErrors();

  let isValid = true;

  // Validate First Name
  if (!formElements.firstName || !validateName(formElements.firstName)) {
    showError(contactForm.querySelector('input[placeholder="First name"]'), "Please enter a valid name.");
    isValid = false;
  }

  // Validate Surname
  if (!formElements.surname || !validateName(formElements.surname)) {
    showError(contactForm.querySelector('input[placeholder="Surname"]'), "Please enter a valid surname.");
    isValid = false;
  }

  // Validate Email
  if (!formElements.email || !validateEmail(formElements.email)) {
    showError(contactForm.querySelector('input[placeholder="Email"]'), "Please enter a valid email.");
    isValid = false;
  }

  // Validate Phone
  if (!formElements.phone || !validatePhoneNumber(formElements.phone)) {
    showError(contactForm.querySelector('input[placeholder="Phone"]'), "Please enter a valid 10-digit phone number.");
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  if (editingContactIndex !== null) {
    const oldContact = contactData[editingContactIndex];
    localStorage.removeItem(oldContact.firstName);

    contactData[editingContactIndex] = formElements;
    localStorage.setItem(formElements.firstName, JSON.stringify(formElements));
    editingContactIndex = null;
  } else {
    contactData.push(formElements);
    localStorage.setItem(formElements.firstName, JSON.stringify(formElements));
  }

  fillTable();
  resetForm();
  formContainer.classList.remove("d-block");
  contact_list.classList.remove("d-none");
});

getData();
fillTable();
