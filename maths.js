window.addEventListener("load", start);

function start() {
	var answers= [];
	var correctAnswers= ["1", "Depends on the sign of the numerator", "2", "1806", "12.56637061"];
	
	var options= document.querySelectorAll(".option");
	for(let i=0; i< options.length; i++){
       
	   options[i].addEventListener("click", function(){
		   //save answer 
		   
		   answers.push(this.textContent);
		       console.log(answers);
			   
			   var options= document.querySelectorAll(".option");
			   
		   // change the question
		   var q= document.querySelector("#question");
		   if (q.textContent === "What is 2% of 50?") {q.textContent= "Dividing by a negative number gives:";
		   options[0].textContent= "A negative number" ;
		   options[1].textContent= "0";
		   options[2].textContent= "Depends on the sign of the numerator"}
		   
		   else if (q.textContent === "Dividing by a negative number gives:") {q.textContent= "If x/2 + 2/x = 2, what is the value of x?";
		   options[0].textContent= "1";
		   options[1].textContent="2";
		   options[2].textContent= "4"}
		   
		   else if (q.textContent === "If x/2 + 2/x = 2, what is the value of x?") {q.textContent= "What is the next number in the row: 1, 2, 6, 42?";
		   options[0].textContent= "1806";
		   options[1].textContent="1800";
		   options[2].textContent= "1805"}
		   
		   else if (q.textContent === "What is the next number in the row: 1, 2, 6, 42?") {q.textContent= "If the ray of a square is 2 meters, what is the value of its area?";
		   options[0].textContent= "6.283185307";
		   options[1].textContent="12.56637061" ;
		   options[2].textContent= "9.424777961"}
		   
		   else {
			   var options= document.querySelectorAll(".option");
			  for (let i=0; i< options.length; i++) { options[i].style.display="none";};
			   q.style.display= "none";
			   
			   		   
			   var n=0;
			   for(let i=0; i<answers.length; i++){
				   if(answers[i] !== correctAnswers[i]) {n++}
			   }
			   
			   var q = document.querySelector("#questions");
			   var p= document.createElement("p");
			   p.style.color= "#000";
			    p.textContent= "Result: " + n + " wrong answers ";
				p.classList.add("result");
				q.appendChild(p);
				
				if(n===0){p.textContent = "Result: all answers are correct " + String.fromCodePoint(0x1F60A)}
				else if(n===1){p.textContent = "Result: " + n + " wrong answer " + String.fromCodePoint(0x1F603)}
				else if(n===2){p.textContent += String.fromCodePoint(0x1F642)}
				else if(n===3){p.textContent += String.fromCodePoint(0x1F610)}
				else if(n===4){p.textContent += String.fromCodePoint(0x1F641)}
				else {p.textContent += String.fromCodePoint(0x1F61E)}
				
			   
			  
             var img1= document.createElement("img");
              img1.setAttribute("src", "home.jpg");
			  img1.setAttribute("alt", "home icon");
			  img1.classList.add("icon");
              q.appendChild(img1);	
               
			   img1.addEventListener("click", function(){window.open("index.html", "_self")})
			   
              var img2= document.createElement("img");
              img2.setAttribute("src", "retry.jpg");
			  img2.setAttribute("alt", "retry icon");
              img2.classList.add("icon");
			  q.appendChild(img2)
			  
		      img2.addEventListener("click", function(){window.open("maths.html", "_self")})
		   }
		   
		   //save the answer
		   
		   
		   
		   
	   });
    }
	
	
	
}