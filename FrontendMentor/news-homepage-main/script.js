const closebutton = document.querySelector(".nav-closebutton");
const nav = document.querySelector(".nav-openstate");
const openbutton = document.querySelector(".nav-openbutton");

closebutton.addEventListener("click", () => {
  nav.classList.remove("nav-openstate");
});

openbutton.addEventListener("click", () => {
  nav.classList.add("nav-openstate");
});
