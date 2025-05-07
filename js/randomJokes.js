function changeJokes() {
  const listJokes = [
    "What did one snowman say to the other snowman? It smells like carrots over here!",
    "Why did Beethoven get rid of his chickens? All they ever said was, “Bach, Bach, Bach!",
    "What did 20 do when it was hungry? Twenty-eight.",
    "Why shouldn’t you fundraise for marathons? They just take the money and run.",
    "Why does it take pirates a long time to learn the alphabet? Because they can spend years at C!",
  ];
  const jokeEle = document.getElementById("jokes");
  var index = 0;

  setInterval(() => {
    jokeEle.textContent = listJokes[index];
    index = (index + 1) % listJokes.length;
  }, 2000);
}
changeJokes();
