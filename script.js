let countEl = document.getElementById("countEl")

let count = 0

function increment() {
   count += 1
   countEl.innerText = count
}
increment()

function save() {
   console.log(count)
}
save()