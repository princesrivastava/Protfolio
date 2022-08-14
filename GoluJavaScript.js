 /* As this is  external .js file which will be linked with html file no need of script tag here . */
 
 /*
var z=3;
var z="hello"   ;// z date type gets changed from integer to string.If this was done in C OR CPP then it shall  be giving error.
z="hello" //   ;.// var z or z is same thing .
document.write(z+3); // output will be hello3  
*/



document.write("JavaScript is externally placed here. " );  
 
alert("Hey Guy's! This page might ask for some of your details which may be used for future references.");

function effect()
 {
   var y=document.getElementById("p4") ;  /* to get html elements by their id camel case notation- first letter of first word small rest all words first letter capital. */
   y.style.backgroundColor="black";         /* . operator to get css property but with camel case notation. */      
 }
 function effectout()
 {
	var p=document.getElementById("p4"); 
	  p.style.backgroundColor="khaki";  
 }
 function effect1()
 {
   var z=document.getElementById("p5") ;  /* to get html elements by their id -camelCaseNotation- first letter of first word small rest all words first letter capital. */ 
   z.style.backgroundColor="blue";          /* . operator to get css property but with camel case notation. */      
 }
 function effectout2()
 {
	var q=document.getElementById("p5");   
	  q.style.backgroundColor="khaki";
 }
 function effect11()
 {
   var x=document.getElementById("c1") ;  /* to get html elements by their id camelCaseNotation- first letter of first word small rest all words first letter capital. */ 
   x.style.backgroundColor="red";          /* . operator to get CSS property but with camelCaseNotation. */      
 }
 function effectout22()
 {
	var r=document.getElementById("c1"); 
    r.style.backgroundColor="khaki";
 }
   
/* Form validation - JS code is used to validate forms before submitting and sending it to web server .*/

function validate()  
{
   var result= true; 
   var m= document.getElementById("v1");
   if(m.value.length<=8)
   {
	
    alert("Password length should be minimum 8 characters long. ");
    return(false);    //  "false" keyword prevents form from being submitted.
   }
   else 
   return(result);
} 
   

 