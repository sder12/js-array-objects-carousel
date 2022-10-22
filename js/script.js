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
const thumbsContainer = document.querySelector(".container-thumbs");

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

//Creo DIV THUMBNAILS
for (let i = 0; i < arrayImages.length; i++) {
  const arrayImgItem = arrayImages[i];
  const divThumbImg = ` <div class="thumbs">
  <img src="${arrayImgItem}" alt=""> </div>`;
  thumbsContainer.innerHTML += divThumbImg;
}

//USO L'INDEX delle ARRAY per placeholder
//Active img and thumbs con index 0 
let sliderPosition = 0;
creationElementAddDom();
const thumbsClass = document.getElementsByClassName("thumbs");
thumbsClass[sliderPosition].classList.add("active");

//RIGHT BTN
rigthBtn.addEventListener("click", function () {
  thumbsClass[sliderPosition].classList.remove("active");
  cleanHtml();
  if (sliderPosition >= 4) {
    sliderPosition = 0;
  } else {
    sliderPosition++;
  }
  creationElementAddDom();
  thumbsClass[sliderPosition].classList.add("active");
});

//LEFT BTN
leftBtn.addEventListener("click", function () {
  thumbsClass[sliderPosition].classList.remove("active");
  cleanHtml();
  if (sliderPosition > 0) {
    sliderPosition--;
  } else {
    sliderPosition = 4;
  }
  creationElementAddDom();
  thumbsClass[sliderPosition].classList.add("active");
});


//ADD class ACTIVE - thumbnails
for (let i = 0; i< thumbsClass.length; i++){
  const thumbItem = thumbsClass[i];
  thumbItem.addEventListener("click", function(){
    sliderPosition = i;
    cleanHtml();
    creationElementAddDom();
    thumbItem.classList.toggle("active")
  });
}

//FUNCTION UI -------------
/**
 * Description: Clean all the slider.innerHTML
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

