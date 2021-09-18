window.addEventListener("load", start);

function start() {
	var answers= [];
	var correctAnswers= ["Tutankhamun", "1769", "George Washington", "cosmonaut Yuri Gagarin", "Egypt"];
	
	var options= document.querySelectorAll(".option");
	for(let i=0; i< options.length; i++){
       
	   options[i].addEventListener("click", function(){
		   //save answer 
		   
		   answers.push(this.textContent);
		       console.log(answers);
			   
			   var options= document.querySelectorAll(".option");
			   
		   // change the question
		   var q= document.querySelector("#question");
		   if (q.textContent === "Who is the egyptian pharon whose tomb was discovered in 1922?") {q.textContent= "When was Napoleon Bonaparte born?";
		   options[0].textContent= "1769";
		   options[1].textContent="1780";
		   options[2].textContent= "1865"}
		   
		   else if (q.textContent === "When was Napoleon Bonaparte born?") {q.textContent= "Who was the first US president?";
		   options[0].textContent= "George Washington";
		   options[1].textContent="John Adams";
		   options[2].textContent= "Thomas Jefferson"}
		   
		   else if (q.textContent === "Who was the first US president?") {q.textContent= "Who was the first person to go to space?";
		   options[0].textContent= "Neil Armstrong";
		   options[1].textContent="Alan Shepard";
		   options[2].textContent= "cosmonaut Yuri Gagarin"}
		   
		   else if (q.textContent === "Who was the first person to go to space?") {q.textContent= "What is the oldest country in the world?";
		   options[0].textContent= "India";
		   options[1].textContent="Egypt";
		   options[2].textContent= "Greece"}
		   
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
			  
			  img2.addEventListener("click", function(){window.open("history.html", "_self")})
			  
			  
		   }
		   
		   //save the answer
		   
		   
		   
		   
	   });
    }
	
	
	
}
