firstCard = 2
secondCard = 11

sum = firstCard + secondCard
console.log(sum)

if(sum < 21) {
   console.log("Do you want to withdraw another card?")
} else if(sum === 21) {
   console.log("Wohoo! you've got the Blackjackpot")
} else {
   console.log("Oh no!, you missed it. Game over")
}