const apiKey = "70d339c1ad416bcadb0c44dc46366068";
const fullUrl = apiUrl + "London&appid=70d339c1ad416bcadb0c44dc46366068, Colombo&appid=70d339c1ad416bcadb0c44dc46366068";

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  const weatherBox = document.getElementById("weatherBox");
  const error = document.getElementById("error");

  if (!city) {
    error.textContent = "Please enter a city name.";
    weatherBox.classList.add("hidden");
    return;
  }

  fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`)
    .then((response) => {
      if (!response.ok) throw new Error("Sorry, City not found!");
      return response.json();
    })
    .then((data) => {
      document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById("temp").textContent = `🌡 Temperature: ${data.main.temp} °C`;
      document.getElementById("description").textContent = `🌤 ${data.weather[0].description}`;
      document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("weatherIcon").alt = data.weather[0].description;

      weatherBox.classList.remove("hidden");
      error.textContent = "";
    })
    .catch((err) => {
      error.textContent = err.message;
      weatherBox.classList.add("hidden");
    });
});
s
