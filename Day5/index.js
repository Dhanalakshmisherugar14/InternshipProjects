document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const firstNameInput = document.getElementById("firstName");
  const surnameInput = document.getElementById("surname");
  const companyInput = document.getElementById("company");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const birthdayInput = document.getElementById("birthday");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = firstNameInput.value.trim();
    const surname = surnameInput.value.trim();
    const company = companyInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const birthday = birthdayInput.value;

    if (!firstName || !email || !phone) {
      alert(
        "Please fill out all required fields: First Name, Email, and Phone."
      );
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    const contact = {
      firstName,
      surname,
      company,
      email,
      phone,
      birthday,
    };

    console.log("Contact Saved:", contact);

    form.reset();

    alert("Contact saved successfully!");
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  }

  const cameraIcon = document.querySelector(".fa-camera");
  cameraIcon.addEventListener("click", () => {
    alert("This feature can be implemented to upload a profile picture.");
  });
});
