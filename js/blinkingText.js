function Blinking() {
  var index = 0;
  const txtEle = document.getElementById("textElement");
  const colors = ["#313866", "#504099", "#974EC3", "#FE7BE5"];
  setInterval(() => {
    txtEle.style.color = colors[index];
    index = (index + 1) % colors.length;
    txtEle.style.visibility =
      txtEle.style.visibility === "hidden" ? "visible" : "hidden";
  }, 500);
}
Blinking();
