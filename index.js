const clearButton = document.getElementById("clear");

console.log(clearButton);

const numbers = document.querySelectorAll(".number");

console.log(numbers);

const screen = document.getElementById("screen");

console.log(screen);

console.log(screen.innerHTML);

clearButton.addEventListener("click", () => {
  screen.innerHTML = "";

  // numbers[0].innerHTML = 9;

  //   for (let i = 0; i < numbers.length; i++) {
  //     numbers[i].innerHTML = parseInt(numbers[i].innerHTML) + 1;
  //   }
});

const addEvent = (n) => {
  n.addEventListener("click", () => {
    screen.innerHTML += n.innerHTML;
  });
};

numbers.forEach((n) => addEvent(n));
