function calcBMI(){
    let heightValue = document.querySelector('.height').value;
    let weightValue = document.querySelector('.weight').value;
    let result = document.getElementById('result');
    let calbtn = document.getElementById('calcBtn');

    

    let BMI = weightValue / (heightValue / 100 * heightValue / 100);
    let total = BMI.toFixed(2);

    result.innerHTML = (total) + "kg²";

    if(heightValue === ""){
        result.innerHTML = "Null";
    }
    if(total <= 18){
        result.style.color = "rgb(81, 180, 0)";
    }
    if(total >= 18 && total <= 25){
        result.style.color = "rgb(0,129,55)";
    }
    if(total >= 25 && total <= 30){
        result.style.color = "rgb(239,155,15)";
    }
    if(total >= 30 && total <= 35){
        result.style.color = "rgb(211,136,136)";
    }
    if(total >= 35 && total <= 40){
        result.style.color = "rgb(188,32,32)";
    }
    if(total >= 40){
        result.style.color = "rgb(138,1,1)";
    }

    
    calbtn.style.transform = "scale(0.95)";
    return false;
}