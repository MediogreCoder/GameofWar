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
    this.p1warCards = []
    this.p2warCards = []
    this.P1Score = 0
    this.P2Score = 0
  }

  playCard() {
    TB.p1CurrentCard.unshift(P1.hand.pop());
    TB.p2CurrentCard.unshift(P2.hand.pop());
  }

  // checkCards() {
    
  //   if ((TB.p1CurrentCard[0].score) > (TB.p2CurrentCard[0].score)) {
  //     this.P1Score ++
  //     console.log("PlayerOne wins with their current score of " + this.P1Score);
  //       P1.hand.unshift(TB.p2CurrentCard.pop());
  //       P1.hand.unshift(TB.p1CurrentCard.pop());
      
  //     }
  //   else if ((TB.p1CurrentCard[0].score) < (TB.p2CurrentCard[0].score)) {
  //     this.P2Score ++  
  //     console.log("PlayerTwo wins with their current score of " + this.P2Score);
  //       P2.hand.unshift(TB.p1CurrentCard.pop());
  //       P2.hand.unshift(TB.p2CurrentCard.pop());
       
  //     }
      // else if ((TB.p1CurrentCard[0].score) === (TB.p2CurrentCard[0].score)) {
      // playWar();
      //   }
      //   console.log("Its a tie!");
      // }
  // }

  playWar() {
    TB.p1warCards.splice(0, 0, P1.hand.splice(0, 4));
    TB.p2warCards.splice(0, 0, P2.hand.splice(0, 4));
    {
      if ((TB.p1warCards[0][3].score) > (TB.p2warCards[0][3].score)) {
        this.P1Score++
        console.log("PlayerOne wins with their current score of " + this.P1Score);
        P1.hand.splice(0, 0, TB.p1warCards.splice(0, 4));
        P1.hand.splice(0, 0, TB.p2warCards.splice(0, 4));
      }
    }
  }   
  
  // keepPlayingOrNot() {
  //   while (P1.hand.length > 0 && P2.hand.length > 0) {
  //     this.playCard();
  //     this.checkCards();
  //   }
  // }
  // printScore() {
  //   let Round = this.P1Score + this.P2Score
  //   console.log("its finally over after round #" + Round)
  // }
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
  
  // redo play functions with pop/unshift
  // playCard() {
  //   TB.p1CurrentCard.unshift(P1.hand.pop());
  //   TB.p2CurrentCard.unshift(P2.hand.pop());
  // }

  // checkCards() {
    
  //   if ((TB.p1CurrentCard[0].score) > (TB.p2CurrentCard[0].score)) {
  //     this.P1Score ++
  //     console.log("PlayerOne wins with their current score of " + this.P1Score);
  //       P1.hand.unshift(TB.p2CurrentCard.pop());
  //       P1.hand.unshift(TB.p1CurrentCard.pop());
      
  //     }
  //   else if ((TB.p1CurrentCard[0].score) < (TB.p2CurrentCard[0].score)) {
  //     this.P2Score ++  
  //     console.log("PlayerTwo wins with their current score of " + this.P2Score);
  //       P2.hand.unshift(TB.p1CurrentCard.pop());
  //       P2.hand.unshift(TB.p2CurrentCard.pop());
       
  //     }
  //     else if ((TB.p1CurrentCard[0].score) === (TB.p2CurrentCard[0].score)) {
  //     for (let i = 1; i < 4; i++) {
  //       if ((TB.p1CurrentCard[4].score) > (TB.p2CurrentCard[4].score)) {
  //         this.P1Score ++
  //       console.log("PlayerOne wins with their current score of " + this.P1Score);
  //         P1.hand.splice(0, 0, TB.p1CurrentCard(0, 4))
  //         P1.hand.splice(0, 0, TB.p2CurrentCard(0,4))
  //       }
          
  //       }
  //       console.log("Its a tie!");
  //     }
  // }

  
  // keepPlayingOrNot() {
  //   while (P1.hand.length > 0 && P2.hand.length > 0) {
  //     this.playCard();
  //     this.checkCards();
  //   }
  // }
  // printScore() {
  //   let Round = this.P1Score + this.P2Score
  //   console.log("its finally over after round #" + Round)
  // }
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

TB.playCard()
// TB.checkCards()
TB.playWar()
// TB.keepPlayingOrNot()
// TB.printScore()


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
console.log(P1.hand)
console.log(P2.hand)
console.log(TB.p1warCards)
console.log(TB.p2warCards)





