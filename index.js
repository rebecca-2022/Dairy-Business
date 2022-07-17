

    function dairyProduction() {
        const inputA = parseInt(document.getElementById("valueShedA").value);
        document.getElementById("resultShedA").innerHTML = "Your production in Shed A is " + inputA + " litres per day ";
        
        const inputB = parseInt(document.getElementById("valueShedB").value);
        document.getElementById("resultShedB").innerHTML = "Your production in Shed B is " + inputB + " litres per day ";
        
        const inputC = parseInt(document.getElementById("valueShedC").value);
        document.getElementById("resultShedC").innerHTML = "Your production in Shed C is  " + inputC + " litres per day ";
        
        const inputD = parseInt(document.getElementById("valueShedD").value);
        document.getElementById("resultShedC").innerHTML = "Your production in Shed D is " + inputD + " litres per day ";
        
        var totalProduction = parseInt(inputA + inputB + inputC + inputD);
        document.getElementById("totalShed").innerHTML = "Your production in all Sheds is " + totalProduction + " litres per day ";
        
        var weeklyIncome = totalProduction * 45 * 7;
        document.getElementById("weeklyIncome").innerHTML = "Your weekly income is  " + weeklyIncome;
    
        var yearlyIncome = totalProduction * 45 * 366;
        document.getElementById("yearlyIncome").innerHTML = "Your yearly income is " + yearlyIncome;
        
        var jan = totalProduction * 45 * 31;
        document.getElementById("jan").innerHTML = "Your January income is " + jan;
    
        var feb = totalProduction * 45 * 29;
        document.getElementById("feb").innerHTML = "Your February income is " + feb;
    
        var mar = totalProduction * 45 * 31;
        document.getElementById("mar").innerHTML = "Your March income is " + mar;
    
        var apr = totalProduction * 45 * 30;
        document.getElementById("apr").innerHTML = "Your April income is " + apr;
    
        var may = totalProduction * 45 * 31;
        document.getElementById("may").innerHTML = "Your May income is " + may;
    
        var jun = totalProduction * 45 * 30;
        document.getElementById("jun").innerHTML = "Your June income is " + jun;
    
        var jul = totalProduction * 45 * 31;
        document.getElementById("jul").innerHTML = "Your July income is " + jul;
    
        var aug = totalProduction * 45 * 31;
        document.getElementById("aug").innerHTML = "Your August income is " + aug;
    
        var sep = totalProduction * 45 * 30;
        document.getElementById("sep").innerHTML = "Your September income is " + sep;
    
        var oct = totalProduction * 45 * 31;
        document.getElementById("oct").innerHTML = "Your October income is " + oct;
    
        var nov = totalProduction * 45 * 30;
        document.getElementById("nov").innerHTML = "Your November income is " + nov;
    
        var dec = totalProduction * 45 * 31;
        document.getElementById("dec").innerHTML = "Your Dec income is " + dec;
    
    }
    
    submitbutton.addEventListener("click", dairyProduction);