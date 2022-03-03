// First I created a class with a rank suit and score
// I need to have a place that stores the values of rank, suit, and score
//Score is set to the value of each suit E.g Ace = 14, Jack = 11, etc...
//Create all classes
//How can you represent a round?
// Keep track of how many cards each player has
//Keep track of the values of the current players' hand
//Set a limit to how many rounds max
//How do I shuffle the cards

// Steps
//Create everything that happens before the actual game is played.
//Create structure of game and match cards to their rank, suit, score

//Create two player objects
//Need loops to create 52 instances of cards (13 * 4)
//Shuffle my deck and deal cards to players
//Check the value of player cards, if one is a greater score than the other players then add that card to the winning players hand
//If both players have the same card then call my war function and do something
//Play until one player has all 52 cards

class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
  }
  createDeck() {
    let suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    let ranks = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'Joker',
      'Queen',
      'King',
      'Ace',
    ];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suits[i], ranks[j], j + 2));
      }
    }
    this.shuffle();
  }
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
}

let gameDeck = new Deck();
console.log(gameDeck);
