var city = prompt("What is your city name?")
if (city === "Karachi" || city === "karachi") {
    document.write("Welcome to city of lights" + "<br>")
}
else {
    document.write("")
}

var gender1 = prompt("What is your gender?")
if (gender1 === "Male" || gender1 === "male") {
    document.write("Good Morning Sir" + "<br>")
}
else if (gender1 === "Female" || gender1 === "female") {
    document.write("Good Morning Ma’am" + "<br>")
}

var signalcolor = prompt("Tell the color of traffic signal on road?")
if (signalcolor === "Red" || signalcolor === "red") {
    document.write("Must Stop" + "<br>")
}
else if (signalcolor === "Yellow" || signalcolor === "yellow") {
    document.write("Ready to move" + "<br>")
}
else if (signalcolor === "Green" || signalcolor === "green") {
    document.write("Move now" + "<br>")
}

var fuel = prompt("Remaining fuel in your car in litres")
if (fuel < 0.25) {
    document.write("Please refill the fuel in your car" + "<br>")
}

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}


var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}


if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

var som1 = +prompt("Marks obtained in Subject 1: ")
var stm1 = +prompt("Total marks in Subject 1: ")
var som2 = +prompt("Marks obtained in Subject 2: ")
var stm2 = +prompt("Total marks in Subject 2: ")
var som3 = +prompt("Marks obtained in Subject 3: ")
var stm3 = +prompt("Total marks in Subject 3: ")
var percentage1 = (som1 + som2 + som3) / (stm1 + stm2 + stm3) * 100
document.write("Marks Sheet" + "<br><br>")
document.write("Total marks : " + (stm1 + stm2 + stm3) + "<br>")
document.write("Marks obtained : " + (som1 + som2 + som3) + "<br>")
document.write("Percentage : " + percentage1 + "%" + "<br>")
if (percentage1 < '100' && percentage1 >= '80') {
    document.write("Grade : A-one" + "<br>")
    document.write("Remarks : Excellent" + "<br>")
}
else if (percentage1 < '80' && percentage1 >= '70') {
    document.write("Grade : A" + "<br>")
    document.write("Remarks : Good" + "<br>")
}
else if (percentage1 < '70' && percentage1 >= '60') {
    document.write("Grade : B" + "<br>")
    document.write("Remarks : You need to improve" + "<br>")
}
else if (percentage1 < '60' && percentage1 >= '0') {
    document.write("Grade : Fail" + "<br>")
    document.write("Remarks : Sorry" + "<br>")
}

var secretNumber = 5
var guessSecretNumber = +prompt("Guess the Secret Key")
var guessSecretNumberAddOne = (guessSecretNumber - 1)
if (secretNumber === guessSecretNumber) {
    document.write("Bingo! Correct answer" + "<br>")
}
else if (secretNumber === guessSecretNumberAddOne) {
    document.write("Close enough to the correct answer" + "<br>")
}

var number2 = +prompt("Enter any number: ")
if (number2 % 3 === 0) {
    document.write(number2 + " is divisible by 3" + "<br>")
}
else {
    document.write(number2 + " is not divisible by 3" + "<br>")
}

var number3 = +prompt("Enter any number to check if it is even or odd: ")
if (number3 % 2 === 0) {
    document.write(number3 + " is an even number" + "<br>")
}
else {
    document.write(number3 + " is an odd number" + "<br>")
}

var temp = prompt("Tell us the temperature")
if (temp > 40) {
    document.write("It is too hot outside" + "<br>")
}
else if (temp > 30) {
    document.write("The Weather today is Normal" + "<br>")
}
else if (temp > 20) {
    document.write("Today’s Weather is cool" + "<br>")
}
else if (temp > 10) {
    document.write("OMG! Today’s weather is so Cool" + "<br>")
}

var numcal1 = +prompt("Enter first number: ")
var numcal2 = +prompt("Enter second number: ")
var operator = prompt("Enter an operator: ")
if (operator === "+") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 + numcal2 + "<br>")
}
if (operator === "-") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 - numcal2 + "<br>")
}
if (operator === "*") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 * numcal2 + "<br>")
}
if (operator === "/") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 / numcal2 + "<br>")
}
if (operator === "%") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 % numcal2 + "<br>")
}

var ch = prompt('Enter any character or number:');
var a = ch.charCodeAt(0);
if ((a >= 48) && (a <= 57)) {
    alert('Input is a number.')
}
else if ((a >= 65) && (a <= 90)) {
    alert('Input is an uppercase letter.')
}
else if ((a >= 97) && (a <= 122)) {
    alert('Input is lowercase letter.')
}
else {
    alert('Invalid input');
}

var int1 = +prompt("Enter first integer to be compared")
var int2 = +prompt("Enter second integer to be compared")
if (int1 > int2) {
    document.write(int1 + " is larger than " + int2 + "<br>")
}
else if (int1 < int2) {
    document.write(int2 + " is larger than " + int1 + "<br>")
}
else if (int1 == int2) {
    document.write(int1 + " is equal to " + int2 + "<br>")
}

var integer1 = +prompt("Enter an integer")
if (integer1 > 0) {
    document.write(int1 + " is larger than zero" + "<br>")
}
else if (integer1 < 0) {
    document.write(int2 + " is smaller than zero" + "<br>")
}
else if (integer1 == 0) {
    document.write(int1 + " is equal to zero" + "<br>")
}

var char = prompt("Enter any character")
if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
    document.write("It is a vowel" + "<br>")
}
else {
    document.write("It is not a vowel" + "<br>")
}

var corpass = pakistan
var guesspass = prompt("Enter your password" + "<br>")
if (corpass === guesspass) {
    document.write("Correct! The password you entered matches the original password" + "<br>")
}
else if (corpass !== guesspass) {
    document.write("Incorrect password" + "<br>")
}
else {
    document.write("Please enter your password" + "<br>")
}

var greeting, hour = 13
if (hour < 18) {
    greeting = "Good day"
}
else {
    greeting = "Good evening"
}

var time = prompt("Enter time in 2 hour format: ")
if (time >= 0000 && time < 1200) {
    document.write("Good Morning!" + "<br>")
}
else if (time >= 1200 && time < 1700) {
    document.write("Good Afternoon!" + "<br>")
}
else if (time >= 1700 && time < 2100) {
    document.write("Good Evening!" + "<br>")
}
else if (time >= 2100 && time < 2359) {
    document.write("Good Night!" + "<br>")
}

var students = []

var student = new Array()

var student = new Array("std1", "std2", "std3", "std4", "std5")

var numArray = [1, 2, 5, 6, 7, 8, 6, 7]

var boolArray = [true, false]

var mixedArray = [1, 'string1', true, 8, false, 'string 2']

var qual = ('Qualification:' + '<br>').bold()
document.write(qual + "<br>")
var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
var i;
for (i = 0; i < qualification.length; i++) {
    document.write((i + 1) + ') ' + qualification[i] + "<br>")
}

var names = ["Michael", "John", "Tony"]
var obtainedscores = [320, 230, 480]
var totalmarks1 = 500
var percentagearray
for (i = 0; i < 3; i++) {
    document.write("Score of " + names[i] + " is " + obtainedscores[i] + ". Percentage: " + (obtainedscores[i] / totalmarks1 * 100) + "%" + "<br>")
}

var color = ['Red', 'Green', 'Blue']
document.write(color + '<br>')
var a = prompt('What color do you want to add to the beginning?')
color.unshift(a);
document.write(color + '<br>')
var b = prompt('What color do you want to add to the end?')
color.push(b)
document.write(color + '<br>')
color.unshift('Pink', 'Orange');
document.write(color + '<br>')
color.shift(0);
document.write(color + '<br>')
color.pop()
document.write(color + '<br>')
var d = prompt('What color do you want to add?')
var e = prompt('Give the position of color: ')
var f = parseInt(e)
color.splice(f, 0, d)
document.write(color + '<br>')
var g = prompt('What color do you want to delete?')
var h = prompt('Give the position of color: ')
var i = parseInt(e)
color.slice(i, 0, g)
document.write(color + '<br>')

var std_score = [320, 230, 480, 120]
document.write('Scores of Students: ' + std_score + '<br>')
var sort_score = std_score.sort()
document.write('Ordered Scores of Students: ' + sort_score)

var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
document.write('Cities List: ' + '<br>' + cities + '<br>')
var sel_cities = cities.slice(1, 4)
document.write('Selected Cities: ' + '<br>' + sel_cities + '<br>')

var arr = ['This ', ' is ', ' my ', 'cat'];
document.write('Array: ' + '<br>' + arr + '<br>');
var join = arr.join(' ');
document.write('String: ' + '<br>' + join + '<br>');

var a = [];
var i;
for (i = 0; i < 4; i++) {
    a.push(prompt("Enter Devices:"));
}
for (i = 0; i < 4; i++) {
    document.write('Out: ' + '<br>' + a[i] + '<br>');
}

var a = [];
var i;
for (i = 0; i < 4; i++) {
    a.push(prompt("Enter Devices:"));
}
for (i = a.length - 1; i >= 0; i--) {
    document.write('Out: ' + '<br>' + a[i] + '<br>');
}

var temp = [];

var temp = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
var i;
var j;
for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
        document.write(temp[i][j]);
    }
    document.write('<br');
}

var i;
for (i = 1; i <= 10; i++) {
    document.write(i + '<br>')
}

var num = prompt('Enter a number to show its multiplication table: ');
var len = prompt('Enter length of multiplication table: ');
document.write('Multiplication table of ' + num + '<br>');
document.write('Lenth ' + len + '<br>' + '<br>');
var i;
for (i = 1; i <= len; i++) {
    document.write(num + 'X' + i + '=' + num * i + '<br>');
}

var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
var i;
for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + '<br>')
}
for (i = 0; i < fruits.length; i++) {
    document.write('Element at index ' + i + ' is ' + fruits[i] + '<br>')
}

var i;
document.write('Counting: ' + '<br>' + '<br>');
for (i = 1; i <= 15; i++) {
    document.write(i + ', ');
}

document.write('Reverse Counting: ' + '<br>' + '<br>');
for (i = 10; i >= 1; i--) {
    document.write(i + ', ');
}

document.write('Even: ' + '<br>' + '<br>');
for (i = 0; i <= 20; i + 2) {
    document.write(i + ', ');
}

document.write('Odd: ' + '<br>' + '<br>');
for (i = 1; i < 20; i + 2) {
    document.write(i + ', ');
}

document.write('Series:' + '<br>' + '<br>');
for (i = 2; i <= 20; i + 2) {
    document.write(i + 'k, ');
}

var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var b = prompt('Welcome to ABC Bakery. What do you want to order Sir/Ma' + "'" + 'am');
var i;
for (i = 0; i < a.length; i++) {
    if (a[i] === b) {
        document.write(b + 'availabe at index ' + i + ' of our bakery.');
        break;
    }
    else {
        document.write('We are Sorry. ' + b + ' is not available at our bakery.')
    }
}

var a = [24, 53, 78, 91, 12];
var i, j;
var f;
for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length; j++) {
        if (a[i] < a[j]) {
            f = a[j];
        }
    }
}
document.write('The Largest number is ' + f);

var a = [24, 53, 78, 91, 12];
var i, j;
var f;
for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length; j++) {
        if (a[i] > a[j]) {
            f = a[j];
        }
    }
}
document.write('The Smallest number is ' + f);
var i;
for (i = 1; i <= 20; i++) {
    document.write(5 * i + ', ');
}