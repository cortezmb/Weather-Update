// (() => {

//     findCity(() => {

//         for (var i = 0; i < data.length; i++){
//             let cityName = document.getElementById('city');
//             if (data[i].city == cityName){
//                 var data = data[i].temp;
//                 return data;
//             }
//         }
//     })
    
//     tempCalcs(() => {
        
//         let kelvin = data.main.temp;
//         let degC = kelvin - 273.15;
//         let degCInt = Math.floor(kelvin - 273.15);
//         var degF = Math.floor(degC * 1.8 + 32);
//     })
    
//     displayTemp(() => {
    
//         let temp = document.querySelector('div')
//         temp.textContent = `The temperature in ${cityName} is currently ${degF} F.`;
//     })
    
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=01b026729a276bedaf758b89de9784d4')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // findcity();
        // tempCalcs();
        // displayTemp();    
    })
    .catch((error)=> {
        console.log(error);
    })
    
// })


