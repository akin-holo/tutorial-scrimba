// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent} ${player} lost the game`)
}

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

function singlePara(arr) {
   for(i = 0; i < arr.length; i++) {
      console.log(arr[i])
   }
}
// singlePara(myCourses);

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
let localStorage = JSON.stringify(myCourses);

console.log(JSON.parse(localStorage));


// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function rendersImgs() {
    let imgDom = "";
    for (let i = 0; i < imgs.length; i++) {
        imgDom += `<img class="team-img" src="${imgs[i]}" alt="company employee"`;
    }
    document.body.innerHTML = imgDom;
}
rendersImgs();