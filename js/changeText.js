function changeText() {
  const textEle = document.getElementById("textElement");
  var index = 0;

  //   Define the array
  const options = [
    "Hello..!",
    "Welcome..!",
    "Have a nice day..!",
    "Good morning...!",
  ];

  //   define the time function
  setInterval(() => {
    textEle.textContent = options[index];
    index = (index + 1) % options.length;
  }, 3000);
}
changeText();
