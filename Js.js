function CalculateNumbUa(){
  var result , var1 , numb = document.getElementById("numbua").value,frNot=document.getElementById("from-notationua").value,toNot=document.getElementById("to-notationua").value;
  var1=parseInt(numb,frNot);
  result=var1.toString(toNot);
  document.getElementById("calcresultua").innerHTML=result;
  document.getElementById("resultua").style.display="block";
  console.log(result);
}
function CalculateNumbEn(){
  var result , var1 , numb = document.getElementById("numben").value,frNot=document.getElementById("from-notationen").value,toNot=document.getElementById("to-notationen").value;
  var1=parseInt(numb,frNot);
  result=var1.toString(toNot);
  document.getElementById("calcresulten").innerHTML=result;
  document.getElementById("resulten").style.display="block";
  console.log(result);
}
function Enfunc(){
  document.getElementById("container-ua").style.display="none";
  document.getElementById("container-en").style.display="block";
  document.getElementById("lang-btn").style.display="none";
  document.getElementById("lang-btn-hired").style.display="block";
}
function Uafunc(){
  document.getElementById("container-ua").style.display="block";
  document.getElementById("container-en").style.display="none";
  document.getElementById("lang-btn").style.display="block";
  document.getElementById("lang-btn-hired").style.display="none";
}