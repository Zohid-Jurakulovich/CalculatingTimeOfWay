var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__unput");
var elResultPerson = document.querySelector(".resultPerson");
var elResultBicycle = document.querySelector(".resultBicycle");
var elResultCar = document.querySelector(".resultCar");
var elResultAirplane = document.querySelector(".resultAirplane");


elForm.addEventListener("submit", function(event){
event.preventDefault()
var elInputValue = elInput.value;
var speedPerson = 3.6;
var speedBicycle = 20.1;
var speedCar = 70;
var speedAirplane = 800;

function resultPersonTime (){
  return elInputValue / speedPerson;
}

function resultBicycleTime (){
 return elInputValue / speedBicycle;
}

function resultCarTime() {
  return elInputValue / speedCar;
}
function resultAirplanTime() {
  return elInputValue / speedAirplane;
}

elResultPerson.textContent = (resultPersonTime().toFixed(2));
elResultBicycle.textContent = (resultBicycleTime()).toFixed(2);
elResultCar.textContent =(resultCarTime()).toFixed(2);
elResultAirplane.textContent = (resultAirplanTime()).toFixed(2);


})