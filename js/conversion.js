
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

function length(){
    if(document.getElementById("length1").value === '1' && document.getElementById("length2").value === '2'){
        var lengthKM = document.getElementById("inputLength1").value;
        var lengthM = (parseInt(lengthKM) * (1000));
        document.getElementById("inputLength2").value = lengthM;
    }
    if(document.getElementById("length1").value === '2' && document.getElementById("length2").value === '1'){
        var lengthM = document.getElementById("inputLength1").value;
        var lengthKM = (parseInt(lengthM) / (1000));
        document.getElementById("inputLength2").value = lengthKM;
    }
    if(document.getElementById("length1").value === '1' && document.getElementById("length2").value === '1'){
        var lengthM = document.getElementById("inputLength1").value;
        document.getElementById("inputLength2").value = lengthM;
    }
    if(document.getElementById("length1").value === '2' && document.getElementById("length2").value === '2'){
        var lengthM = document.getElementById("inputLength1").value;
        document.getElementById("inputLength2").value = lengthM;
    }
    if(document.getElementById("length1").value === '1' && document.getElementById("length2").value === '3'){
        var lengthKM = document.getElementById("inputLength1").value;
        var lengthCM = (parseInt(lengthKM) * (100000));
        document.getElementById("inputLength2").value = lengthCM;
    }
    if(document.getElementById("length1").value === '3' && document.getElementById("length2").value === '1'){
        var lengthCM = document.getElementById("inputLength1").value;
        var lengthKM = (parseInt(lengthCM) / (100000));
        document.getElementById("inputLength2").value = lengthKM;
    }
    if(document.getElementById("length1").value === '2' && document.getElementById("length2").value === '3'){
        var lengthM = document.getElementById("inputLength1").value;
        var lengthCM = (parseInt(lengthM) * (100));
        document.getElementById("inputLength2").value = lengthCM;
    }
    if(document.getElementById("length1").value === '3' && document.getElementById("length2").value === '2'){
        var lengthCM = document.getElementById("inputLength1").value;
        var lengthM = (parseInt(lengthCM) / (100));
        document.getElementById("inputLength2").value = lengthM;
    }
    if(document.getElementById("length1").value === '3' && document.getElementById("length2").value === '3'){
        var lengthCM = document.getElementById("inputLength1").value;
        document.getElementById("inputLength2").value = lengthCM;
    }
    if(document.getElementById("length1").value === '1' && document.getElementById("length2").value === '4'){
        var lengthKM = document.getElementById("inputLength1").value;
        var lengthI = (parseInt(lengthKM) * (39370));
        document.getElementById("inputLength2").value = lengthI;
    }
    if(document.getElementById("length1").value === '4' && document.getElementById("length2").value === '1'){
        var lengthM = document.getElementById("inputLength1").value;
        var lengthI = (parseInt(lengthM) / (39370));
        document.getElementById("inputLength2").value = lengthI;
    }
    if(document.getElementById("length1").value === '2' && document.getElementById("length2").value === '4'){
        var lengthM = document.getElementById("inputLength1").value;
        var lengthI = (parseInt(lengthM) * (39.37));
        document.getElementById("inputLength2").value = lengthI;
    }
    if(document.getElementById("length1").value === '4' && document.getElementById("length2").value === '2'){
        var lengthM = document.getElementById("inputLength1").value;
        var lengthI = (parseInt(lengthM) / (39.37));
        document.getElementById("inputLength2").value = lengthI;
    }
    if(document.getElementById("length1").value === '4' && document.getElementById("length2").value === '3'){
        var lengthCM = document.getElementById("inputLength1").value;
        var lengthI = (parseInt(lengthCM) / (2.54));
        document.getElementById("inputLength2").value = lengthI;
    }
    if(document.getElementById("length1").value === '3' && document.getElementById("length2").value === '4'){
        var lengthCM = document.getElementById("inputLength1").value;
        var lengthI = (parseInt(lengthCM) * (2.54));
        document.getElementById("inputLength2").value = lengthI;
    }
    if(document.getElementById("length1").value === '4' && document.getElementById("length2").value === '4'){
        var lengthI = document.getElementById("inputLength1").value;
        document.getElementById("inputLength2").value = lengthI;
    }
    if(document.getElementById("length1").value === '1' && document.getElementById("length2").value === '5'){
        var lengthKM = document.getElementById("inputLength1").value;
        var lengthMi = (parseInt(lengthKM) / (1.609));
        document.getElementById("inputLength2").value = lengthMi;
    }
    if(document.getElementById("length1").value === '5' && document.getElementById("length2").value === '1'){
        var lengthMi = document.getElementById("inputLength1").value;
        var lengthKM = (parseInt(lengthMi) * (1.609));
        document.getElementById("inputLength2").value = lengthKM;
    }

}