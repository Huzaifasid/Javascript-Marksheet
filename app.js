// ------- alerts ------

// var name = "huzaifa";
// alert(name);

// var firstName = "Huzaifa";
// var lastName = "Siddiqui";

// alert(firstName + lastName );


// ------operators------
// Familiar operators------



// var num1 = 105;
// var num2 = 305;

// var add = num1 + num2;
// var add = num1 - num2;
// var add = num1 / num2;
// var add = num1 * num2;
// var add = num1 % num2;

// alert(add);

// var num = 2*5+10+3;
// alert(num)


// -----------print------

// var name = "Huzaifa Siddiqui";
// document.write(name);


// ------Unfamiliar operators--


// var value = 20;
// var updatedValue = value++; //post increament
// var updatedValue = ++value; //pre increament
// var vaLue = value;

// alert(vaLue)

// var value = 19;
// var updatedValue = value--; //post increament
// var updatedValue = --value; //pre increament
// var vaLue = value;

// alert(vaLue)


// var a = 10;
// var result = a++ + a - --a + ++a + a++;
// alert(result);








// ----Assignment----
document.write("Student Marksheet:<br><br>")
var name = prompt("Enter Your Full Name");
var schoolName = prompt("Enter Your School Name");
var english = prompt("Enter Your English Marks");
var urdu = prompt("Enter Your Urdu Marks");
var isl = prompt("Enter Your Islamiat Marks");
var math = prompt("Enter Your Mathematics Marks");
var science = prompt("Enter Your Science Marks");
var sum = parseInt(english) + parseInt(urdu) + parseInt(isl) + parseInt(math) + parseInt(science);
var obtainedMarks = sum;

var totalMArks = 500;
var per = (obtainedMarks / totalMArks) * 100;

document.write("Name: " + name);
document.write("<br>School Name: " + schoolName);
document.write("<br>English: " + english);
document.write("<br>Urdu: " + urdu);
document.write("<br>Islamiat: " + isl);
document.write("<br>Mathematics: " + math);
document.write("<br>Science: " + science);
document.write("<br>Obtained Marks: " + obtainedMarks);
document.write("<br>Total Marks: " + totalMArks);
document.write("<br>Percentage: " + per);
