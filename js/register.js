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
  displayData();
  this.reset();
});

// to display the data in table

function displayData() {
  const user_arr = JSON.parse(localStorage.getItem("users")) || [];
  const tbody = document.querySelector("#userTable tbody");
  tbody.innerHTML = "";

  user_arr.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.mob}</td>
      <td>
        <button onclick=updateUser(${index}) class="btn btn-outline-primary">Edit</button>
         <button onclick="deleteUser(${index})" class="btn btn-outline-danger">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}
displayData();

function deleteUser(index) {
  const user_arr = JSON.parse(localStorage.getItem("users")) || [];
  user_arr.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(user_arr));
  displayData();
}

function updateUser(index) {
  const user_arr = JSON.parse(localStorage.getItem("users")) || [];
  const user = user_arr[index];

  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
  document.getElementById("mob").value = user.mob;

  // remove the current user
  user_arr.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(user_arr));
  displayData();
}
