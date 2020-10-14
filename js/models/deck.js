class Deck {
    constructor() {
        this.deckOfCards = [];
        this.deal = [];

        this.generateNewDeck()
    }

    generateNewDeck() {
        for (let suit in Suit) {
            for (let rank in Rank) {
                let card = new Card(suit, rank);
                this.deckOfCards.push(card);
            }
        }
    }

    shuffle(){
        var temp = [];
        while (this.deckOfCards.length > 0) {
            var randValue = Math.floor(Math.random() * this.deckOfCards.length);
            temp.push(this.deckOfCards[randValue]);
            this.deckOfCards.splice(randValue, 1);
        }
        this.deckOfCards = temp;
    }

    dealOneCard() {
        var card;
        if (this.deckOfCards.length > 0 ) {
            var randValue = Math.floor(Math.random() * this.deckOfCards.length);
            card = this.deckOfCards[randValue];
            this.deal.push(card);
            this.deckOfCards.splice(randValue, 1);
        }
        return card;
    }

    reset() {
        this.deckOfCards = [];
        this.deal = [];
        this.generateNewDeck()
    }

}
