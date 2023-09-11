// var firstName  = prompt("enter your first anme !");
// console.log(firstName.charAt(firstName.length-2));




var text = "The code above finds a single character at index-0 (the beginning) of the stringrepresented by the variable firstName and assigns it to the variable firstChar.The following code finds the last character in the string."
// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "c"){
//         console.log(text.charAt(i))
//     }
// }
// var increament = 2;
// // increament++;
// console.log(increament++);
// console.log(text.indexOf())
var firstChar = text.indexOf("character");
console.log(firstChar);
 if (firstChar !== -1) {
 text = text.slice(0, firstChar) + "it's running" + text.slice(firstChar + 10);
 }
 console.log(text); 