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
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

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