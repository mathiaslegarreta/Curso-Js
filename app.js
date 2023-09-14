
let countEl = document.getElementById("count-el")
console.log(countEl);
let saveEl = document.getElementById("save-el")
let count = 0;

function increment() {
  count++
  countEl.textContent = count
}

function save() {
  let entries = count + " - ";
  saveEl.textContent += entries;
  count = 0;
  countEl.textContent = 0;
}









// let name = "Mathias";
// let greeting = "Hi, my name is "

// let myGreeting = greeting + name;

// console.log(myGreeting);

// let welcomeEl = document.getElementById("welcome-el")
// console.log(welcomeEl);

// let name = "Mathias";
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name;

// welcomeEl.innerText += "👋";
