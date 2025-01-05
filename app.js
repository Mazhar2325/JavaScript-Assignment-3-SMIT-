//chapter# Arrays and loops
// document.getElementById("Alert").onclick = function(){
//     alert("I am an alert");
// }
//Alert function
function simpleAlert(){
    alert("I am an alert");
}

// {
// document.getElementById("printName").onclick = function(){
//     alert("Please enter your name");
//     }
// }

//function to print my Name
function printMyNames() {
    let myName = document.getElementById("inputField").value;
   // if(!myName) {}
   if (myName === "") {
    alert("Please Enter Your name first");
    return;
   }
   document.getElementById("output").innerHTML = myName;
}
 
// function To clear input and output
function textClear(){
    document.getElementById("inputField").value = "";
}
// print All cities
let cities = ["Faisalabad", "Karachi", "Islamabad", "Boorewala", "Bahawalpur" ];
function allCities() {   
    for(i = 0; i < cities.length; i++){
        document.getElementById("output").innerHTML += (i+1)+ ") " + cities[i] + "<br>";
    }
    
}

//Addcity in to the list
function AddCity(){
    document.getElementById("output").innerHTML = "";
    let city = document.getElementById("inputField").value;
    if (city === "") {
        alert("Please enter your city");
        return;
    }
    cities.push(city);
    document.getElementById("output").innerHTML = `<span style="color: green; font-size: 24px;">${city}</span> has been added successfully`;
}

// generate table
function table(){
    for(let i = 1; i<=10; i++){
        document.getElementById("output").innerHTML += `2 * ${i} = ${i * 2}` + "<br>"; 
    }
}

function clearOutPut(){
    document.getElementById("output").innerHTML = "";
    console.log("outPut Clear")
}