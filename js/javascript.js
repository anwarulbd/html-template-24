
document.getElementById("mobile-sidenav").style.width= "0px";
document.getElementById("nav-list").innerHTML = document.getElementById("nav-ul").innerHTML;
function openNav(){
var bb = document.getElementById("mobile-sidenav").style.width;
if(bb == "0px"){
document.getElementById("mobile-sidenav").style.width= "250px";
document.getElementById("nav-toggle").style.color= "red";
}else{
document.getElementById("mobile-sidenav").style.width= "0px";
document.getElementById("nav-toggle").style.color= "#fff";
}
}
function closeNav(){
document.getElementById("mobile-sidenav").style.width= "0px";
document.getElementById("nav-toggle").style.color= "#fff";
document.getElementById("nav-toggle").style.hover= "red";
}




$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
};

