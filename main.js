
//Exercise 1
var myName = "Tomas";
console.log(myName);
//Exercise 2
var age=21;
console.log(age);
var ignaciAge =32;
//Exercise 3
var ageDiff = age - ignaciAge;
console.log("Diferencia:"+ageDiff);

//Exercise 4
if (age<=21){
  console.log("You are not older than 21");
}
  else {
    console.log("You are older than 21");

  }
//Exercise 5
function comparation(age,ignaciAge){
  if(age<ignaciAge){
    return "Ignasi is older than you"
  }
  else if(age==ignaciAge){
    return "You have the same age as Ignasi"

  }
  else{
    return"ignasi is younger than you"
  }

}
console.log(comparation(age,ignaciAge))
