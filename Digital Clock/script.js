function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let currentDay = now.toLocaleDateString(undefined, { weekday: "long" });

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  year = year < 10 ? "0" + year : year;
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  today = `Today is ${currentDay}`;

  const options = { month: "long" };
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  const monthElement = document.getElementById("month");
  const yearsElement = document.getElementById("year");
  const dayElement = document.getElementById("day");
  const currentDate = document.getElementById("currentDay");

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
  monthElement.textContent = month;
  yearsElement.textContent = year;
  dayElement.textContent = day;
  currentDate.textContent = today;
}
setInterval(updateClock, 1000);
