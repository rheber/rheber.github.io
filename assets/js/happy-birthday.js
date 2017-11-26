"use strict"

var happyBirthday = {}

happyBirthday.messages = [
  "A wise man once said, \"Happy birthday\"."
  ,"Birthdays may come and go, but aging is forever."
  ,"Congratulations on not dying for another year!"
  ,"Did you know that Brad Pitt had a birthday once? It's true!"
  ,"Enjoy your new wrinkles!"
  ,"FATAL ERROR"
  ,"Happy predictable Facebook posts day!"
  ,"Have a happy birthday! ...Or else."
  ,"Have a wonderful day! But not because it's your birthday, that would be discrimination."
  ,"If you don't have a happy birthday, you'll be disappointing a significant amount of people."
  ,"If you had a dollar for the amount of birthdays you've had, you would have one more dollar today."
  ,"\"I'll be back. You'll see.\" -Your Birthday"
  ,"May your birthday be as happy as the rest of the week."
  ,"Merry Christmas!"
  ,"On this day, a baby was born. But it wasn't just any baby...THE BABY WAS YOU!"
  ,"The day you were born is a special day, even though about 19 million people share it with you."
  ,"Truly, today is a day of the year."
  ,"Waves crash on the shore / Gentle breezes rustle leaves / Oi, happy birthday"
  ,"You're only as old as the difference between the current date and your date of birth."
  ,"You've aged!"
]

happyBirthday.randomElement = function(xs) {
  var index = Math.floor(Math.random() * xs.length)
  return xs[index]
}

// "General" function.
happyBirthday.command = function() {
  return happyBirthday.randomElement(happyBirthday.messages)
}

// Specific to BMG page.
happyBirthday.wish = function() {
  var lbl = document.getElementById("lblWish")
  lbl.innerHTML = happyBirthday.command()
}
window.onload = function() {
  var btnWish = document.getElementById("btnWish")
  if(btnWish) {
    btnWish.onclick = happyBirthday.wish
  }
}
