const advice = document.querySelector("#advice");
const adviceID = document.querySelector("#adviceID");

advice.innerHTML = "advice";

const randomNumber = Math.floor(Math.random() * 223);
const apiURL = `https://api.adviceslip.com/advice/${randomNumber}`;

const getAdvice = async () => {
  const res = await fetch(apiURL);
  const data = await res.json();

  //create random number

  console.log(data);
  advice.innerHTML = data.slip.advice;
  adviceID.innerHTML = data.slip.id;
};

getAdvice();
