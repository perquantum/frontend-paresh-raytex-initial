
function submit(){
    let fname = document.getElementById("validationTooltip01").value;
    let lname = document.getElementById("validationTooltip02").value;
    let username = document.getElementById("validationTooltipUsername").value;
    let city = document.getElementById("validationTooltip03").value;
    let state = document.getElementById("validationTooltip04").value;
    let zip = document.getElementById("validationTooltip05").value;

    document.getElementById("details").innerHTML = fname + lname + username + city + state + zip;
}