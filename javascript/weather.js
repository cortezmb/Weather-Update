(() => {

    findCity(() => {

        for (var i = 0; i < data.length; i++){
            let cityName = document.getElementById('city');
            if (data[i].city == cityName){
                let data = data[i].temp_kf
                return data;
            }
        }
    })
    
    tempCalcs(() => {
        
        let kelvin = data.main.temp;
        let degC = kelvin - 273.15;
        let degCInt = Math.floor(kelvin - 273.15);
        let degF = Math.floor(degC * 1.8 + 32);
    })
    
    displayTemp(() => {
    
        let temp = document.querySelector('div')
        temp.innerHTML = `The temperature in ${cityName} is currently ${degF} F.`;
    })
    
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=01b026729a276bedaf758b89de9784d4')
    .then(response => response.json())
    .then(data => {
    
        findcity();
        tempCalcs();
        displayTemp();    
    })
    
})


