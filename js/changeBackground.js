function changeBodyColor() {
  const body = document.getElementById("body");
  const colors = ["#313866", "#504099", "#974EC3", "#FE7BE5"];
  var index = 0;

  setInterval(() => {
    body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 2000);
}
changeBodyColor();
