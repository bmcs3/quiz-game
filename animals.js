window.addEventListener("load", start);

function start() {
	var answers= [];
	var correctAnswers= ["Orca", "48 years", "Hyenas", "Blue whale", "Hippopotamus"];
	
	var options= document.querySelectorAll(".option");
	for(let i=0; i< options.length; i++){
       
	   options[i].addEventListener("click", function(){
		   //save answer 
		   
		   answers.push(this.textContent);
		       console.log(answers);
			   
			   var options= document.querySelectorAll(".option");
			   
		   // change the question
		   var q= document.querySelector("#question");
		   if (q.textContent === "Which of the following is a Dolphin species?") {q.textContent= "What is the lifespan of the Asian elephant?";
		   options[0].textContent= "40 years";
		   options[1].textContent="48 years";
		   options[2].textContent= "56 years"}
		   
		   else if (q.textContent === "What is the lifespan of the Asian elephant?") {q.textContent= "Which of the following animals can't climb trees?";
		   options[0].textContent= "Hyenas";
		   options[1].textContent="Lions";
		   options[2].textContent= "Black bears"}
		   
		   else if (q.textContent === "Which of the following animals can't climb trees?") {q.textContent= "What is the biggest animal in the world?";
		   options[0].textContent= "Elephant";
		   options[1].textContent="Fin whale";
		   options[2].textContent= "Blue whale"}
		   
		   else if (q.textContent === "What is the biggest animal in the world?") {q.textContent= "Which of the following mammals can't swim?";
		   options[0].textContent= "Hippopotamus";
		   options[1].textContent="Sloth";
		   options[2].textContent= "Jaguar"}
		   
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

			  img2.addEventListener("click", function(){window.open("animals.html", "_self")})
			  
		   }
		   
		   //save the answer
		   
		   
		   
		   
	   });
    }
	
	
	
}