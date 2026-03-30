function dateDisplay() {
    var date = new Date;
    // Adding 1 is necessary to get proper date
    var month = (1 + date.getMonth()).toString(), 
        day = date.getDate().toString(), 
        year = date.getFullYear().toString();
    // Add 0's to beginning if needed for formatting
    month = month.length > 1 ? month : '0' + month;
    day = day.length > 1 ? day : '0' + day;

    var string = "<h2> Today is " + month + "/" + day + "/" + year + "</h2>";
    console.log(string);
    document.getElementById("date-display").innerHTML += string;
}

function numberConversion() {
    var n1 = 39, n2 = 74, n3 = "hello", n4 = 83.2;

    document.getElementById("n1").innerHTML += "Original Value: " + n1.toString();
    document.getElementById("n2").innerHTML += "Original Value: " + n2.toString();
    document.getElementById("n3").innerHTML += "Original Value: " + n3;
    document.getElementById("n4").innerHTML += "Original Value: " + n4.toString();

    n1num = n1.Number();
    n2num = n2.Number();
    n3num = n3.Number();
    n4num = n4.Number();
    
    document.getElementById("n1").innerHTML += "As Number: " + n1num.toString();
    document.getElementById("n2").innerHTML += "As Number: " + n2num.toString();
    document.getElementById("n3").innerHTML += "As Number: " + n3num.toString();
    document.getElementById("n4").innerHTML += "As Number: " + n4num.toString();

    n1NaN = n1.isNaN();
    n2NaN = n2.isNaN();
    n3NaN = n3.isNaN();
    n4NaN = n4.isNaN();

    document.getElementById("n1").innerHTML += "Is NaN: " + n1NaN.toString();
    document.getElementById("n2").innerHTML += "Is NaN: " + n2NaN.toString();
    document.getElementById("n3").innerHTML += "Is NaN: " + n3NaN.toString();
    document.getElementById("n4").innerHTML += "Is NaN: " + n4NaN.toString();
    
    n1Int = n1.isInteger();
    n2Int = n2.isInteger();
    n3Int = n3.isInteger();
    n4Int = n4.isInteger();


    document.getElementById("n1").innerHTML += "Is Int: " + n1Int.toString();
    document.getElementById("n2").innerHTML += "Is Int: " + n2Int.toString();
    document.getElementById("n3").innerHTML += "Is Int: " + n3Int.toString();
    document.getElementById("n4").innerHTML += "Is Int: " + n4Int.toString();   
}

dateDisplay();
numberConversion();