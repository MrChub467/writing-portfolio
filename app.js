const one = document.querySelector(".chapter-one");
const two = document.querySelector(".chapter-two");
const three = document.querySelector(".chapter-three");
const four = document.querySelector(".chapter-four");
const five = document.querySelector(".chapter-five");
const backbtn = document.querySelector(".back-btn");

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
    }, 200 * i);
  }
});
five.addEventListener("click", (e) => {
  for (let i = 0; i < 8; ++i) {
    setTimeout(() => {
      pages[i].checked = "true";
    }, 200 * i);
  }
});

backbtn.addEventListener("click", (e) => {
  let noPages = true;
  for (let i = 0; i < pages.length; ++i) {
    if (pages[i].checked === true) {
      noPages = false;
      break;
    }
  }

  if (noPages) {
    pages[0].checked = true;
  } else {
    for (let i = pages.length - 1; i > 0; --i) {
      setTimeout(() => {
        pages[i].checked = false;
      }, 200 - i);
    }
  }
});

// Get the form element
const myForm = document.getElementById("form");

// Add an event listener for the submit event
myForm.addEventListener("submit", function (event) {
  myForm.reset();
});
