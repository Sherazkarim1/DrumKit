let numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i<numberOfButtons; i++){   

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

let buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);

switch (buttonInnerHTML) {
    case "w":
            let tom1 = new Audio("sounds/tom-1.mp3"); 
            tom1.play();

            case "a":
                let tom2 = new Audio("sounds/tom-2.mp3"); 
            tom2.play();
        break;

    default:
}
});

}


