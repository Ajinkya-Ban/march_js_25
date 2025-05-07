function move() {
  const box = document.getElementById("box");
  var steps = 0;
  setInterval(() => {
    steps = steps + 2;
    box.style.left = steps + "px";
  }, 50);
}
// move();
