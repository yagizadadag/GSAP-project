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
