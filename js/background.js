const imges =["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = imges[Math.floor(Math.random()*imges.length)];

const bgImage = document.createElement("img"); //이미지 태그 만들기 js에서

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);