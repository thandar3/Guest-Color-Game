const firstColor = document.querySelector(".server_image");
const secondColor = document.querySelector(".server_image2");
const resultBtn = document.querySelector(".see_btn");
let userInput = document.querySelector(".user_answer_input");
let finalAnswer = document.querySelector(".answerColor");
choseColor = document.querySelectorAll(".option_color");

function pageReload() {
  location.reload();
}

function questionColor() {
  choseColor.forEach((image, index) => {
    image.addEventListener("click", function (e) {
      let imageSrc = e.target.src;
      firstColor.src = imageSrc;

      let randonNumber = Math.floor(Math.random() * 4);
      let cpuImage = [
        "images/red.jpg",
        "images/dark green.jpg",
        "images/white.jpg",
        "images/yellow.jpg",
      ];
      let randonImageSrc = cpuImage[randonNumber];
      secondColor.src = randonImageSrc;

      let randomImage = ["R", "G", "W", "Y"][randonNumber];
      let originalImage = ["R", "G", "W", "Y"][index];

      let outCome = {
        RG: "brown",
        RR: "red",
        RY: "orange",
        RW: "red",
        GR: "brown",
        GY: "light green",
        GG: "green",
        GW: "green",
        WR: "red",
        WG: "green",
        WY: "yellow",
        WW: "white",
        YR: "orange",
        YY: "yellow",
        YG: "light green",
        YW: "yellow",
      };

      let outComeValue = outCome[originalImage + randomImage];

      resultBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let inputText = userInput.value;
        if (inputText === outComeValue) {
          finalAnswer.innerHTML = "Your are right";
          setTimeout(pageReload, 3000);
        } else {
          finalAnswer.innerHTML =
            "Your are wrong the answer is" + " " + outComeValue;
          setTimeout(pageReload, 3000);
        }
      });
    });
  });
}

questionColor();
