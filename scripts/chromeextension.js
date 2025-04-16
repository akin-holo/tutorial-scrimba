 let myLeads = [];

let inputField = document.getElementById("inputField");
const saveButton = document.getElementById("saveBtn");
const listOrder = document.getElementById("listOrder");
const deleteBtn = document.getElementById("deleteAll");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
   myLeads = leadsFromLocalStorage;
   render(myLeads);
}

// Refector the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations 
// of the function as well.


// passing the value of the input field to the myLeads array
saveButton.addEventListener("click", () => {
   myLeads.push(inputField.value);
   clearInput();
   localStorage.setItem("myLeads", JSON.stringify(myLeads));
   render(myLeads);
   console.log(localStorage);
});

// Clear store with Delete All Button 
deleteBtn.addEventListener("dblclick", function() {
   localStorage.clear()
   myLeads = []
   render(myLeads);
})

// Log out the items in the myLeads array using a for loop 
function render(leads) {
let listItems = "";
for (let i = 0; i < leads.length; i++) {

   listItems += `<li>
                     <a href="${leads[i]}" target="_blank">
                        ${leads[i]}
                     </a>
                 </li>`; 
   };
   listOrder.innerHTML = listItems;
}

function clearInput() {
   inputField.value = "";
}

// Create a function, getFirst(arr), that returns the first item in the array

function getFirst(arr) {
   return arr[0];
}

// Call it with an array as an argument to verify that it works
let firstCard = getFirst([10, 2, 5]);
console.log(firstCard);
