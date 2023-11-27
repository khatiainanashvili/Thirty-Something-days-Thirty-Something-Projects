const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

var output = "";
for (let i = 0; i < 13; i += 2) {
  if (i == 8 || i == 10) {
  }
  output += i + ", ";
}

console.log(output);
const myFile = await fs.open("My_information.txt", "wb");
