var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__unput");
var elResultPerson = document.querySelector(".resultPerson");
var elResultBicycle = document.querySelector(".resultBicycle");
var elResultCar = document.querySelector(".resultCar");
var elResultAirplane = document.querySelector(".resultAirplane");
var elResultNotification = document.querySelector(".notification");


elForm.addEventListener("submit", function(event){
  event.preventDefault()
  var elInputValue = elInput.value;
  var speedPerson = 3.6;
  var speedBicycle = 20.1;
  var speedCar = 70;
  var speedAirplane = 800;
  
  
  if (elInputValue <= 0 || isNaN(elInputValue)){
    elResultNotification.textContent = "Iltimos 0 dan katta raqam kiriting, yoki son kiriting"
    
    elResultNotification.classList.add("notification-error");
    elResultNotification.classList.remove("notification-success");
    
    return;
  }else{
    elResultNotification.textContent = ""
    elResultNotification.classList.remove("notification-error");
    
    
    
  }
  
  
  
  
  function calculatePersonTime (){
    var hour = Math.floor(elInputValue / speedPerson);
    var minute = Math.floor((elInputValue / speedPerson - hour) * 60);
    var second = Math.floor(((elInputValue / speedPerson - hour) * 60 - minute) * 60);
    
    return hour + " soat " + minute + " minut " + second + " sekund"; 
  }
  
  function calculateBicycleTime (){
    var hour = Math.floor(elInputValue / speedBicycle);
    var minute = Math.floor((elInputValue / speedBicycle - hour) * 60);
    var second = Math.floor(((elInputValue / speedBicycle - hour) * 60 - minute) * 60);
    
    return hour + " soat " + minute + " minut " + second + " sekund"; 
  }
  
  function calculateCarTime (){
    var hour = Math.floor(elInputValue / speedCar);
    var minute = Math.floor((elInputValue / speedCar - hour) * 60);
    var second = Math.floor(((elInputValue / speedCar - hour) * 60 - minute) * 60);
    
    return hour + " soat " + minute + " minut " + second + " sekund"; 
  }
  

  function calculateAirplaneTime (){
    var hour = Math.floor(elInputValue / speedAirplane);
    var minute = Math.floor((elInputValue / speedAirplane - hour) * 60);
    var second = Math.floor(((elInputValue / speedAirplane - hour) * 60 - minute) * 60);
    
    return hour + " soat " + minute + " minut " + second + " sekund"; 
  }
  
  
  
  elResultPerson.textContent = calculatePersonTime ();
  elResultBicycle.textContent = calculateBicycleTime();
  elResultCar.textContent = calculateCarTime ();
  elResultAirplane.textContent = calculateAirplaneTime ();
  
  
})