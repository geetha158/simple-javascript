const apiurl = "https://api.quotable.io/random";

let quote = document.getElementById("quote");
let author = document.getElementById("author");
async function getQuote() {
  const response = await fetch(apiurl);
  var data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote();

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "-by" +
      author.innerHTML,
    "Tweet window",
    "width=600",
    "height=300"
  );
}
