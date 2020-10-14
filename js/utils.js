var utils = {
    showDeck: function(deck, elementToAppend) {
        deck.deckOfCards.forEach(card =>
            this.showCard(card, elementToAppend)
        );
    },
    showCard: function(card, elementToAppend) {
        var div = document.createElement("div");
        div.setAttribute('class', 'card');

        var container = document.createElement("div");
        container.setAttribute('class', 'container');

        var h4 = document.createElement("h4");
        h4.setAttribute('class', 'rank');
        h4.innerHTML = Rank[card.rank];

        var img = document.createElement("img");
        img.setAttribute('class', 'suit');
        img.src = this.getImageSrc(card.suit);

        container.appendChild(h4);
        container.appendChild(img);
        div.appendChild(container);

        elementToAppend.append(div);
    },
    getImageSrc: function(suit) {
        switch(suit){
            case Suit.HEARTS:
                return 'img/heart.png';
            case Suit.SPADES:
                return 'img/spade.png';
            case Suit.CLUBS:
                return 'img/club.png';
            case Suit.DIAMONS:
                return 'img/diamon.png';
        }
    }
};
