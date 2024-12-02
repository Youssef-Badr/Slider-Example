/*
var imgs = document.querySelectorAll(".d-flex img");
var main = document.querySelector("#main");

for (var i =0;i<imgs.length;i++) {
imgs[i].addEventListener("click", function(e){
// console.log(e.target.getAttribute("src"));
var mainSection = e.target.getAttribute("src");
main.setAttribute("src",mainSection)
}) 
}
*/

var imgs = Array.from(document.querySelectorAll(".col-md-4 img"));
var lightBox = document.querySelector("#light-box");
var mainBox = document.querySelector(".main-box");
var close = document.querySelector(".close");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var globalIndex;



for (var i =0; i<imgs.length;i++){
    imgs[i].addEventListener("click",function(e){
        var targetSrc = e.target.getAttribute("src")
        // console.log();
        var targetIndex = imgs.indexOf(e.target)
        globalIndex=targetIndex
        mainBox.style.backgroundImage = `url(${targetSrc})`
        lightBox.classList.replace("d-none","d-flex");
        document.body.style.overflow= "hidden";
        
    })
   
}
 

close.addEventListener("click",function(){
    closeSlider();
})

function closeSlider(){
    lightBox.classList.replace("d-flex","d-none");
    document.body.style.overflow= "auto";
   
}

document.addEventListener("click", function(e){
// console.log(e.target);
if(e.target.id === "light-box"){
    closeSlider();
}

})
document.addEventListener("keyup", function(e){
    // console.log(e.target);
    // console.log(e.key);
    
    if(e.key === "Escape"){
        closeSlider();
    }else if(e.key === "ArrowRight"){
        getNextSlider();
    }else if(e.key === "ArrowLeft"){
     getPreviousSlider();
    }
    
    })

right.addEventListener("click",function(){
    getNextSlider();
})

function getNextSlider() {
globalIndex++;
if(globalIndex >= imgs.length){
globalIndex = globalIndex - imgs.length
}
// console.log(imgs[globalIndex].getAttribute("src"));
mainBox.style.backgroundImage =`url(${imgs[globalIndex].getAttribute("src")})`
}
left.addEventListener("click",function(){
    getPreviousSlider();
})

function getPreviousSlider(){
    globalIndex--;
    if(globalIndex < 0){
        globalIndex = globalIndex + imgs.length
        }
    // console.log(imgs[globalIndex].getAttribute("src"));
    mainBox.style.backgroundImage =`url(${imgs[globalIndex].getAttribute("src")})`
    }