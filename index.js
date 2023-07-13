
ConvertToJson = () => {
  // console.log("button is live");
  var tabl = document.getElementById("tableofcontents");
  console.log(tabl);
  var head = [];
  var rows = [];
  for (var i = 0; i < tabl.rows[0].cells.length; i++) {
    //to coppy the heading elements of the column
    head.push(tabl.rows[0].cells[i].innerHTML);
  }
  console.log(head);
  for (var i = 1; i < tabl.rows.length; i++) {
    //to coppy the row elements of the column

    var row = {};

    for (var j = 0; j < tabl.rows[i].cells.length; j++) {
      row[head[j]] = tabl.rows[i].cells[j].innerHTML;
    }
    // console.log(row);
    rows.push(row);
  }
  exptable = JSON.stringify(rows);
  // console.log(exptable);
};

downloadCSV = (csv, filename) => {
  var csvfile;
  var downloadLink;
  csvfile = new Blob([csv], { type: "text/csv" });
  downloadLink = document.createElement("a");
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvfile);
  // console.log(downloadLink);
  downloadLink.style.display = "none";
    // document.appendChild(downloadLink.href);
  downloadLink.click();
};

ConvertTocsv = (filename) => {
  // console.log("button is live");
  var csv = [];
  var rows = document.querySelectorAll("table tr");

  for (var i = 0; i < rows.length; i++) {
    var row = [];
    var cols = rows[i].querySelectorAll("td, th");
    //   console.log(cols);
    for (var j = 0; j < cols.length; j++) {
      row.push(cols[j].innerText);
    }
    csv.push(row.join(","));
  }

  // console.log(csv);
  downloadCSV(csv.join("\n"), filename);
};
