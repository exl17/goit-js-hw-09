const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;
const localStorageKey = "feedback-form-state";


emailInput.value = localStorage.getItem(`${localStorageKey}-email`) ?? "";
messageTextarea.value = localStorage.getItem(`${localStorageKey}-message`) ?? "";

form.addEventListener("input", (evt) => {
  
    localStorage.setItem(`${localStorageKey}-email`, emailInput.value);
    localStorage.setItem(`${localStorageKey}-message`, messageTextarea.value);
});

form.addEventListener("submit", (evt) => {
    if (emailInput.value.trim() === "" || messageTextarea.value.trim() === "") {
        return;
    }
    
    evt.preventDefault();
    console.log(`Email: ${emailInput.value}`);
    console.log(`Message: ${messageTextarea.value}`);
    localStorage.removeItem(`${localStorageKey}-email`);
    localStorage.removeItem(`${localStorageKey}-message`);
    form.reset();
});
