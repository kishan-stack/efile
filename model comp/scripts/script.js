const orig = document.querySelector("#orig");
const dup = document.querySelector("#uploaddoc #dup");
const text = document.querySelector("#nig");

const origi = document.querySelector("#origi");
const dupl = document.querySelector("#uploaddoc #dupl");
const text2 = document.querySelector("#nigg");

dup.addEventListener("click", function () {
  orig.click();
});

orig.addEventListener("change", function () {
  if (orig.value) {
    text.innerHTML = orig.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/i)[1];
  } else {
    text.innerHTML = "No  file chosen , yet";
  }
});

dupl.addEventListener("click", function () {
  origi.click();
});

origi.addEventListener("change", function () {
  if (origi.value) {
    text2.innerHTML = origi.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/i)[1];
  } else {
    text2.innerHTML = "No  file chosen , yet";
  }
});

const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});
