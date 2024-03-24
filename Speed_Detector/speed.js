function checkSpeed() {
    let speed = document.getElementById("speed").value;
    let demerit_points = 0;
    if (speed < 70) {        
        document.getElementById("result").innerHTML = "Ok";
    }
     else {
        demerit_points = Math.floor((speed - 70) / 5);
        if (demerit_points > 12) {
            document.getElementById("result").innerHTML = "Licence suspended";
        } else {
            document.getElementById("result").innerHTML = "Points: " + demerit_points;
        }
    }
}