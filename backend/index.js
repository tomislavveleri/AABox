let valueDisplays = document.querySelectorAll(".num");
let interval = 100000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

let valueDisplays2 = document.querySelectorAll(".num2");
let interval2 = 1;

valueDisplays2.forEach((valueDisplay2) => {
  let startValue2 = 0;
  let endValue2 = parseInt(valueDisplay2.getAttribute("data-val"));
  let duration2 = Math.floor(interval2 / endValue2);
  let counter2 = setInterval(function () {
    startValue2 += 1;
    valueDisplay2.textContent = startValue2;
    if (startValue2 == endValue2) {
      clearInterval(counter2);
    }
  }, duration2);
});
let valueDisplays3 = document.querySelectorAll(".num3");
let interval3 = 3000;

valueDisplays3.forEach((valueDisplay3) => {
  let startValue3 = 0;
  let endValue3 = parseInt(valueDisplay3.getAttribute("data-val"));
  let duration3 = Math.floor(interval3 / endValue3);
  let counter3 = setInterval(function () {
    startValue3 += 1;
    valueDisplay3.textContent = startValue3;
    if (startValue3 == endValue3) {
      clearInterval(counter3);
    }
  }, duration3);
});

let slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs((slideIndex += n));
  document.getElementById("counter").innerText = slideIndex + "/6";
}
function showDivs(n) {
  let i;
  const x = document.getElementsByClassName("slide");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
