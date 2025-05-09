document.getElementById("regi").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const gender =
    document.querySelector("input[name=gender]:checked")?.value || "";
  const email = document.getElementById("email").value.trim();
  const mob = document.getElementById("mob").value.trim();
  const hobbies = Array.from(
    document.querySelectorAll("input[name=hobby]:checked")
  ).map((chk) => chk.value);

  if (!name || !email || !mob) {
    alert("all fields are required");

    return;
  }

  if (!/^\d{10}$/.test(mob)) {
    alert("Mobile number must be 10 digit only");
    document.getElementById("mob").focus();
    return;
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(email)) {
    alert("Please enter valid email address");
    // email.style.outline = "none";
    email.style.borderColor = "red";
    document.getElementById("email").focus();

    return;
  }
  const user_arr = JSON.parse(localStorage.getItem("users")) || [];
  console.log(user_arr);

  //   add new user
  user_arr.push({ name, gender, email, mob, hobbies });

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
     <td>${index + 1}</td>
      <td>${user.name}</td>
       <td>${user.gender}</td>
      <td>${user.email}</td>
      <td>${user.mob}</td>
       <td>${user.hobbies.join(", ")}</td>
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
  document.querySelectorAll("input[name=gender]").forEach((rdo) => {
    rdo.checked = rdo.value === user.gender;
  });
  document.getElementById("email").value = user.email;
  document.getElementById("mob").value = user.mob;
  document.querySelectorAll("input[name=hobby]").forEach((hby) => {
    hby.checked = user.hobbies.includes(hby.value);
  });

  // remove the current user
  // user_arr.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(user_arr));
  displayData();
}

function loadCursor() {
  document.getElementById("name").focus();
}

function clearFields() {
  document.getElementById("name").value = "";
  document
    .querySelectorAll("input[type=radio]")
    .forEach((rd) => (rd.checked = false));
  document.getElementById("email").value = "";
  document.getElementById("mob").value = "";
  document
    .querySelectorAll("input[type=checkbox]")
    .forEach((cb) => (cb.checked = false));
  loadCursor();
}

document.getElementById("mob").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});
