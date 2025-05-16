# Weather In Your City 🌤️

A modern, responsive weather application that allows users to check weather conditions for their current location or any city worldwide. Built with HTML, CSS, and JavaScript, this application provides real-time weather data using the OpenWeather API.

![Weather App Screenshot](Images/favicon.ico)

## Features

- **Current Location Weather**: Get instant weather updates for your current location
- **City Search**: Search for weather information in any city worldwide
- **Detailed Weather Information**: View comprehensive weather data including:
  - Temperature in Celsius
  - Wind Speed
  - Humidity Percentage
  - Cloud Coverage
- **Visual Indicators**: 
  - Weather condition icons
  - Country flags
  - Loading animations
- **Responsive Design**: Works seamlessly on both desktop and mobile devices

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeather API
- Flag API for country flags
- Google Fonts (Merriweather Sans)

## How to Use

1. **Your Weather Tab**:
   - Click on "Your Weather" tab
   - Grant location access when prompted
   - View detailed weather information for your current location

2. **Search Weather Tab**:
   - Click on "Search Weather" tab
   - Enter a city name in the search box
   - Click the search button or press Enter
   - View weather details for the searched city

## API Keys Required

This project uses the OpenWeather API. You'll need to:
1. Sign up at [OpenWeather](https://openweathermap.org/)
2. Get your API key
3. Replace the API_KEY constant in `vikas.js` with your key

## Features in Detail

- **Location Access**: Uses browser's Geolocation API to fetch current coordinates
- **Real-time Data**: Fetches current weather conditions from OpenWeather API
- **Dynamic UI**: Smooth transitions between different views (loading, weather info, search)
- **Error Handling**: Graceful handling of API errors and invalid searches
- **Responsive Design**: Media queries ensure proper display across all device sizes

## Setup and Installation

1. Clone the repository
2. Replace the API key in `vikas.js` with your OpenWeather API key
3. Open `index.html` in a web browser
4. Grant location access for local weather information

## Project Structure

```
weatherinyourcity/
├── index.html
├── style.css
├── vikas.js
└── Images/
    ├── cloud.png
    ├── favicon.ico
    ├── humidity.png
    ├── loading.gif
    ├── location.png
    ├── not-found.png
    ├── search.png
    └── wind.png
```

## Contributing

Feel free to fork this project and make improvements. Pull requests are welcome!

## License

This project is open source and available under the MIT License.

## Acknowledgments

- OpenWeather API for weather data
- Flag API for country flags
- Google Fonts for typography
