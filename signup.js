function Mathavam()
{

  var email=document.getElementById("t1").value();
  var password=document.getElementById("p1").value();
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}
