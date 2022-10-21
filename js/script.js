// PSEUDOCODICE
//[*] prelevare i chevron dall'html
//[*]prelevare il contenitore dell'img :slider-img
//[*]prelevare il contenitore del txt :slider-text
//[*] aggiungere l eventListener hai due btn
//[*] ripulire div


//TAKE from the DOM
const leftBtn = document.getElementById("chevron-left");
const rigthBtn = document.getElementById("chevron-rigth");
const sliderImg = document.querySelector(".slider-img");
const sliderText = document.querySelector(".slider-text");

//CREO 3 ARRAY : 1 IMG 1 TITLE 1 TEXT
const arrayImages = [];
const arrayTitle = [];
const arrayText = [];
images.forEach((item) => {
  const imageLink = item["image"];
  const titleLink = item["title"];
  const textLink = item["text"];
  arrayImages.push(imageLink);
  arrayTitle.push(titleLink);
  arrayText.push(textLink);
});
console.log(arrayImages);
console.log(arrayTitle);
console.log(arrayText);

//USO L'INDEX delle ARRAY per placeholder
let sliderPosition = 0;
creationElementAddDom();

//RIGHT BTN
rigthBtn.addEventListener("click", function () {
  cleanHtml();
  //   alert("right btn");
  if (sliderPosition >= 4) {
    sliderPosition = 0;
  } else {
    sliderPosition++;
  }
  creationElementAddDom();
});

//LEFT BTN
leftBtn.addEventListener("click", function () {
  cleanHtml();
  if (sliderPosition > 0) {
    sliderPosition--;
  } else {
    sliderPosition = 4;
  }
  creationElementAddDom();
});




//FUNCTION UI 
/**
 * Description: Clean the all the slider
 */
function cleanHtml() {
  sliderImg.innerHTML = "";
  sliderText.innerHTML = "";
}

/**
 * Description Create the elements and add them in the Dom 
 * the IMG, the TITLE and the PARAGRAPH
 */
function creationElementAddDom() {
  //CREATION ELEMENTS HTML
  textImages = `<img src="${arrayImages[sliderPosition]}" alt="">`;
  textTitle = `<h2>${arrayTitle[sliderPosition]}</h2>`;
  textText = `<p>${arrayText[sliderPosition]}</p>`;
  //INSERISCO NEL DOM
  sliderImg.innerHTML += textImages;
  sliderText.innerHTML += textTitle;
  sliderText.innerHTML += textText;
}
