window.addEventListener("load", start);

function start() {
	var answers= [];
	var correctAnswers= ["Uruguay", "8 times", "23.77 meters", "Australia", "3 of 20-minutes periods"];
	
	var options= document.querySelectorAll(".option");
	for(let i=0; i< options.length; i++){
       
	   options[i].addEventListener("click", function(){
		   //save answer 
		   
		   answers.push(this.textContent);
		       console.log(answers);
			   
			   var options= document.querySelectorAll(".option");
			   
		   // change the question
		   var q= document.querySelector("#question");
		   if (q.textContent === "What was the first country to win the world cup?") {q.textContent= "How many times did the US host the olympics?";
		   options[0].textContent= "8 times";
		   options[1].textContent="7 times";
		   options[2].textContent= "5 times"}
		   
		   else if (q.textContent === "How many times did the US host the olympics?") {q.textContent= "What is the length of a tennis court?";
		   options[0].textContent= "22.88 meters";
		   options[1].textContent="23.77 meters";
		   options[2].textContent= "24.99 meters"}
		   
		   else if (q.textContent === "What is the length of a tennis court?") {q.textContent= "Which country won the 2015 Cricket World Cup?";
		   options[0].textContent= "Australia";
		   options[1].textContent="England";
		   options[2].textContent= "India"}
		   
		   else if (q.textContent === "Which country won the 2015 Cricket World Cup?") {q.textContent= "How long does a hockey match last?";
		   options[0].textContent= "3 of 20-minutes periods";
		   options[1].textContent="2 of 30-minutes periods";
		   options[2].textContent= "2 of 45-minutes periods"}
		   
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
			  img1.setAttribute("alt", "retry icon");
              img2.classList.add("icon");
			  q.appendChild(img2)			  
			  
		      img2.addEventListener("click", function(){window.open("sport.html", "_self")})
		      }
		   
		   //save the answer
		   
		   
		   
		   
	   });
    }
	
	
	
}