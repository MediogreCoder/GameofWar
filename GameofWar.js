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
      P1.hand.push(this.cards[i]);
    }
    for (let i = 1; i < this.cards.length; i += 2) {
      P2.hand.push(this.cards[i]);
    }
    
  }

  
  //play function part 2: pushed current card into tables current card element but need to figure out how to target score
  // splice may be the way to shove card back to winners deck
  
  // play() {
  //   for (let i = 0; i < 1; i++) {
  //     TB.p1CurrentCard.push(P1.hand[i][i]);
  //     TB.p2CurrentCard.push(P2.hand[i][i]);
  //     {
  //       {
  //         if (TB.p1CurrentCard.score > TB.p2CurrentCard.score) {
  //           console.log("PlayerOne Wins!");
  //           P1.hand.splice(P1.hand.length - 1, 0, TB.p2CurrentCard.splice(0, 1)[0]);
  //           P1.hand.splice(P1.hand.length - 1, 0, TB.p1CurrentCard.splice(0, 1)[0]);
  //         }
        
  //         else if (TB.p1CurrentCard.score < TB.p2CurrentCard.score) {
  //           console.log("PlayerTwo Wins!");
  //           P2.hand.splice(P2.hand.length - 1, 0, TB.p1CurrentCard.splice(0, 1)[0]);
  //           P2.hand.splice(P2.hand.length - 1, 0, TB.p2CurrentCard.splice(0, 1)[0]);
  //         }
          
  //     }
  //     }
  //   }
  // }

  //need to work on tie logic
  // play() {
  //   while (P1.hand.length !== 0 && P2.hand.length !== 0) {
  //     for (let i = 0; i <= P1.hand.length; i++) {
  //       TB.p1CurrentCard.splice(0, 0, P1.hand.splice(0, 1));
  //       TB.p2CurrentCard.splice(0, 0, P2.hand.splice(0, 1));
  //       {
  //         if ((TB.p1CurrentCard[0].score) > (TB.p2CurrentCard[0].score)) {
  //           P1.hand.splice(P1.hand.length - 1, 0, TB.p2CurrentCard.splice(0, 1));
  //           P1.hand.splice(P1.hand.length - 1, 0, TB.p1CurrentCard.splice(0, 1));
  //         }
  //         else if ((TB.p1CurrentCard[0].score) < (TB.p2CurrentCard[0].score)) {
  //           P2.hand.splice(P2.hand.length - 1, 0, TB.p1CurrentCard.splice(0, 1));
  //           P2.hand.splice(P2.hand.length - 1, 0, TB.p2CurrentCard.splice(0, 1));
  //         }
  //         else if ((TB.p1CurrentCard[0].score) == (TB.p2CurrentCard[0].score)) {
  //           TB.p1CurrentCard.splice(0, 0, P1.hand.splice([i], 4));
  //           TB.p2CurrentCard.splice(0, 0, P2.hand.splice([i], 4));{
  //           for (let x = P1.hand[i+1]; x < (P1.hand[i] + 4); x++) {
  //             if ((TB.p1CurrentCard[0].score) > (TB.p2CurrentCard[0].score)) {
  //               P1.hand.splice(P1.hand.length - 1, 0, TB.p2CurrentCard.splice(0, 4));
  //               P1.hand.splice(P1.hand.length - 1, 0, TB.p1CurrentCard.splice(0, 4));
  //               console.log("P1 wins War!")
  //             }
  //             else if ((TB.p1CurrentCard[0].score) < (TB.p2CurrentCard[0].score)) {
  //               P2.hand.splice(P2.hand.length - 1, 0, TB.p2CurrentCard.splice(0, 4));
  //               P2.hand.splice(P2.hand.length - 1, 0, TB.p1CurrentCard.splice(0, 4));
  //               console.log("P2 wins War!")
  //             }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  
  // split play fucntion into 2
  // playCard() {
  //   TB.p1CurrentCard.splice(0, 0, P1.hand.splice((P1.hand.length - 1), 1));
  //   TB.p2CurrentCard.splice(0, 0, P2.hand.splice((P1.hand.length - 1), 1));
  // }
  
  // checkCards() {
  //   // while (P1.hand.length !== 0 && P2.hand.length !== 0)
  //   // {
  //     if ((TB.p1CurrentCard[0][0].score) > (TB.p2CurrentCard[0][0].score)) {
  //       P1.hand.splice(0, 0, TB.p2CurrentCard.splice(0, 1));
  //       P1.hand.splice(0, 0, TB.p1CurrentCard.splice(0, 1));
  //       this.playCard();

  //     }
  //     else if ((TB.p1CurrentCard[0][0].score) < (TB.p2CurrentCard[0][0].score)) {
  //       P2.hand.splice(0, 0, TB.p2CurrentCard.splice(0, 1));
  //       P2.hand.splice(0, 0, TB.p1CurrentCard.splice(0, 1));
  //       this.playCard();
  //     }
  //   }
    // }
  
  // redo play functions with pop/unshift
  playCard() {
    TB.p1CurrentCard.unshift(P1.hand.pop());
    TB.p2CurrentCard.unshift(P2.hand.pop());
  }

  checkCards() {
    while (P1.hand.length > 0 && P2.hand.length > 0) {
      {
        if ((TB.p1CurrentCard[0].score) > (TB.p2CurrentCard[0].score)) {
          P1.hand.unshift(TB.p2CurrentCard.pop());
          P1.hand.unshift(TB.p1CurrentCard.pop());
        }
        else if ((TB.p1CurrentCard[0].score) < (TB.p2CurrentCard[0].score)) {
          P2.hand.unshift(TB.p1CurrentCard.pop());
          P2.hand.unshift(TB.p2CurrentCard.pop());
        }
        else if ((TB.p1CurrentCard[0].score) == (TB.p2CurrentCard[0].score)) {
          P1.hand.unshift(TB.p2CurrentCard.pop());
          P1.hand.unshift(TB.p1CurrentCard.pop());
          console.log("Its a tie!");
        }
      }
      this.playCard();
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

// console.log(P1.hand)
// console.log(P2.hand)

MD.playCard()
MD.checkCards()


// console.log(TB.p1CurrentCard)
// console.log(TB.p2CurrentCard)
// console.log(TB.p1CurrentCard.length)
// console.log(TB.p2CurrentCard.length)

console.log(TB.p1CurrentCard.length)
console.log(TB.p2CurrentCard.length)
console.log(P1.hand.length)
console.log(P2.hand.length)
// console.log(TB.p1CurrentCard.length)
// console.log(TB.p2CurrentCard.length)






