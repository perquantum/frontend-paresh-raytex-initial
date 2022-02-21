function checkPrime(){
    let num = document.getElementById("readme").value;
    let flag = 0;
    if(num==1 || num==0){
        document.getElementById("result").innerHTML = "Neither prime nor composite"
    }
    else{
        for(let i=2; i<=num/2; i++){
            if(num%i==0){
            flag = flag + 1;
            }
        }
        if(flag==0){
            document.getElementById("result").innerHTML = "Prime";
        }
        else{
            document.getElementById("result").innerHTML = "Not Prime";
        }
    }

}

// sorting number
// counts the number of words in the name