class Card {
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }    
}

class Player {
  constructor(name) {
    this.name = name
    this.hand = []
    
  }
}
// table class to hold the cards being played and nest the game rules
class Table {
  constructor(name) {
    this.name = name
    this.p1CurrentCard = []
    this.p2CurrentCard = []
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
    this.tempDealOne = []
    this.tempDealTwo = []
  }
  
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
    for (let i = 0; i < shuffledCardsLength; i++) {
      let j = Math.floor(Math.random() * shuffledCardsLength);
      let placeholderDeck = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = placeholderDeck;
    }
  }
  deal() {
    for (let i = 0; i < this.cards.length; i += 2) {
      this.tempDealOne.push(this.cards[i]);
      P1.hand.push(this.tempDealOne);
      for (let i = 1; i < this.cards.length; i += 2) {
        this.tempDealTwo.push(this.cards[i]);
        P2.hand.push(this.tempDealTwo);
      }
    }
  }
  // while the index is less than the kength of the array of the players hands, this function will continue to pop the array into the 
  // this function will continue to pop the array into the current card array to represent the card that is being played
//   play() {
//     for (let i = 0; i < (this.P1.hand.length); i++) {
//       P1.hand.pop().push(P1.currentCard);
//     }
//   }
  
//play function part 2: pushed current card into tables current card element but need to figure out how to target score
  
  play() {
    for (let i = 0; i < 1; i++) {
      TB.p1CurrentCard.push(P1.hand[i][i]);
      TB.p2CurrentCard.push(P2.hand[i][i]); {
        if (p1CurrentCard.Card[2] > p2CurrentCard.Card[2]) {
          console.log("it works!")
        }
      }
    }
  }
}

  

const MD = new Deck("MainDeck");
const P1 = new Player("PlayerOne");
const P2 = new Player("PlayerTwo");
const TB = new Table("Tabletop")

MD.generateDeck();

MD.shuffle();

MD.deal()

MD.play()

console.log(TB)
  
  
