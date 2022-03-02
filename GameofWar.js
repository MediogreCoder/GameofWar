//basic card class
class Card {
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }    
}
//suits,ranks and scores added to deck object for easier fucntion access
class Deck {
  constructor(name) {
    this.name = name
    this.deckLength = 52
    this.cards = []
    this.suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
    this.ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    this.scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  }
  //iterates through suits and ranks to generate cards to be pushed into deck.cards[]
  generateDeck() { 
    for (let i = 0; i < this.suits.length; i++) {
      for (let x = 0; x < this.ranks.length; x++) {
        let genCard = new Card(this.suits[i], this.ranks[x], this.scores[x]);
        this.cards.push(genCard)
      }
    }
  }
  shuffle() {
    let shuffledCardsLength = this.cards.length;  
    for (let i=0; i< shuffledCardsLength; i++) {
      let j = Math.floor(Math.random() * shuffledCardsLength);
      let placeholderDeck = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = placeholderDeck; 
    }
  }
}
  
const MD = new Deck("MainDeck");

MD.generateDeck();

console.log(MD)

MD.shuffle();

console.log(MD)
 