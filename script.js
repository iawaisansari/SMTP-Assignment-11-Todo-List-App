var getDate = "";
var getTask = "";
var getDescription = "";

function inputDetails() {
    getDate = document.getElementById("date");
    getTask = document.getElementById("title").value;
    getDescription = document.getElementById("description").value;
    displayOutput(getDate.value, getTask, getDescription);
}

function displayOutput(d = "", t = "", des = "") {
    let date = document.getElementById("1").innerHTML = d;
    let tast = document.getElementById("2").innerHTML = t;
    let description = document.getElementById("3").innerHTML = des;
    let del = document.getElementById("4").innerHTML = "<button id='delete' onclick='deleteData()'>Delete</button>";
}

function deleteData() {
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
}