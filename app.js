const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let button = document.getElementById("button");
let password1 = document.getElementById("password-1");
let password2 = document.getElementById("password-2");

let passwordLenght = 12;

function getRandomCharacter() {
  let randomPassword = Math.floor(Math.random() * characters.length);
  return characters[randomPassword];
}

function generateRandomPassword() {
  let randomPassword = "";
  for (let i = 0; i < passwordLenght; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function generatePasswordButton() {
  const generatedPasswordOne = generateRandomPassword();
  const generatedPasswordTwo = generateRandomPassword();

  password1.textContent = generatedPasswordOne;
  password2.textContent = generatedPasswordTwo;
}

// COPY

function copyText(htmlElement) {
  if (!htmlElement) {
    return;
  }
  let elementText = htmlElement.innerText;
  let inputElement = document.createElement("input");
  inputElement.setAttribute("value", elementText);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand("copy");
  inputElement.parentNode.removeChild(inputElement);
}
document.querySelector("#copy-text-btn1").onclick = function () {
  copyText(document.querySelector("#password-1"));
};
document.querySelector("#copy-text-btn2").onclick = function () {
  copyText(document.querySelector("#password-2"));
};

document.querySelector(".button-mobile1").onclick = function () {
  copyText(document.querySelector("#password-1"));
};
document.querySelector(".button-mobile2").onclick = function () {
  copyText(document.querySelector("#password-2"));
};
