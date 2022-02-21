var name = "Paresh";
var num1 = 21;
var verify = true;
var num2 = 1.5;

const student = {name:"Paresh", age:"20"};

document.getElementById("p4").innerHTML =
console.log = student.name + student.age;



function checkOddEven(){
    var num = document.getElementById("readMe").value;
    if(num%2==0){
        document.getElementById("p5").innerHTML = "Even";
    }
    else{
        document.getElementById("p5").innerHTML = "Odd";
    }
}

function example(){

var num3 = num1 + num2;
var num4 = num1 * num2;

document.getElementById("p1").innerHTML = num3;
document.getElementById("p2").innerHTML = name;
document.getElementById("p3").innerHTML = num4;

}