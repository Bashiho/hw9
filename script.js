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

    // Convert to number
    var n1num = Number(n1);
    var n2num = Number(n2);
    var n3num = Number(n3);
    var n4num = Number(n4);

    // Check if converted numbers are NaN
    var n1NaN = Number.isNaN(n1num);
    var n2NaN = Number.isNaN(n2num);
    var n3NaN = Number.isNaN(n3num);
    var n4NaN = Number.isNaN(n4num);
    
    // Check if converted numbers are Integers
    var n1Int = Number.isInteger(n1num);
    var n2Int = Number.isInteger(n2num);
    var n3Int = Number.isInteger(n3num);
    var n4Int = Number.isInteger(n4num);

    // Add all information to HTML, formatted as <p> in HTML
    document.getElementById("n1").innerHTML += "Original Value: " + n1.toString() + 
        " | Converted: " + n1num.toString() + 
        " | Is NaN: " + n1NaN.toString() + 
        " | Is Int: " + n1Int.toString();

    document.getElementById("n2").innerHTML += "Original Value: " + n2.toString() + 
        " | Converted: " + n2num.toString() + 
        " | Is NaN: " + n2NaN.toString() + 
        " | Is Int: " + n2Int.toString();

    document.getElementById("n3").innerHTML += "Original Value: " + n3.toString() + 
        " | Converted: " + n3num.toString() + 
        " | Is NaN: " + n3NaN.toString() + 
        " | Is Int: " + n3Int.toString();

    document.getElementById("n4").innerHTML += "Original Value: " + n4.toString() + 
        " | Converted: " + n4num.toString() + 
        " | Is NaN: " + n4NaN.toString() + 
        " | Is Int: " + n4Int.toString();
}

function mathAndFormatting() {
    var cost1 = 39.99, cost2 = 74.99, cost3 = 89.99, tax = 1.07, shipping1 = 4.99, shipping2 = 9.99, shipping3 = 19.99;
    // Calculate subtotal as cost + shipping
    var subtotal1 = cost1 + shipping1, subtotal2 = cost2 + shipping2, subtotal3 = cost3 + shipping3;
    // Calculate total as subtotal * tax
    var total1 = subtotal1 * tax, total2 = subtotal2 * tax, total3 = subtotal3 * tax;
    // Calculate amount of tax as total - subtotal
    var tax1 = total1 - subtotal1, tax2 = total2 - subtotal2, tax3 = total3 - subtotal3;

    // Display all information in HTML
    document.getElementById("math1").innerHTML += "Item 1 | Subtotal: $" + subtotal1.toFixed(2).toString() + 
        " | Shipping: $" + shipping1.toString() + 
        " | Tax: $" + tax1.toFixed(2).toString() + 
        " | Total: $" + total1.toFixed(2).toString();

    document.getElementById("math2").innerHTML += "Item 2 | Subtotal: $" + subtotal2.toFixed(2).toString() + 
        " | Shipping: $" + shipping2.toString() + 
        " | Tax: $" + tax2.toFixed(2).toString() + 
        " | Total: $" + total2.toFixed(2).toString();

    document.getElementById("math3").innerHTML += "Item 3 | Subtotal: $" + subtotal3.toFixed(2).toString() + 
        " | Shipping: $" + shipping3.toString() + 
        " | Tax: $" + tax3.toFixed(2).toString() + 
        " | Total: $" + total3.toFixed(2).toString();
}

// Call functions for use
dateDisplay();
numberConversion();
mathAndFormatting();