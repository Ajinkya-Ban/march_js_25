document.getElementById("regi").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mob = document.getElementById("mob").value.trim();

  if (!name || !email || !mob) {
    alert("all fields are required");

    return;
  }
  const user_arr = JSON.parse(localStorage.getItem("users")) || [];
  console.log(user_arr);

  //   add new user
  user_arr.push({ name, email, mob });

  localStorage.setItem("users", JSON.stringify(user_arr));
  alert("Register successful");
  this.reset();
});
