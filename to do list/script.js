const table = document.querySelector("table");

for (var i = 0; i < 20; i++) {
  let row = table.insertRow(1);
  let cell = row.insertCell(0);
  let cell2 = row.insertCell(1);

  cell.innerHTML = "Do something";
  cell2.innerHTML = "Do something else";
}