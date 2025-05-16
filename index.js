const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  console.log("Menu icon clicked");

  navLinks.classList.toggle("active");
};
