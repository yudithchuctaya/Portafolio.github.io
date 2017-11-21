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