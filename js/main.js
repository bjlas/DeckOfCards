window.onload = function() {

    const divDeck = $('#divDeck');
    const divDeal = $('#divDeal');

    let deck = new Deck();
    utils.showDeck(deck, divDeck);

    $('#suffleButton').click(function() {
        divDeck.html("");
        deck.shuffle();
        utils.showDeck(deck, divDeck);
    });

    $('#dealOneCardButton').click(function() {
        divDeck.html("");
        var dealedCard = deck.dealOneCard();
        if (dealedCard != undefined) {
            utils.showCard(dealedCard, divDeal);
        }
        utils.showDeck(deck, divDeck);

    });

    $('#resetButton').click(function() {
        divDeck.html("");
        divDeal.html("");
        deck.reset();
        utils.showDeck(deck, divDeck);

    });
}








