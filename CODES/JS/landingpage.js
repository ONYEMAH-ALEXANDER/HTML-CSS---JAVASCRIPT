// ===============================
// LEXAMITCH ENTERPRISES JAVASCRIPT
// ===============================

// Small helper: select one element
const $ = (selector) => document.querySelector(selector);

// Small helper: select many elements
const $$ = (selector) => document.querySelectorAll(selector);

// Mobile menu
const menuToggle = $("#menuToggle");
const navLinks = $("#navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = menuToggle.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// Close mobile menu when user clicks any nav link
$$(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    const icon = menuToggle.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

// Footer year
$("#year").textContent = new Date().getFullYear();

// File upload preview
const fileInput = $("#fileInput");
const fileResult = $("#fileResult");
const fileName = $("#fileName");
const fileSize = $("#fileSize");
const imagePreview = $("#imagePreview");
const removeFile = $("#removeFile");
const uploadBox = $("#uploadBox");

function formatFileSize(size) {
  if (size < 1024) {
    return size + " bytes";
  }

  if (size < 1024 * 1024) {
    return (size / 1024).toFixed(1) + " KB";
  }

  return (size / (1024 * 1024)).toFixed(1) + " MB";
}

function showFile(file) {
  if (!file) return;

  fileResult.classList.add("show");
  fileName.textContent = file.name;
  fileSize.textContent = formatFileSize(file.size);

  imagePreview.innerHTML = "";

  // If the selected file is an image, show preview
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = function (event) {
      imagePreview.innerHTML = `
        <img src="${event.target.result}" alt="Selected image preview" />
      `;
    };

    reader.readAsDataURL(file);
  } else {
    imagePreview.innerHTML = `
      <div class="upload-note">
        <i class="fa-solid fa-file"></i>
        File selected. Preview is only available for image files.
      </div>
    `;
  }
}

fileInput.addEventListener("change", () => {
  showFile(fileInput.files[0]);
});

removeFile.addEventListener("click", () => {
  fileInput.value = "";
  fileResult.classList.remove("show");
  fileName.textContent = "No file selected";
  fileSize.textContent = "Choose a file to see details here.";
  imagePreview.innerHTML = "";
});

// Drag and drop upload support
["dragenter", "dragover"].forEach((eventName) => {
  uploadBox.addEventListener(eventName, (event) => {
    event.preventDefault();
    uploadBox.classList.add("dragging");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  uploadBox.addEventListener(eventName, (event) => {
    event.preventDefault();
    uploadBox.classList.remove("dragging");
  });
});

uploadBox.addEventListener("drop", (event) => {
  const file = event.dataTransfer.files[0];

  if (file) {
    fileInput.files = event.dataTransfer.files;
    showFile(file);
  }
});

// Contact form validation and WhatsApp message generator
const contactForm = $("#contactForm");

function showError(input, message) {
  const formGroup = input.closest(".form-group");
  const error = formGroup.querySelector(".error");
  error.textContent = message;
}

function clearError(input) {
  const formGroup = input.closest(".form-group");
  const error = formGroup.querySelector(".error");
  error.textContent = "";
}

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = $("#name");
  const email = $("#email");
  const phone = $("#phone");
  const service = $("#service");
  const message = $("#message");

  let isValid = true;

  // Name check
  if (name.value.trim() === "") {
    showError(name, "Please enter your name.");
    isValid = false;
  } else {
    clearError(name);
  }

  // Email check
  if (email.value.trim() === "") {
    showError(email, "Please enter your email.");
    isValid = false;
  } else if (!isEmailValid(email.value.trim())) {
    showError(email, "Please enter a correct email address.");
    isValid = false;
  } else {
    clearError(email);
  }

  // Phone check
  if (phone.value.trim() === "") {
    showError(phone, "Please enter your phone number.");
    isValid = false;
  } else {
    clearError(phone);
  }

  // Service check
  if (service.value.trim() === "") {
    showError(service, "Please choose a service.");
    isValid = false;
  } else {
    clearError(service);
  }

  // Message check
  if (message.value.trim() === "") {
    showError(message, "Please enter your message.");
    isValid = false;
  } else {
    clearError(message);
  }

  if (!isValid) return;

  const whatsappNumber = "2348029287090";

  const whatsappMessage = `
Hello Lexamitch Enterprises,

My name is ${name.value.trim()}.

Email: ${email.value.trim()}
Phone: ${phone.value.trim()}
Service Needed: ${service.value.trim()}

Message:
${message.value.trim()}
  `;

  const whatsappURL =
    "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappMessage);

  window.open(whatsappURL, "_blank");
});

// Scroll reveal animation
const revealElements = $$(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});