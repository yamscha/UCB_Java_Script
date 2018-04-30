// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateTimeInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#StateInput");
var $searchBtn = document.querySelector("#search");
var $search1Btn = document.querySelector("#search1")

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked

$searchBtn.addEventListener("click", SearchButtonClick);
$search1Btn.addEventListener("click",SearchButton2Click);

// Set filteredAddresses to addressData initially
var filteredSightings = dataSet;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredSightings.length; i++) {
    // Get get the current address object and its fields
    var Sightings = filteredSightings[i];
    var fields = Object.keys(Sightings);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = Sightings[field];

    }
  }
}

function SearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDateTime = $dateTimeInput.value.trim().toLowerCase();
  
  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
   filteredSightings= dataSet.filter(function(Sightings){
   var datetimefilter = Sightings.datetime.toLowerCase();
  // var statefilter = Sightings.state.toLowerCase();
   return datetimefilter == filterDateTime;
   //return statefilter == filterState;
   });

renderTable();

}

//renderTable();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
function SearchButton2Click() {
        // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterState = $stateInput.value.trim().toLowerCase();
      
        // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredSightings= dataSet.filter(function(Sightings){
    var statefilter = Sightings.state.toLowerCase();
       // if(statefilter != dataSet.state)
       // {
          //  alert("not in list");
            //document.addEventListener("click",ok);
        //}
    
    return statefilter == filterState;
    });
renderTable();
}    
  


// Render the table for the first time on page load
//renderTable(); 