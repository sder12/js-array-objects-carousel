// PSEUDOCODICE - COSA MODIFICARE 
//[]aumento funzioni per diminuire codice
//[]thumbnails click - elimino toggle trovo soluzione per eliminare active
//[]errore: click due volte BTN InverseAutoplay > velocità
//[]errore: add click InverseAutoPLay if(va a destra){vai a sinistra}else{da sin a destra}

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


//AUTOPLAY-------------------------------------------
//btn STOP and btn CHANGE DIRECTION
const stopBtn = document.getElementById("btn-stop-move");
const inverseBtn = document.getElementById("btn-change-order");

//AUTOPLAY automatico from left to right
const intervalCarousel = setInterval(autoplay, 300);

//BTN --- AUTOPLAY-INVERSE from rigth to left
let intervalInverse;
inverseBtn.addEventListener("click", function(){
  clearInterval(intervalCarousel); //Bloccare l'autoplay automatico
  intervalInverse = setInterval(autoplayInverse , 300); //attivare autoplay inverse
});

//BTN --- STOP THE AUTOPLAY
stopBtn.addEventListener("click", function(){
  clearInterval(intervalCarousel);
  clearInterval(intervalInverse);
})

//AUTOPLAY from left to right
function autoplay(){
  thumbsClass[sliderPosition].classList.remove("active");
  cleanHtml();
  //   alert("right btn");
  if (sliderPosition >= 4) {
    sliderPosition = 0;
  } else {
    sliderPosition++;
  }
  creationElementAddDom();
  thumbsClass[sliderPosition].classList.add("active");
}

function autoplayInverse(){
  thumbsClass[sliderPosition].classList.remove("active");
  cleanHtml();
  if (sliderPosition > 0) {
    sliderPosition--;
  } else {
    sliderPosition = 4;
  }
  creationElementAddDom();
  thumbsClass[sliderPosition].classList.add("active");
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

