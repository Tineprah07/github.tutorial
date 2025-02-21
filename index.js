function check() {
  const output = document.querySelector("#output");
  output.textContent = "THANKS FOR CLICKING"
}

const button = document.querySelector("#button");
button.addEventListener('click', check);
