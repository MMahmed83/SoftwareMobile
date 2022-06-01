





function age(){
var birth = document.getElementById('bth').value;
var d=new Date();
var fullYear=d.getFullYear();
var birthYear = birth.substring(0,4);
// alert(birthYear);
  var umar=fullYear-birthYear;
  res.value=umar;


  
}