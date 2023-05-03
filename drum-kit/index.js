let numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

function makeSound(key) {
  switch (key) {
    case "w":
      let audio1 = new Audio("./sounds/tom-1.mp3").play();
      break;
    case "a":
      let audio2 = new Audio("./sounds/tom-2.mp3").play();
      break;
    case "s":
      let audio3 = new Audio("./sounds/tom-3.mp3").play();
      break;
    case "d":
      let audio4 = new Audio("./sounds/tom-4.mp3").play();
      break;
    case "j":
      let audio5 = new Audio("./sounds/snare.mp3").play();
      break;
    case "k":
      let audio6 = new Audio("./sounds/crash.mp3").play();
      break;
    case "l":
      let audio7 = new Audio("./sounds/kick-bass.mp3").play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

document.addEventListener("keydown", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
