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

    function deal(arr, player1, player2) {
      for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
          player1.deck.push(arr[i]);
        } else {
          player2.deck.push(arr[i]);
        }
      }
    }
    deal(this.cards, newGuy, newGirl, this.gameDeck);
    console.log(newGuy, newGuy.deck.length);
    console.log(newGirl, newGirl.deck.length);
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.deck = [];
  }
  draw() {
    return this.deck.pop();
  }
  take(card) {
    this.deck.push(card);
    this.shuffle();
  }
  war(batch) {
    for (let i = 0; i < 3; i++) {
      let card = this.draw();
      if (!card) return null;
      batch.push(card);
    }
    return this.draw();
  }
  takeAll(array) {
    this.deck = [...this.deck, ...array];
  }
  clear() {
    this.deck = [];
  }
  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
  }
}
let newGuy = new Player('Ainsley');
let newGirl = new Player('Janelly');
let gameDeck = new Deck();
console.log(newGuy);
console.log(newGirl);

function gameOfWar() {
  while (newGuy.deck.length > 0 && newGirl.deck.length > 0) {
    let guyCard = newGuy.draw();
    let girlCard = newGirl.draw();
    if (guyCard.score > girlCard.score) {
      newGuy.take(guyCard);
      newGuy.take(girlCard);
    } else if (guyCard.score > girlCard.score) {
      newGirl.take(guyCard);
      newGirl.take(girlCard);
    } else {
      let batch = [guyCard, girlCard];
      while (guyCard.score === girlCard.score) {
        guyCard = newGuy.war(batch);
        girlCard = newGirl.war(batch);
        if (!girlCard) {
          console.log('GUY WINS!');
          newGuy.takeAll([...newGirl.deck, ...batch]);
          newGirl.clear();
          return;
        } else if (!guyCard) {
          console.log('GIRL WINS!');
          newGirl.takeAll([...newGuy.deck, ...batch]);
          newGuy.clear();
          return;
        }
        batch.push(guyCard, girlCard);
      }
      if (guyCard.score > girlCard.score) {
        newGuy.deck.push(...batch);
      } else {
        newGirl.deck.push(...batch);
      }
    }
  }
  console.log(newGirl.deck.length, newGuy.deck.length);
  if (newGuy.deck.length > newGirl.deck.length) {
    console.log('GUY WINS!');
  } else if (newGuy.deck.length < newGirl.deck.length) {
    console.log('GIRL WINS!');
  }
}
gameOfWar();
