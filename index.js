// Elements
const li_one = document.querySelector(".li_one");
const li_two = document.querySelector(".li_two");
const li_three = document.querySelector(".li_three");
const li_four = document.querySelector(".li_four");
const li_five = document.querySelector(".li_five");

const software = document.querySelector(".software");
const features = document.querySelector(".features");
const technology = document.querySelector(".technology");
const contact = document.querySelector(".contact");
const signup = document.querySelector(".sign-up");

const scrollToSection = section => {
  const chart = section.getBoundingClientRect();
  window.scrollTo({
    left: chart.left,
    top: chart.top,
    behavior: "smooth"
  });
};

li_one.addEventListener("click", () => {
  scrollToSection(software);
});
li_two.addEventListener("click", () => {
  scrollToSection(features);
});
li_three.addEventListener("click", () => {
  scrollToSection(technology);
});
li_four.addEventListener("click", () => {
  scrollToSection(contact);
});
li_five.addEventListener("click", () => {
  scrollToSection(signup);
});

const nav = document.querySelector("nav");

const headerFixed = interies => {
  const [entriey] = interies;
  if (entriey.isIntersecting) {
    nav.classList.add("fixed");
  }
};
const options = {
  root: null,
  threshold: 1
};

const obsever = new IntersectionObserver(headerFixed, options);
obsever.observe(software);

const header = document.querySelector("header");

const headerFixed2 = interies => {
  if (interies[0].isIntersecting) {
    nav.classList.remove("fixed");
  }
};
const options2 = {
  root: null,
  threshold: 0.2
};

const obsever2 = new IntersectionObserver(headerFixed2, options2);
obsever2.observe(header);
