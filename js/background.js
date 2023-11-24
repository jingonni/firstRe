/*
 * 2023.11.23
 * 소멘텀 메인에 뜨는 배경
 * 랜덤으로 나오게 한다.
 */

const images = ["flower.jpg","nature.jpg","travel.jpg"]
const selectedImage = images[Math.floor(Math.random() * images.length)];
console.log(selectedImage);

const bgImage = document.createElement("img");
bgImage.src = `img/${selectedImage}`;
console.log(bgImage);
document.body.appendChild(bgImage);