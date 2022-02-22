function form_validation(){

    let fname = document.getElementById("validationServer01").value;
    let lname = document.getElementById("validationServer02").value;
    
    
    let contact = document.getElementById("validationServer04").value;

    if(username.length>=5 && username.length<=10){
        document.getElementById("validationServerUsername").className = "form-control is-valid";
    }
}

function ValidateEmail() 
{
    let mail = document.getElementById("validationServer03").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        document.getElementById("validationServer03").className = "form-control is-valid";
    }
    else{
        document.getElementById("validationServer03").className = "form-control is-invalid";
    }
}
function validateUserName(){
    var usernameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    let username = document.getElementById("validationServerUsername").value;
    if(usernameRegex.test(username)){
        document.getElementById("validationServerUsername").className = "form-control is-valid";
    }
    else{
        document.getElementById("validationServerUsername").className = "form-control is-invalid";
    }
}
function validateFirstName(){
    var usernameRegex = /^[A-Za-z]$/;
    let username = document.getElementById("validationServer01").value;
    if(usernameRegex.test(username)){
        document.getElementById("validationServer01").className = "form-control is-valid";
    }
    else{
        document.getElementById("validationServer03").className = "form-control is-invalid";
    }
}
function validateLastName(){
    var usernameRegex = /^[A-Za-z]$/;
    let username = document.getElementById("validationServer02").value;
    if(usernameRegex.test(username)){
        document.getElementById("validationServer02").className = "form-control is-valid";
    }
    else{
        document.getElementById("validationServer02").className = "form-control is-invalid";
    }
}