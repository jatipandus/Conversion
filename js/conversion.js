
function myFunction(){ 
    if(document.getElementById("temperature1").value === '1' && document.getElementById("temperature2").value === '2'){
        var tempcelcius = document.getElementById("inputTemperature1").value;
        var tempfahrenheit = (parseInt(tempcelcius) * (9 / 5 )) + 32;
        document.getElementById("inputTemperature2").value = tempfahrenheit;
    }
     
    if(document.getElementById("temperature1").value === '1' && document.getElementById("temperature2").value === '3'){
        var tempcelcius = document.getElementById("inputTemperature1").value;
        var tempkelvin = parseInt(tempcelcius) + 273.15;
        document.getElementById("inputTemperature2").value = tempkelvin;
    }

    if(document.getElementById("temperature1").value === '1' && document.getElementById("temperature2").value === '4'){
        var tempcelcius = document.getElementById("inputTemperature1").value;
        var tempreamur = 4/5 * parseInt(tempcelcius);
        document.getElementById("inputTemperature2").value = tempreamur;
    }
    
    if(document.getElementById("temperature1").value === '2' && document.getElementById("temperature2").value === '1'){
        var tempfahrenheit = document.getElementById("inputTemperature1").value;
        var tempcelcius = 5/9 * (parseInt(tempfahrenheit) - 32);
        document.getElementById("inputTemperature2").value = tempcelcius;
    }
    
    if(document.getElementById("temperature1").value === '2' && document.getElementById("temperature2").value === '3'){
        var tempfahrenheit = document.getElementById("inputTemperature1").value;
        var tempkelvin = 5/9 * (parseInt(tempfahrenheit) - 32) + 273;
        document.getElementById("inputTemperature2").value = tempkelvin;
    }
    
    if(document.getElementById("temperature1").value === '2' && document.getElementById("temperature2").value === '4'){
        var tempfahrenheit = document.getElementById("inputTemperature1").value;
        var tempreamur = 4/9 * (parseInt(tempfahrenheit) - 32);
        document.getElementById("inputTemperature2").value = tempreamur;
    }
    
    if(document.getElementById("temperature1").value === '3' && document.getElementById("temperature2").value === '1'){
        var tempcelcius = document.getElementById("inputTemperature1").value;
        var tempkelvin = 273 + parseInt(tempcelcius);
        document.getElementById("inputTemperature2").value = tempkelvin;
    }

    if(document.getElementById("temperature1").value === '3' && document.getElementById("temperature2").value === '2'){
        var tempkelvin = document.getElementById("inputTemperature1").value;
        var tempfahrenheit = 9/5 * (parseInt(tempkelvin) - 273) + 32;
        document.getElementById("inputTemperature2").value = tempfahrenheit;
    }

    if(document.getElementById("temperature1").value === '3' && document.getElementById("temperature2").value === '4'){
        var tempkelvin = document.getElementById("inputTemperature1").value;
        var tempreamur = 4/5 * (parseInt(tempkelvin) - 273);
        document.getElementById("inputTemperature2").value = tempreamur;
    }
    
    if(document.getElementById("temperature1").value === '4' && document.getElementById("temperature2").value === '1'){
        var tempcelcius = document.getElementById("inputTemperature1").value;
        var tempreamur = 4/5 * parseInt(tempcelcius);
        document.getElementById("inputTemperature2").value = tempreamur;
    }

    if(document.getElementById("temperature1").value === '4' && document.getElementById("temperature2").value === '2'){
        var tempfahrenheit = document.getElementById("inputTemperature1").value;
        var tempreamur = 4/9 * (parseInt(tempfahrenheit) - 32);
        document.getElementById("inputTemperature2").value = tempreamur;
    }

    if(document.getElementById("temperature1").value === '4' && document.getElementById("temperature2").value === '3'){
        var tempkelvin = document.getElementById("inputTemperature1").value;
        var tempreamur = 4/5 * (parseInt(tempkelvin) - 273);
        document.getElementById("inputTemperature2").value = tempreamur;
    }

    if(document.getElementById("temperature1").value === '1' && document.getElementById("temperature2").value === '1'){
        document.getElementById("inputTemperature1").value = document.getElementById("inputTemperature2").value;        
        document.getElementById("inputTemperature2").value = document.getElementById("inputTemperature1").value;        
    }

    if(document.getElementById("temperature1").value === '2' && document.getElementById("temperature2").value === '2'){
        document.getElementById("inputTemperature1").value = document.getElementById("inputTemperature2").value;        
        document.getElementById("inputTemperature2").value = document.getElementById("inputTemperature1").value;        
    }

    if(document.getElementById("temperature1").value === '3' && document.getElementById("temperature2").value === '3'){
        document.getElementById("inputTemperature1").value = document.getElementById("inputTemperature2").value;        
        document.getElementById("inputTemperature2").value = document.getElementById("inputTemperature1").value;        
    }
    
    if(document.getElementById("temperature1").value === '4' && document.getElementById("temperature2").value === '4'){
        document.getElementById("inputTemperature1").value = document.getElementById("inputTemperature2").value;        
        document.getElementById("inputTemperature2").value = document.getElementById("inputTemperature1").value;        
    }

}

function myFunctionLength(){
    if(document.getElementById("length1").value === '1' && document.getElementById("length2").value === '2'){
        var KM = document.getElementById("inputlength1").value;
        var M = 1000 * parseInt(KM);
        document.getElementById("inputlength2").value = M;
    }

    if(document.getElementById("length1").value === '1' && document.getElementById("length2").value === '3'){
        var KM = document.getElementById("inputlength1").value;
        var CM = 100000 * parseInt(KM);
        document.getElementById("inputlength2").value = CM;
    }

    if(document.getElementById("length1").value === '1' && document.getElementById("length2").value === '4'){
        var KM = document.getElementById("inputlength1").value;
        var MM = 1000000 * parseInt(KM);
        document.getElementById("inputlength2").value = MM;
    }
    
    if(document.getElementById("length1").value === '2' && document.getElementById("length2").value === '1'){
        var M = document.getElementById("inputlength1").value;
        var KM = parseInt(M) / 1000;
        document.getElementById("inputlength2").value = KM;
    }
    
    if(document.getElementById("length1").value === '2' && document.getElementById("length2").value === '3'){
        var M = document.getElementById("inputlength1").value;
        var CM = parseInt(M) * 100;
        document.getElementById("inputlength2").value = CM;
    }
    
    if(document.getElementById("length1").value === '2' && document.getElementById("length2").value === '4'){
        var M = document.getElementById("inputlength1").value;
        var MM = parseInt(M) * 1000;
        document.getElementById("inputlength2").value = MM;
    }
    
    if(document.getElementById("length1").value === '3' && document.getElementById("length2").value === '1'){
        var CM = document.getElementById("inputlength1").value;
        var KM = parseInt(CM) / 100000;
        document.getElementById("inputlength2").value = KM;
    }

    if(document.getElementById("length1").value === '3' && document.getElementById("length2").value === '2'){
        var CM = document.getElementById("inputlength1").value;
        var M = parseInt(CM) / 100;
        document.getElementById("inputlength2").value = M;
    }

    if(document.getElementById("length1").value === '3' && document.getElementById("length2").value === '4'){
        var CM = document.getElementById("inputlength1").value;
        var MM = parseInt(CM) * 10;
        document.getElementById("inputlength2").value = MM;
    }

    if(document.getElementById("length1").value === '4' && document.getElementById("length2").value === '1'){
        var MM = document.getElementById("inputlength1").value;
        var KM = parseInt(MM) / 1000000;
        document.getElementById("inputlength2").value = KM;
    }

    if(document.getElementById("length1").value === '4' && document.getElementById("length2").value === '2'){
        var MM = document.getElementById("inputlength1").value;
        var M = parseInt(MM) / 1000;
        document.getElementById("inputlength2").value = M;
    }

    if(document.getElementById("length1").value === '4' && document.getElementById("length2").value === '3'){
        var MM = document.getElementById("inputlength1").value;
        var CM = parseInt(MM) / 10;
        document.getElementById("inputlength2").value = CM;
    }

    if(document.getElementById("length1").value === '1' && document.getElementById("length2").value === '1'){
        document.getElementById("inputlength1").value = document.getElementById("inputlength2").value;
        document.getElementById("inputlength2").value = document.getElementById("inputlength1").value;
    }

    if(document.getElementById("length1").value === '2' && document.getElementById("length2").value === '2'){
        document.getElementById("inputlength1").value = document.getElementById("inputlength2").value;
        document.getElementById("inputlength2").value = document.getElementById("inputlength1").value;
    }

    if(document.getElementById("length1").value === '3' && document.getElementById("length2").value === '3'){
        document.getElementById("inputlength1").value = document.getElementById("inputlength2").value;
        document.getElementById("inputlength2").value = document.getElementById("inputlength1").value;
    }

    if(document.getElementById("length1").value === '4' && document.getElementById("length2").value === '4'){
        document.getElementById("inputlength1").value = document.getElementById("inputlength2").value;
        document.getElementById("inputlength2").value = document.getElementById("inputlength1").value;
    }
}


