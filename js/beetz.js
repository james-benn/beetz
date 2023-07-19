// circular progress bar 
let number = document.getElementById("number-chart");
let secondNumber = document.getElementById("number-chart2");
let counter = 0;
setInterval(() => {
    if(counter == 65){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + "%";
    }

}, 30);

let secondCounter = 0;
setInterval(() => {
    if(secondCounter == 85){
        clearInterval();
    }else{
        secondCounter += 1;
        secondNumber.innerHTML = secondCounter + "%"
    }
}, 23);



// toggle nav bar function
function myFunction() {
    let add = document.getElementById("myDiv");
    if (add.style.display === "block") {
      add.style.display = "none";
    } else {
      add.style.display = "block";
    }
  }