var name_err = document.getElementById("name-error");
var ph_err = document.getElementById("phone-error");
var mail_err = document.getElementById("email-error");
var msg_err = document.getElementById("message-error");
var sub_err = document.getElementById("submit-error");

console.log("hi");
function namecheck() {
  var name = document.getElementById("name").value;
  if (name.length == 0) {
    name_err.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
    name_err.innerHTML = "Write Fullname";
    return false;
  }
  name_err.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function phonecheck() {
  var phone = document.getElementById("phone").value;
  if (phone.length == 0) {
    ph_err.innerHTML = "Phone no is required";
    return false;
  }
  if (phone.length != 10) {
    ph_err.innerHTML = "Enter a valid Phone number";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    ph_err.innerHTML = "Invalid Phone Number";
    return false;
  }
  ph_err.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function emailcheck() {
  var email = document.getElementById("email").value;
  if (email.length == 0) {
    mail_err.innerHTML = "email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    mail_err.innerHTML = "Email format incorrect.";
    return false;
  }
  mail_err.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function msgcheck() {
  var message = document.getElementById("msg").value;
  var required = 30;
  var left = required - message.length;
  if (left > 0) {
    msg_err.innerHTML = left + " more chracters requried";
    return false;
  }
  msg_err.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateform() {
  if (namecheck() && phonecheck() && emailcheck() && msgcheck()) {
    return true;
  } else {
    sub_err.style.display = "block";
    sub_err.innerHTML = "Please fix the error";
    setTimeout(() => {
      sub_err.style.display = "none";
    }, 3000);
    return false;
  }
}
