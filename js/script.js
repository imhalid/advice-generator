const advice = document.querySelector("#advice");
const adviceID = document.querySelector("#adviceID");
const button = document.querySelector("#generate");

const getAdvice = async () => {
  const randomNumber = Math.floor(Math.random() * 223);

  const apiURL = `https://api.adviceslip.com/advice/${randomNumber}`;

  const res = await fetch(apiURL);
  const data = await res.json();
  advice.innerHTML = data.slip.advice;
  adviceID.innerHTML = data.slip.id;
};

button.addEventListener("click", function (e) {
  getAdvice();
});

getAdvice();
