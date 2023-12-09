// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

let img = document.getElementById("img");
let qr = document.getElementById("qr");
let qrtext = document.getElementById("qrtext");

function generateQR() {
  if (qrtext.value.length > 0) {
    console.log("hi");
    console.log(qrtext.value);
    qr.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrtext.value;
    img.classList.add("show");
    qrtext.value = "";
  } else {
    // alert("hi");
    img.classList.remove("show");
    qrtext.classList.add("error");
    setTimeout(() => {
      qrtext.classList.remove("error");
    }, 1000);
  }
}
