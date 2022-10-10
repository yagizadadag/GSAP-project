// Cards

TweenMax.set('.card-inner', {y:200, opacity:0});

$('.card').hover(function(){
    TweenMax.to($(this).find('.card-inner'), 0.5, {y:0, opacity:1});
},
function(){
    TweenMax.to($(this).find('.card-inner'), 0.5, {y:200, opacity:0});
});

// Amanda Braga Effect

TweenMax.fromTo('.header ' , 1.2 , {y:80 , opacity:0},{y:0 , opacity:1});
TweenMax.fromTo('.subheader' , 1.2 , {y:-80 , opacity:0},{y:0 , opacity:1});






const numberOfImages = 15;
let i;
const imageSources = Array.from(Array(numberOfImages).keys()).map((i) => 'https://source.unsplash.com/collection/9948714?fashion=true' + i);
// how many times to fire the event per second
const timesPerSecond = .1;

function preloadImages(images) {
    for (i = 0; i < images.length; i++) {
        let l = document.createElement('link')
        l.rel = 'preload'
        l.as = 'image'
        l.href = images[i]
        document.head.appendChild(l);
    }
}

function animate(e) {
    var image= document.createElement('div'); //create a div named bubble
    image.classList.add('trail');
    var sizeWidth= 400;
    var sizeHeight= 300;

    image.style.transition='2s ease';
    image.style.position= 'fixed';

    image.style.top=  e.pageY - sizeHeight/2 + 'px';
    image.style.left= e.pageX - sizeWidth/2 + 'px';

    image.style.width= sizeWidth + 'px';
    image.style.height= sizeHeight + 'px';
        
    image.style.backgroundImage = 'url(https://source.unsplash.com/collection/9948714?fashion=true'+  Math.floor(Math.random()*numberOfImages) +')';
    image.style.backgroundSize = 'cover';
    // image.style.border= 'white 1px solid';

    image.style.pointerEvents= 'none';
    image.style.zIndex= 1;
    document.body.appendChild(image);

    //opacity and blur animations
    window.setTimeout(function() {
        image.style.opacity = 0;
        image.style.filter = 'blur(6px)';
    }, 80);   

    window.setTimeout(function() {
        document.body.removeChild(image);
    }, 2100);
};

window.onload= function() {
preloadImages(imageSources);
var wait = false;

window.addEventListener('mousemove', function(e) {
    if (!wait) {
    wait = true;
    setTimeout(() => { wait = false }, timesPerSecond * 1000);
    animate(e);
    }
});
};



const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e=>{
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
})
