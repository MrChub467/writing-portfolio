const one = document.querySelector(".chapter-one");
const two = document.querySelector(".chapter-two");
const three = document.querySelector(".chapter-three");
const four = document.querySelector(".chapter-four");

const pages = Array.from(document.querySelectorAll("input"));

one.addEventListener("click", (e) => {
  for (let i = 0; i < 2; ++i) {
    setTimeout(() => {
      pages[i].checked = "true";
    }, 200 * i);
  }
});
two.addEventListener("click", (e) => {
  for (let i = 0; i < 3; ++i) {
    setTimeout(() => {
      pages[i].checked = "true";
    }, 200 * i);
  }
});
three.addEventListener("click", (e) => {
  for (let i = 0; i < 5; ++i) {
    setTimeout(() => {
      pages[i].checked = "true";
    }, 200 * i);
  }
});
four.addEventListener("click", (e) => {
  for (let i = 0; i < 6; ++i) {
    setTimeout(() => {
      pages[i].checked = "true";
    }, 40 * i);
  }
});
