const apiKey = 'YOUR_API_KEY'; // <-- Встав сюди свій ключ
const lat = 46.97;
const lon = 32;

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const weatherDiv = document.getElementById('weather');
    const html = `
      <h2>Weather in Nikolaev</h2>
      <p>Longitude: ${lon}</p>
      <p>Latitude: ${lat}</p>
      <p>Date: ${new Date().toDateString()}</p>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Feels like: ${data.main.feels_like} °C</p>
      <p>Wind: ${data.wind.speed} m/s</p>
    `;
    weatherDiv.innerHTML = html;
  })
  .catch(error => {
    document.getElementById('weather').innerText = 'Не вдалося завантажити погоду.';
    console.error('Помилка:', error);
  });
