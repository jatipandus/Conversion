
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

}

function Mass(){
    if(document.getElementById("mass1").value === '1' && document.getElementById("mass2").value === '2'){
        var massKilogram = document.getElementById("inputMass1").value;
        var massGram = (parseInt(massKilogram) * (1000));
        document.getElementById("inputMass2").value = massGram;
    }
    if(document.getElementById("mass1").value === '2' && document.getElementById("mass2").value === '1'){
        var massGram = document.getElementById("inputMass1").value;
        var massKilogram = (parseInt(massGram) / (1000));
        document.getElementById("inputMass2").value = massKilogram;
    }
    if(document.getElementById("mass1").value === '1' && document.getElementById("mass2").value === '3'){
        var massKilogram = document.getElementById("inputMass1").value;
        var massPound = (parseInt(massKilogram) * (2.205));
        document.getElementById("inputMass2").value = massPound;
    }
}