const currentTime = document.querySelector(".currentTime");
const currentDate = document.querySelector(".currentDate");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function updateClock() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  const timeResult = `${formattedHours}:${formattedMinutes}:${formattedSeconds} `;
  currentTime.textContent = timeResult;

  ///

  const day = time.getDay();
  const month = time.getMonth();
  const date = time.getDate();
  const year = time.getFullYear();
  const dateResult = `${days[day]}, ${months[month]}, ${date}, ${year}`;
  currentDate.textContent = dateResult;
}
setInterval(updateClock, 1000);
