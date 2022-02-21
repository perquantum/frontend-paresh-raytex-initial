username1 = "Paresh"
password1 = "PerQuantum#21";

function authenticate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username==username1 && password==password1){
        document.getElementById("result").innerHTML = "Authentication granted!";
    }
    else{
        document.getElementById("result").innerHTML = "Authentication failed!";
    }
}