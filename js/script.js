// PSEUDOCODICE
//[*] prelevare i chevron dall'html
//[*]prelevare il contenitore dell'img :slider-img
//[*]prelevare il contenitore del txt :slider-text
//[*] aggiungere l eventListener hai due btn 
    //[] ripulire div
    //[] togliere la classe visible al div dell'img
    //[] togliere la classe visible al div del testo
    //[] INSERIRE UN'IMG
        //[] entrare nell'array con ciclo for 
        //[] entrare nel object with []
        //[] estrapolare dall'obj il link dell'img 
        //[] inserire il link dell'img nel DOM
        //[] aggiungere la classe visible al slider-img
        //[] appendere l'img al div slider-img
    //[] INSERIRE IL TESTO
        //[] entrare nell'array con ciclo for
        //[] entrare in un elemento con ciclo for in 
        //[] estrapolare dall'obj il contenuto del TITLE
        //[] inserire il link nel slider-text dentro un <h2>
        //[] estrapolare dall'obj il contenuto del TEXT
        //[] inserire il link nel slider-text dentro un <p>
        //[] aggiungere la classe visible al slider-text
        //[] appedere i due elementi creati al slider-text

//TAKE from the DOM
const leftBtn = document.getElementById("chevron-left");
const rigthBtn = document.getElementById("chevron-rigth");
const sliderImg = document.querySelector(".slider-img");
const sliderText = document.querySelector(".slider-text");


//RIGHT BTN
rigthBtn.addEventListener("click", function(){
alert("right btn");
});

//LEFT BTN
leftBtn.addEventListener("click", function(){
    alert("left btn");
});




images.forEach((item) => {
    // console.log(item);  
        console.log(item["image"]);
        console.log(item["title"])
        console.log(item["text"])   
        console.log("----") 
});


