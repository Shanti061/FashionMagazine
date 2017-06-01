
/*alert("hi");*/

document.getElementById("fashion").innerHTML= "It's all about fashion & glam!!!";

document.getElementById("newsUpdate").innerHTML= "POPULAR UPDATES";

/*document.getElementById("news-block").innerHTML= "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";*/

/*document.getElementById("newsMiddle").innerHTML= "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

document.getElementById("newsRight").innerHTML= "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";*/



//MENUBAR RESPONSIVENESS

function menuFunction() {
    var x = document.getElementById("topMenu");
    if (x.className === "topNav") {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}


//to the top icon
//when the user scrolls down 350px show the go to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



//carousel for the picture slides
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-brown", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-brown";
}



/*for automatic slides */
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlide");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}



//slides indicators
var index = 1;
showDiv(index);

function plusDiv(n) {
  showDiv(index += n);
}

function currentDiv(n) {
  showDiv(index = n);
}

function showDiv(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {index = 1}
  if (n < 1) {index = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[index-1].style.display = "block";
  dots[index-1].className += " w3-opacity-off";
}

/*function menuFunction(){
    
    var x = document.getElementById("topMenu");
    if(x.className === "main"){
        
        x.className += "responsive";
    } else{
        x.className = "main";
    }
}*/