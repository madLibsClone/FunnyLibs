we are killing it !!!


We can find children stories to use as madlibs !!! theyre super simple and short.


To do:
- Give buttons a class so we can style them all
- make every comp be wrapped in a section so we can just target them all :) 

Possible new flow:
- User hits play
- Random pre written Madlib is selected from our bank of madLibs
- the form page is then dictated by the madlib chosen(i.e madlib 1 is chosen so the form has 5 text areas to fill, but when madlib2 is chosen the form has 8 text areas to fill.)
- Could make each madlib its own object, the properties of the object could be the text, and then each type of word and amount. (i.e const madlibOne = {text: 'lorem ipsum", nouns: 3, adj: 2.......})
- I feel like then we would have to add a function that takes that info and adds upon our userInput button somehow. 


Pseudo Code to pick which madlib:
im assuming just an a giant if else statement:
  if (selection == madlib 2) {
    code that then display approriate amount of forms
  }