alert("Welcome to the Street Name Quiz, Gold if yog get all 5 corect, 3ilver for 3, and bronz for 1 & 2 questions corect");
var question1 = prompt("Is 1st st in NY");
var question2 = prompt("Is 2st st in NY");
var question3 = prompt("Is 3st st in NY");
var question4 = prompt("Is 4st st in NY");
var question5 = prompt("What do you stile websites with?");
var tally = 0;

if (question1=="yes" || question1=="Yes" || question1=="y" || question1=="Y") {
  tally ++;  
}

if (question2=="yes" || question2=="Yes" || question2=="y" || question2=="Y") {
  tally ++;  
}

if (question3=="yes" || question3=="Yes" || question3=="y" || question3=="Y") {
  tally ++;  
}

if (question4=="yes" || question4=="Yes" || question4=="y" || question4=="Y") {
  tally ++;   
}

if (question5.toUpperCase() === "CSS") {
  tally ++;
}


if (tally == 5 ) {
   alert("You got "+tally+" Corect! GOLD"); 
} else if (tally<=5 && tally >= 3){ 
  alert("You got "+tally+" Corect! SILVER");  
} else if (tally<=2 && tally >= 1) {
   alert("You got "+tally+" Corect! BRONZ"); 
} else {
    alert("Better Luck Next Time");
}


