function filterTable() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const yattaTable = document.getElementById("yattaTable");
  const forbelTable = document.getElementById("forbelTable");

  filterRows(yattaTable, filter);
  filterRows(forbelTable, filter);
}

function filterRows(table, filter) {
  const rows = table.getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");
    let match = false;
    for (let j = 0; j < cells.length; j++) {
      if (cells[j].innerHTML.toLowerCase().indexOf(filter) > -1) {
        match = true;
      }
    }
    rows[i].style.display = match ? "" : "none";
  }
}