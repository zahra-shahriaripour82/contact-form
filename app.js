const formEl = document.querySelector("form");
const firstNameEl = document.querySelector(".first-name");
const lastNameEl = document.querySelector(".last-name");
const emailEl = document.querySelector(".email");
const messageEl = document.querySelector(".txt-message");
const messageParent = document.querySelector(".message");
console.log(firstNameEl);
const radioControl=document.querySelector(".split-radio")
console.log(radioControl);
const submtSucc=document.querySelector(".sucsee")
const btnRadio = document.querySelector(".btn-radio");
console.dir(btnRadio);

const btnEl = document.querySelector("button");
const termEl = document.querySelector(".termsCondition");
const termWrapper = document.querySelector(".terms-wrapper");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  errorHandle();
});
function errorHandle() {
  const firstName = firstNameEl.value.trim();
  const lastName = lastNameEl.value.trim();
  const email = emailEl.value.trim();
  const textMessage = messageEl.value.trim();
  const checked = btnRadio.checked;
  console.log(checked);
  
  // for first name
  if (firstName === "") {
    showError(firstNameEl, "This field is required");
    firstNameEl.style = "border: 1px solid var(--Red);";
  } else setSuccess(firstNameEl);
  // for last name
  if (lastName === "") {
    showError(lastNameEl, "This field is required");
    lastNameEl.style = "border: 1px solid var(--Red);";
  } else setSuccess(lastNameEl);
  //for email
  if (email === "" || !isValidEmail(email)) {
    showError(emailEl, "Please enter a valid email address");
    emailEl.style = "border: 1px solid var(--Red);";
  } else setSuccess(emailEl);

  if (textMessage === "") {
    showError(messageParent, "This field is required");
    messageEl.style = "border: 1px solid var(--Red);";
  }
  if (checked) {
    showError(radioControl, "This field is required");
    console.log("zahra");
    
  } else {
    setSuccess(btnRadio);
  }
  if(termEl.checked==false) showError( termEl,"To submit this form , please consent to being contacted")
}

// show error message
const showError = (ele, msg) => {
  const inputControl = ele.parentElement;

  const errorMessage = inputControl.querySelector(".error");

  errorMessage.innerText = msg;
  inputControl.classList.add("errorMessage");
};

// Show success message
const setSuccess = (ele) => {
  const inputControl = ele.parentElement;
  const errorMessage = inputControl.querySelector(".error");
  errorMessage.innerText = "";
  inputControl.classList.remove("errorMessage");
};
// validation email
const isValidEmail = (email) => {
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // return emailRegex.test(String(email).toLowerCase())
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const showSumitMessage=()=>{
  if(!firstNameEl.value==="" ||!emailEl.value==""||!lastNameEl.value=="")
    setSuccess.style.display="block"
}