const hackerBtn = document.querySelector("#hackerBtn"); //# means id, . means class
const main = document.querySelector("main");
const hackerCat = document.querySelector("#hackerCat");
//console.log(hackerBtn);

console.log(main);

const hackerMode = () => {
  console.log("hacker mode enabled!")
  main.style.background = "black"; 
  main.style.color = "chartreuse"; //color between green and yellow for text
  hackerCat.setAttribute("src","https://media.giphy.com/media/wwg1suUiTbCY8H8vIA/giphy.gif")
}

hackerBtn.addEventListener("click", hackerMode);

//----------------Part 2 ----------------- (JSON means Javscript Object Notation)
const jokeBtn = document.querySelector("#jokeBtn");
const setup = document.querySelector("#setup"); //grabbed from HTML line 29
const punchline = document.querySelector("#punchline"); //grabbed from HTML line 30

const displayJoke = async () => {
  console.log("Displaying a joke");

  const jokeUrl = "https://official-joke-api.appspot.com/jokes/random";

  const response = await fetch(jokeUrl);
  const decodedResponse = await response.json();
  const setupText = decodedResponse.setup;
  const punchlineText = decodedResponse.punchline;

  setup.innerText = (setupText);
  punchline.innerText = (punchlineText);
  //Try Catch can help catch an error if website is down
}

jokeBtn.addEventListener("click", displayJoke);
