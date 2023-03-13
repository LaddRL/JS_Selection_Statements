console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let MagicNumber = 12 

let GuessNumber = prompt("What's the magic number?")

MagicNumber = parseInt(MagicNumber)
console.log(MagicNumber)
if(GuessNumber < MagicNumber) {
  window.prompt("Too low!")
}

  else if(GuessNumber > MagicNumber){
    window.prompt("Too high!")
  }
  
  else if(MagicNumber == GuessNumber){
    console.log("Congratulations!! it's 12!")
  }
  else{
    console.log("Make sure you enter a number")
    window.alert("Make sure you enter a number")
  }



  // Exercise 2
  let birthMonth = window.prompt("What is your birth month?")

switch (birthMonth) {
  case "December":
    console.log("You were born in the winter!");
    break;
    case "March":
    console.log("You were born in the spring!")
    break;
    case "June":
    console.log("You were born in the summer!")
    break;
    case "October":
      console.log("You were born in the Fall!")

      default:
        console.log("You were born in different months.")
        break;
}

// Exercise 3 
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log('Product: ${size} ${color} ${type}');