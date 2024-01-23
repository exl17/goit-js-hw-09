const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;
const localStorageKey = "feedback-form-state";


const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
emailInput.value = savedData.email || "";
messageTextarea.value = savedData.message || "";

form.addEventListener("input", (evt) => {
  const trimmedEmail = emailInput.value.trim();
  const trimmedMessage = messageTextarea.value.trim();

  const formData = {
    email: trimmedEmail,
    message: trimmedMessage,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
  const trimmedEmail = emailInput.value.trim();
  const trimmedMessage = messageTextarea.value.trim();

  if (trimmedEmail === "" || trimmedMessage === "") {
    return;
  }

  evt.preventDefault();
  
    
  const formData = {
    email: trimmedEmail,
    message: trimmedMessage,
  };
  console.log(formData);

  
  localStorage.removeItem(localStorageKey);
  form.reset();
});
