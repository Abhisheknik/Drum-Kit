
var num1=document.querySelectorAll(".drum").length;

for (var i=0;i<num1;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
  {
     var buttonInnerHTML = this.innerHTML;
     makeSound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
   
  });

}
//check button press


document.addEventListener("keypress", function(event){

  makeSound(event.key);
  
  buttonAnimation(event.key);

});

//check keyborad press

function makeSound(key)
{

  switch (key) {
    case "W":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
      break;
   
    case "A":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
    break;

    case "S":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
      break;

    case "D":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
      break;

      case "J":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
      break;

      case "K":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
      break;
    
      case "L":
        var kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
      break;

    default:console.log(buttonInnerHTML);
      break;
   }
}

function buttonAnimation(currentKey)
{

  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add("animation");

  setTimeout
  (function() 
  {
    activeButton.classList.remove("animation"); 
  }, 100);

 }