const themeBtn = document.getElementById("themeBtn");
const navLinks = document.querySelectorAll("nav ul li a");
const icon = themeBtn.querySelector("i");

function toggleTheme() {
  document.body.classList.toggle("dark");
  

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("hubTheme", "dark");
    icon.className="fa-solid fa-sun";
  } else {
    localStorage.setItem("hubTheme", "light");
    icon.className="fa-solid fa-moon";
  }
}

themeBtn.addEventListener("click", toggleTheme);

function loadTheme() {
  const theme = localStorage.getItem("hubTheme");

  if (theme === "dark") {
    document.body.classList.add("dark");
    
  }
}

loadTheme();

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

cards.forEach((card) => {
  observer.observe(card);
});

let visits = localStorage.getItem("hubVisits");

if (visits === null) {
  visits = 1;
} else {
  visits = parseInt(visits) + 1;
}

localStorage.setItem("hubVisits", visits);

console.log("Visitor Counts:" + visits);

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "white";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

console.log("Welcome to Devlaunch Hub");
