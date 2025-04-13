let myLeads = [];

let inputField = document.getElementById("inputField");
const saveButton = document.getElementById("saveBtn");

saveButton.addEventListener("click", () => {
   myLeads.push(inputField.value); // passing the value of the input field to the myLeads array
   inputField.value = "";
   console.log("value pushed to myLeads array: ", myLeads);
   
});