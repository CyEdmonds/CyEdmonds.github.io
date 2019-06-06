// from data.js
var tableData = data;
// console.log(data);

// Get references to the tbody element, input field and button
var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn"); /* filter button */
// var inputField = d3.select("#datetime"); /* date input */
// var inputValue = inputField.property("value");

// Update table with a new dataset
function updateTable(tableData) {
    tbody.html('');
    tableData.forEach((UFOdata) => {
      var row = tbody.append("tr");
      row.append('td').text(UFOdata['datetime']);
      row.append('td').text(UFOdata['city'].charAt(0).toUpperCase() + UFOdata['city'].slice(1));
      row.append('td').text(UFOdata['state'].toUpperCase());
      row.append('td').text(UFOdata['country'].toUpperCase());
      row.append('td').text(UFOdata['shape'].charAt(0).toUpperCase() + UFOdata['shape'].slice(1));
      row.append('td').text(UFOdata['durationMinutes']);
      row.append('td').text(UFOdata['comments']);
      /* Object.entries(UFOdata).forEach(([key,value]) => {
        var cell = tbody.append("td");
        cell.text(value);
      }); */
    });
  }

// Filter date
function filterByDate(tableData) {
    var filteredData = tableData.filter(function (d) {
      return d.datetime === $('#datetime').val();
    });
    return filteredData;
}

// Update table with original data
updateTable(tableData); 
submit.on("click", function() {
  // Filter data by datetime and update the table
  var result = filterByDate(tableData);
  updateTable(result);
  // Prevent the page from refreshing
  d3.event.preventDefault();  // I could write pages, but this is both the cause of and solution to so many of my bugs.
});

// ---------------------------------------------------------------------------------------------------------------------
// EVERYTHING BELOW HERE IS OLD/BUGGED CODE, OR SNIPPETTS OF CODE I MOVED AROUND.
// ---------------------------------------------------------------------------------------------------------------------

/* // FILL tbody WITH DATA FROM data
function UFOTableRows(tableData){
    var row = tbody.append('tr');
    row.append('td').text(tableData['datetime']);
    row.append('td').text(tableData['city'].charAt(0).toUpperCase() + tableData['city'].slice(1));
    row.append('td').text(tableData['state'].toUpperCase());
    row.append('td').text(tableData['country'].toUpperCase());
    row.append('td').text(tableData['shape'].charAt(0).toUpperCase() + tableData['shape'].slice(1));
    row.append('td').text(tableData['durationMinutes']);
    row.append('td').text(tableData['comments']);
}

data.forEach(UFOTableRows); */

/* filter.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var inputValue = inputField.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(rowData => rowData.datetime === inputValue);

    console.log(filteredData);

    var row = tbody.append('tr');
    row.append('td').text(filteredData['datetime']);
    row.append('td').text(filteredData['city'].charAt(0).toUpperCase() + filteredData['city'].slice(1));
    row.append('td').text(filteredData['state'].toUpperCase());
    row.append('td').text(filteredData['country'].toUpperCase());
    row.append('td').text(filteredData['shape'].charAt(0).toUpperCase() + filteredData['shape'].slice(1));
    row.append('td').text(filteredData['durationMinutes']);
    row.append('td').text(filteredData['comments']);
}); */