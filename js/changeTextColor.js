function changeTextColor() {
  const textEle = document.getElementById("textElement");
  //   const body = document.getElementById("body");
  //   const colors = ["#313866", "#504099", "#974EC3", "#FE7BE5"];
  const fontSizes = ["30px", "44px", "56px", "68px", "80px"];
  var index = 0;

  setInterval(() => {
    // body.style.backgroundColor = colors[index];
    // textEle.style.color = colors[index];
    textEle.style.fontSize = fontSizes[index];
    index = (index + 1) % fontSizes.length;
  }, 2000);
}
changeTextColor();
