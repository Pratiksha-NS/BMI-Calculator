function calc(){
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let ans = (weight/((height*height)/10000)).toFixed(2);

    document.getElementById("ans").value = ans;


    if (ans < 18.6) {
        result.innerHTML = "Your BMI falls within the underweight range";
    }

   else if (ans >= 18.6 && ans < 24.9) {
    result.innerHTML =  "Your BMI falls within the normal or healthy weight range";
   }

   else if (ans >= 25 && ans < 29.9) {
    result.innerHTML =  "Your BMI falls within the overweight range";
   }

   else {
    result.innerHTML = "Your BMI falls within the obese range";
   }

}


