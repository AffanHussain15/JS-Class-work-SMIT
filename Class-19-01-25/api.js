// const weather = document.getElementById("weather");
// const apiKey = "238b7afa7a1adbfcccbb4fa4a086858d";
// const loader = document.getElementById("loader");

// document.getElementById("search-btn").addEventListener("click", () => {
//   const city = document.getElementById("city").value;
//   if (city) {
//     weather(city);
//   } else {
//     alert("Please Enter a City Name!");
//   }
// });

// function weather() {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//   loader.classList.remove("hidden");
//   weather.innerHTML = "";

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       loader.classList.add("hidden");
//       displayWeather(data);
//     })
//     .catch((error) => {
//       loader.classList.add("hidden");
//       alert("Error weather data. Please try again");
//       console.error("Error:", error);
//     });
// }

// function display(data) {
//   if (data === 200) {
//     weather.innerHTML = `
//     <h2>${data.name},${data.sys.country}</h2>
//     <img src="" >
//     <P>Temperature: ${data.main.temp}°C</p>
//     <P>Weather: ${data.weather[0].main} (${data.weather[0].description})</p>
//     <P>Humidity: ${data.main.humidity}%</p>
//     <P>Wind Speed:</p>${data.wind.speed} m/s`;
//   } else {
//     weather.innerHTML = `<p>City not Found.Please try again!</p>`;
//   }
// }
// const fetchData = async () => {
//   const apiURL = `https://jsonplaceholder.typicode.com/posts`;
//   try {
//     const response = await fetch(apiURL).then((res) => res.json());
//     if (response) {
//         response.forEach((element) => {
//             console.log("elements", element);
//             const createHeading = document.createElement("h1");
//             const createPara = document.createElement("p");
//             const createPara2 = document.createElement("p");
//             createPara2.innerHTML = `UserID: ${element?.id}`;
//             createHeading.innerHTML = `Title: ${element?.id}:${element?.title}`;
//             createPara.innerHTML = `Description:  ${element?.body}`;
//             data.append(createPara2, createHeading, createPara);
//         });
//     }
// } catch (err) {
//     console.log("Error occur in post api", err);
// }
// };

// fetchData();
const data = document.getElementById("data");

const fetchData = async () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;

}
if(response){
  response.forEach((element) => {
console.log("Elements",element);        
  });
}


// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Contact-Type": "application/json",
//     userId: 1,
//   },
//   body: JSON.stringify({
//     title: "New Post",
//     body: "This is a new post content",
//     userId: 1,
//   }),
// })
// .then((data) => {
//   console.table(data);
//   console.log(data.body);
// })
//     .catch((error) => {
//       console.error("Error", error);
//     });
//     // };
//     // const fetchData = async () => {

//   // fetchData()
  
//   data.innerHTML = `
//   <h2> ${title} </h2>`