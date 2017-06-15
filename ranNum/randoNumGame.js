////random number game
//
function randomnum(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error ("num not entered");
        return("num not entered");
}  else {
        var num1=parseInt(num1);
        var num2= parseInt(num2);
        var random = Math.floor(Math.random() * (num1 - num2 + 1)) + num2;
   return (random);
}
}

alert(randomnum(prompt( "enter num1"),prompt("enter num2")));

//
//var rnumber = randomnum(6,1);
//var guess = false;
//alert("Welcome to the random Number Game, can you guess what the number is? range is from 1-6");
//var uguess = prompt("pick a number from 1 - 6");
//uguess = parseInt(uguess);
//if (uguess <= 6 && uguess >= 1) {
//    alert("Drum Roll");
//
//    if (rnumber === uguess) {
//    alert("You did it, your number was " + uguess + " and the randum number was " + rnumber);
//    guess = true;
//}   else if (uguess > rnumber) {
//     alert("your number is greater then the random number, try again");
//}    else {
//    alert("your number is less then random number");
//}
//
//if (guess === false ) {
//var secondguess = prompt("one more try");
//}
//if (parseInt(secondguess) === rnumber && guess === false) {
//    alert("You did it, your first number was " + uguess + "Your second number was"+ secondguess +" and the randum number was " + rnumber);
//     guess = true;
//} else if (guess === false) {
//   alert("Better luck next time, your first number was " + uguess + " Your second number was "+ secondguess +" and the randum number was " + rnumber);
//}
//
//} else {
//    alert("please refresh page and pick a num 1-6");
//}

//function rectangleArea(length,width) {
//    var area=width*length;
//    return(area);
//}
//var length = 70;
//alert(rectangleArea(5,length));
//


