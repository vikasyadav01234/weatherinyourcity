
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
