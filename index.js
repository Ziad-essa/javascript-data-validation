const form = document.getElementById("form");
const userName = document.getElementById("name");
const phone_number = document.getElementById("phone-number");
const email = document.getElementById("e-mail");
const messages = document.getElementById("messages");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInput()
})
const checkInput=()=>{
    const userNamevalue = userName.value.trim();
    const phone_numbervalue = phone_number.value.trim();
    const emailvalue = email.value.trim();
    const messagesvalue = messages.value.trim();
    if (userNamevalue === "") {
      setError(userName, "name can't be blank");
    } else {
      setSucces(userName);
    }
    if (phone_numbervalue === "") {
      setError(phone_number, "phone number can't be blank");
    } else {
      setSucces(phone_number);
    }
    if (emailvalue === "") {
      setError(email, "email can't be blank");
    } else {
      setSucces(email);
    }
    if (messagesvalue === "") {
      setError(messages, "enter your message");
    } else {
      setSucces(messages);
    }
}
const setError=(input, message)=>{
const form_control = input.parentElement;
const small = form_control.querySelector("small");
small.innerText=message
form_control.className = "form-control error";
}
setSucces =(input)=>{
const form_control = input.parentElement;
form_control.className = "form-control succes";
}
