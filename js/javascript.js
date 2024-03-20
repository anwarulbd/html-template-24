  var x = document.getElementById("nav-ul");
  var y = x.getElementsByTagName("li");
  var i = 0;
  if(5 < y.length) {
document.getElementById("nav-ul").style.display="none";
document.getElementById("nav-list2").style.display="block";
}else{
document.getElementById("nav-list2").style.display="none";  
}

document.getElementById("mobile-sidenav").style.width= "0px";
document.getElementById("nav-list").innerHTML = document.getElementById("nav-ul").innerHTML;
document.getElementById("nav-list2").innerHTML = document.getElementById("nav-ul").innerHTML;

function openNav(){
var bb = document.getElementById("mobile-sidenav").style.width;
if(bb == "0px"){
document.getElementById("mobile-sidenav").style.width= "250px";
document.getElementById("nav-toggle").style.color= "red";

}else{
closeNav();
}

}

function closeNav(){
document.getElementById("mobile-sidenav").style.width= "0px";
document.getElementById("nav-toggle").style.color= "#fff";

}

document.addEventListener("click", function (event) {
    if (!document.getElementById("nav-toggle").contains(event.target) && !document.getElementById("mobile-sidenav").contains(event.target)){
   closeNav();
    }
});



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
}



var drop = document.getElementsByClassName("dropbtn");
var i;
for (i = 0; i < drop.length; i++) {
  drop[i].addEventListener("click", function() {
	 var sw = document.getElementById("header").offsetWidth;
	 if(sw < 901){

    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
	
	 }	
  });
}

var url = window.location.href;
if(url.match("view=desktop")){
	//document.body.style = "width:1120px";
}
