/*
function getLocation() {
    if(navigator.geolocation){
        console.log(navigator.geolocation.getCurrentPosition(showPosition));
    }
    else {
        console.log("No geo Location support");
    }
}
getLocation()

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}
showPosition();
*/
const API_KEY = "21e3ee69c4a50cf1887704867cd6d709";
async function showweather(){
    let lat = 26.9261;
    let long = 75.7463;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`);
    const data = await response.json();
    console.log("Weather Data:->"+ data);

    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} C`

    document.body.appendChild(newPara);
}