// First I created a class with a rank suit and score
// I need to have a place that stores the values of rank, suit, and score
//Score is set to the value of each suit E.g Ace = 14, Jack = 11, etc...
//Create all classes
//How can you represent a round?
// Keep track of how many cards each player has
//Keep track of the values of the current players' hand
//Set a limit to how many rounds max
//How do I shuffle the cards

class Game {
  //handle ties in here
}

class Card {
  constructor(rank, suit, score) {
    this.rank = rank;
    this.suit = suit;
    this.score = score;
  }
}

class Deck {
  constructor(cards) {
    this.cards = cards;
  }
}

new Card();
