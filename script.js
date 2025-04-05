let countEl = document.getElementById("countEl")
let previousEntries = document.getElementById("previousEntry")

let count = 0


function increment() {
   count += 1
   countEl.textContent = count
}
increment()

// save click
function save() {
   let countStr = count + " - "
   console.log(count)
   previousEntries.textContent += countStr
   countEl.textContent = 0
   count = 0
}  
save()

let name = "Akin"
let greeting = "Hi, my name is "

let myGreeting = greeting + name 

console.log(myGreeting)