const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchres = document.getElementById("search-res");
const showmore = document.getElementById("show-more");

const accesskey = "SntjYQtEpXl53FftTaTsAk6l9Uydv4bJdrMAI1cxmI4";

// <https://api.unsplash.com/search/photos?page=1&query=office>

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchbox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchres.innerHTML = "";
  }
  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";
    imagelink.appendChild(image);
    searchres.appendChild(imagelink);
  });
  showmore.style.display = "block";
}

searchform.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showmore.addEventListener("click", () => {
  page++;
  searchbox();
});
