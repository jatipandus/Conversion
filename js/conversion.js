
function myFunction(){ 
    if(document.getElementById("temperature1").value === '1' && document.getElementById("temperature2").value === '2'){
        var tempcelcius = document.getElementById("inputTemperature1").value;
        var tempfahrenheit = (tempcelcius * (9 / 5 )) + 32;
        document.getElementById("inputTemperature2").value = tempfahrenheit;
    }
}
