"use strict"

var local = {}

local.messages = [
  "A wise man once said, \"Happy birthday\"."
  ,"Birthdays may come and go, but aging is forever."
  ,"Congratulations on not dying for another year!"
  ,"FATAL ERROR"
  ,"Happy predictable Facebook posts day!"
  ,"Have a happy birthday! ...Or else."
  ,"If you don't have a happy birthday, you'll be disappointing a significant amount of people."
  ,"If you had a dollar for the amount of birthdays you've had, you would have one more dollar today."
  ,"May your birthday be as happy as the rest of the week."
  ,"Merry Christmas!"
  ,"On this day, a baby was born. But it wasn't just any baby...THE BABY WAS YOU!"
  ,"The day you were born is a special day, even though about 19 million people share it with you."
  ,"Truly, today is a day of the year."
  ,"You're only as old as the difference between the current date and your date of birth."
  ,"You've aged!"
]

local.randomElement = function(xs) {
  var index = Math.floor(Math.random() * xs.length)
  return xs[index]
}

local.wish = function() {
  var lbl = document.getElementById("lblWish")
  lbl.innerHTML = local.randomElement(local.messages)
}

window.onload = function() {
  document.getElementById("btnWish").onclick = local.wish
}
