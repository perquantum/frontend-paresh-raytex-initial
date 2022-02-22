function enlist(){
    let item1 = document.getElementById("list1").value;
    let item2 = document.getElementById("list2").value;
    let item3 = document.getElementById("list3").value;
    let table = document.getElementById("table-body");
    table.innerHTML = table.innerHTML + "<tr><td>"+ item1 +"</td><td>" + item2 + "</td><td>" + item3 + "</td></tr>";
}