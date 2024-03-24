let button = document.querySelector(".button")
let result = document.querySelector(".result");
let grade = document.querySelector(".grade")
function check() {
    // Get the values of the HTML elements with the IDs php, java, flutter, laravel. 
    let php = document.querySelector("#php").value;
    let java = document.querySelector("#java").value;
    let flutter = document.querySelector("#flutter").value;
    let laravel = document.querySelector("#laravel").value;    
    let totalMarks = document.querySelector('.total_marks');
    let percentage = document.querySelector('.Percentage')
    let sum = parseFloat(php) + parseFloat(java) + parseFloat(flutter) + parseFloat(laravel);
    let average = (sum / 400) * 100;

     // Check if any of the input values are empty or out of range
     if (php === '' || java === '' || flutter === '' || laravel === '' ||
     php < 0 || php > 100 || java < 0 || java > 100 || flutter < 0 || flutter > 100 ||
     laravel < 0 || laravel > 100) {
     // If it is, display a message in the result element
     grade.innerHTML = `<p>Please Enter A Valid Value Between 0 and 100</p>`
     totalMarks.innerHTML = ``
     percentage.innerHTML = ``

 } 
  // checks for other condition
  else {
    if (average > 79 && average <= 100) {
        grade.innerHTML = `Grade: A`
    } else if (average > 60 && average <= 79) {
        grade.innerHTML = `Grade: B`
    } else if (average > 49 && average <= 60) {
        grade.innerHTML = `Grade: C`
    } else if (average > 40 && average <= 49) {
        grade.innerHTML = `Grade: D`
    } else {
        grade.innerHTML = `Grade: E`
    }
    totalMarks.innerHTML = `Total Marks : ${sum} out of 400`
    percentage.innerHTML = `Percentage : ${Math.round(average)}%`
}











}
