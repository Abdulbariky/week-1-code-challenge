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






}
