 let myLeads = [];

let inputField = document.getElementById("inputField");
const saveButton = document.getElementById("saveBtn");

const listOrder = document.getElementById("listOrder");

// passing the value of the input field to the myLeads array
saveButton.addEventListener("click", () => {
   myLeads.push(inputField.value); 
   renderLeads();
   clearInput();
});

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