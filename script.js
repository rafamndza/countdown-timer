let daysE = document.getElementById("days"),
  hoursE = document.getElementById("hours"),
  minutesE = document.getElementById("minutes"),
  secondsE = document.getElementById("seconds");

function timeLeftCalculation() {
  const newYearsDate = new Date("1 Jan 2024");
  const currentDate = new Date();
  let timeInSeconds = (newYearsDate - currentDate + 1000) / 1000,
    secondsLeft = ("0" + Math.floor(timeInSeconds % 60)).slice(-2),
    minutesLeft = ("0" + Math.floor((timeInSeconds / 60) % 60)).slice(-2),
    hoursLeft = ("0" + Math.floor((timeInSeconds / 3600) % 24)).slice(-2),
    daysLeft = Math.floor(timeInSeconds / (3600 * 24));

  return {
    timeInSeconds,
    secondsLeft,
    minutesLeft,
    hoursLeft,
    daysLeft,
  };
}

function countdown() {
  let timeInterval = setInterval(() => {
    let t = timeLeftCalculation();

    daysE.innerHTML = `${t.daysLeft}`;
    hoursE.innerHTML = `${t.hoursLeft}`;
    minutesE.innerHTML = `${t.minutesLeft}`;
    secondsE.innerHTML = `${t.secondsLeft}`;

    if (t.timeInSeconds <= 1) {
      clearInterval(timeInterval);
    }
    console.log("ejecutada");
  }, 1000);
}

countdown();
