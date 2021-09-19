  window.addEventListener("load", function (){
	  
	  var i=0;
	  var j=0;
	  
var heading = 'Welcome to the online quiz game';
var para1= "You can anwer 5 questions in any of the topics below";

var h= document.querySelector("h1");
var p= document.querySelector("p");

 writeHeading();
 
 
 
function writeHeading() {
  if (i < heading.length) {
    h.textContent += heading.charAt(i);
    i++;
    setTimeout(writeHeading, 90);}
	
  if (h.textContent === heading) {writePara1();}
}

 
function writePara1() {
  if (j < para1.length) {
    p.textContent += para1.charAt(j);
    j++;
    setTimeout(writePara1, 70);}
}
 
 
 /// showing the questions about history
 var t1= document.querySelector(".topic1");
  t1.addEventListener("click", function(){
	 
 window.open("history.html", "_self")
 })
 
 /// showing the questions about geography 
 var t2= document.querySelector(".topic2");
  t2.addEventListener("click", function(){
	 
 window.open("geography.html", "_self")
 })
 
 /// showing the questions about animals 
 var t3= document.querySelector(".topic3");
  t3.addEventListener("click", function(){
	 
 window.open("animals.html", "_self")
 })
 
 /// showing the questions about sport
 var t4= document.querySelector(".topic4");
  t4.addEventListener("click", function(){
	 
 window.open("sport.html", "_self")
 }) 
 
 /// showing the questions about math
 var t5= document.querySelector(".topic5");
  t5.addEventListener("click", function(){
	 
 window.open("maths.html", "_self")
 })
 
  });
  
  
