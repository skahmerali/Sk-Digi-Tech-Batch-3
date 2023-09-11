var emails = [];
var passwords = [];
function singup() {
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    emails.push(userEmail);
    passwords.push(userPassword);
    console.log(emails);
    console.log(passwords);
  

}
function login (){
    var checkEmail =document.getElementById("lEmail").value;;
    var checkPass =document.getElementById("lPass").value;;
    for (var i = 0; i < emails.length; i++) {
        if (emails[i] == checkEmail && checkPass== passwords[i]){
            alert("congrats!")
        }
        else{
            alert("sorry!")
        }
    }
}