const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if (dino.classList != "jump") {
      dino.classList.add("jump");
      
      setTimeout(function () {
        dino.classList.remove("jump");
      }, 500);
    }
  }
  let isAlive = setInterval(function () {
    let dT = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cL = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  
    if (cL < 50 && cL > 0 && dT >= 110) {
      alert("Game Over!");
    }
  }, 10);
  
  document.addEventListener("keydown", function (event) {
    jump();
  });