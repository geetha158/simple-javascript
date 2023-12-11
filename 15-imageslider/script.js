let scrollcontainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollcontainer.addEventListener("wheel", function (evt) {
  evt.preventDefault();
  scrollcontainer.scrollLeft += evt.deltaY;
  scrollcontainer.computedStyleMap.scrollBehavior = "auto";
});

nextbtn.addEventListener("click", () => {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft += 900;
});

backbtn.addEventListener("click", () => {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft -= 900;
});
