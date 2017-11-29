document.getElementById('toggle').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('nav-header').classList.toggle('open');
    document.getElementById('body').classList.toggle('overflow-hidden');
})
var lastScrolltop =0;
window.addEventListener(scroll,function(){
    var currentScroll=window.pageYOffset||document.body.scrollTop;
    if (currentScroll>lastScrolltop) {
        document.getElementById('nav-header').classList.remove('header-in');
        document.getElementById('nav-header').style.opacity=0;
    }else{
        console.log('up');
        document.getElementById('nav-header').classList.add("header-in");
        document.getElementById("nav-header").classList.add("solid");
        document.getElementById("nav-header").style.opacity=1;

    }
    if (currentScroll<=3) {
        document.getElementById("nav-header").classList.remove("header-in");
        document.getElementById("nav-header").classList.remove("solid");
    }
    lastScrolltop=currentScroll;
},false);


$(document).ready(function() {
    var scrollorama = $.scrollorama({ blocks:'.scrollblock' });

    scrollorama.animate('#llama',{
        duration:200, property:'opacity',end:2
    })   
     
});
// // }=============================
          
//           PRGRESS BAR

// // ==============================
var count = $(('#count'));
$({ Counter: 0 }).animate({ Counter: count.text() }, {
  duration: 5000,
  easing: 'linear',
  step: function () {
    count.text(Math.ceil(this.Counter)+ "%");
  }
});

var s = Snap('#animated');
var progress = s.select('#progress');

progress.attr({strokeDasharray: '0, 251.2'});
Snap.animate(0,251.2, function( value ) {
    progress.attr({ 'stroke-dasharray':value+',251.2'});
}, 5000);


// // }=============================
          
//           PROYECTOS EFECTOS DE  IMAGENES

// // ==============================


 /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );