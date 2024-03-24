function checkSpeed() {
    let speed = document.getElementById("speed").value;
    let demerit_points = 0;
    // cheking the conditions to print ok if speed is less than 70 // 
    if (speed < 70) {        
        document.getElementById("result").innerHTML = "Ok";
    }
     else {
        demerit_points = Math.floor((speed - 70) / 5);
        if (demerit_points > 12) {
            // printing licence suspended if more than 12 demerits 
            document.getElementById("result").innerHTML = "Licence suspended";
        } else {
            document.getElementById("result").innerHTML = "Points: " + demerit_points;
        }
    }
}