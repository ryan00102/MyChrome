//랜덤 배경화면 출력 기능

const images = ["0.jpg", "1.jpg", "2.jpg"];
const randomImage = images[Math.floor(Math.random()*images.length)];
const body = document.querySelector("body");


const bgImage = document.createElement("img");
bgImage.src = randomImage;
bgImage.id = "bgImg";
body.appendChild(bgImage);
//bgImage 제어
bgImage.style.position = "absolute";
bgImage.style.width = "100%";
bgImage.style.height = "100%";
bgImage.style.top = "0";
bgImage.style.left = "0";
bgImage.style.zIndex = "-1";



