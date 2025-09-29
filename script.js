const btn = document.getElementById("btn");
const input = document.getElementById("ip");
const output = document.getElementById("output");

function delay(value, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

btn.addEventListener("click", () => {
  const num = Number(input.value);
  if (isNaN(num)) {
    output.textContent = "Please enter a valid number";
    return;
  }

  delay(num, 2000)
    .then((res) => {
      output.textContent = `Result: ${res}`;
      return delay(res * 2, 2000);
    })
    .then((res) => {
      output.textContent = `Result: ${res}`;
      return delay(res - 3, 1000);
    })
    .then((res) => {
      output.textContent = `Result: ${res}`;
      return delay(res / 2, 1000);
    })
    .then((res) => {
      output.textContent = `Result: ${res}`;
      return delay(res + 10, 1000);
    })
    .then((res) => {
      output.textContent = `Final Result: ${res}`;
    });
});
