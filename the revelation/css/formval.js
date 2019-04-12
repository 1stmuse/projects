
function validateForm(){
    var formName=document.forms["contact"]["name"].value;
    var formEmail=document.forms["contact"]["email"].value;
    var formSubject=document.forms["contact"]["subject"].value;
    var formMessage=document.forms["contact"]["message"].value;
    console.log("enter name")
    if(formName==""){
        alert("name must be filled");
        return false;
    }
    console.log("name entered")
    if (formEmail=="") {
        alert("please fill in your email");
        return false;
    }
    if (formSubject=="") {
        alert("subject need to be inputted");
        return false;
    }
    if (formMessage=="") {
        alert("write your message");
        return false;
    }
}
// getMatchedCSSRules.floor() rounds up a number to the nearest integer downward
 /*
var randomNumber= Math.floor(Math.random()* 6) +1;
var guess=prompt("i'm thinkinjg of a number between 1 and 6 what is it");
if (parseInt(guess) ===randomNumber){
    document.write("<p> you guessed right</p>");
}else{
    document.write("<p> wrong the corect number is" + randomNumber);
}*/