const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//initially variables need ??

let currentTab = userTab;
const API_KEY = "21e3ee69c4a50cf1887704867cd6d709";
currentTab.classList.add("current-tab");
//switch function

function switchTab(clickedTab){
    //kya search from wala container is inviseble if yes then make it visible
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            //main phele search walatab per tha or ab your tab ko visible karna hai
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab main your weather tab main aa gya hu,tho weather bhi display karna padega ,so lets check local 
            // first for cordinates if we haved saved them there
            getfromSessionStorge();
        }

    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input parameter
    console.log("Clicked on usertab");
    switchTab(userTab);
});

searchTab.addEventListener("click", () =>{
    //pass clicked tab as input parameter
    console.log("Clicked on search Tab")
    switchTab(searchTab);
});
//check if cordinatis are alredy present in session storage
function getfromSessionStorge(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        //ager local cordinates nhi mile tho
        grantAccessContainer.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates)
        fechUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(cordinates){
    const {lat, lon} = coordinates;
    //make grantcontainer invisible
    grantAccessContainer.classList.add("active");
    //make local visible
    loadingScreen.classList.add("active");

    //API CAll
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`);
        const data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err){
        console.log("Error");
        loadingScreen.classList.remove("active");
    }
}

function renderWeatherInfo(weatherInfo) {
    //fistly , we have to fetch the element

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    //fetch values from weather Info object and put it UI elements

    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
}