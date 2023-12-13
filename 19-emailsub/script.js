const scriptURL =
  "https://script.google.com/macros/s/AKfycbyNHCi5msOYoBj0gvfbwmAQZbDOi8KQyJzc2EZS9XaWojvZZaCF7OdJlMF3b8e0TgfedQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thankyou for subscribing";
      form.reset();
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
    })
    .catch((error) => console.error("Error!", error.message));
});
