function generateRandomWords() {
  fetch("https://random-words-api.vercel.app/word/adjective")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("adjective").innerHTML = data[0].word;
    });
  fetch("https://random-words-api.vercel.app/word/noun")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("noun").innerHTML = data[0].word;
    });
  fetch("https://random-words-api.vercel.app/word/noun")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("noun2").innerHTML = data[0].word;
    });
}
