 let myLeads = [];

let inputField = document.getElementById("inputField");
const saveButton = document.getElementById("saveBtn");
const listOrder = document.getElementById("listOrder");
const deleteBtn = document.getElementById("deleteAll");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
   myLeads = leadsFromLocalStorage
   renderLeads()
}


// passing the value of the input field to the myLeads array
saveButton.addEventListener("click", () => {
   myLeads.push(inputField.value);
   clearInput();
   localStorage.setItem("myLeads", JSON.stringify(myLeads));
   renderLeads();
   console.log(localStorage);
});

// Clear store with Delete All Button 
deleteBtn.addEventListener("dblclick", function() {
   localStorage.clear()
   myLeads = []
   renderLeads()
})

// Log out the items in the myLeads array using a for loop 
function renderLeads() {
let listItems = "";
for (let i = 0; i < myLeads.length; i++) {

   listItems += `<li>
                     <a href="${myLeads[i]}" target="_blank">
                        ${myLeads[i]}
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
