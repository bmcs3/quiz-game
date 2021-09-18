window.addEventListener("load", start);

function start() {
	var answers= [];
	var correctAnswers= ["Nile", "Kuala Lumpur", "Algeria", "12", "On the borders between Nepal and China"];
	
	var options= document.querySelectorAll(".option");
	for(let i=0; i< options.length; i++){
       
	   options[i].addEventListener("click", function(){
		   
		   //save answer 
		    answers.push(this.textContent);
		       console.log(answers);
			   
			   var options= document.querySelectorAll(".option");
			   
		   // change the question
		   var q= document.querySelector("#question");
		   if (q.textContent === "What is the longest river in the world?") {q.textContent= "What is the capital city of Malaysia?";
		   options[0].textContent= "Kuala Lumpur";
		   options[1].textContent="Malacca";
		   options[2].textContent= "Kota Bharu"}
		   
		   else if (q.textContent === "What is the capital city of Malaysia?") {q.textContent= "What is the largest country in Africa?";
		   options[0].textContent= "South Africa";
		   options[1].textContent="Nigeria";
		   options[2].textContent= "Algeria"}
		   
		   else if (q.textContent === "What is the largest country in Africa?") {q.textContent= "How many independant countries are there in South America?";
		   options[0].textContent= "14";
		   options[1].textContent="12";
		   options[2].textContent= "13"}
		   
		   else if (q.textContent === "How many independant countries are there in South America?") {q.textContent= "Where is the mount of Everest located?";
		   options[0].textContent= "On the borders between Nepal and China";
		   options[1].textContent="Nepal";
		   options[2].textContent= "China"}
		   
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
              
			  img2.addEventListener("click", function(){window.open("geography.html", "_self")})
			  
		   }
		   
		  
		   
		   
		   
		   
	   });
    }
	
	
	
}
