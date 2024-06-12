const apiKey = 'ec622fd6f62877399b0a220530f2ecbb';
const city = 'London'; // Replace with the city you want to get weather data for

// Construct the API URL
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// Make the API request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the JSON response
    console.log('Weather data:', data);
    // Now you can use the data returned by the API
  })
  .catch(error => {
    console.error('There was a problem with the API request:', error);
  });
