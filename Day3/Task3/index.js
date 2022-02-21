function fibb(){
    let arr = [];
    let val = document.getElementById("inputNum").value;

    for(i=0; i<val; i++){
        if(i==0 || i==1){
            arr[i] = 1;
        }
        else{
            arr[i] = arr[i-2]+arr[i-1];
        }
    }
    console.log(arr);
}