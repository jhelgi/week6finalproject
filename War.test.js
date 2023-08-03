const expect = chai.expect;

describe('Create a Card', function () {
    it('Should create an object with 3 different parameters', function () {
        console.log('card');
        let suit = 'Diamonds';
        let name = 'Ace';
        let value = 14;
        let card = new Card(suit, name, value);
        console.log(card);
        console.log({suit: suit, name: name, value: value});
        expect(card).to.deep.equal({suit: suit, name: name, value: value});
    })

    it('Should return an array that is in random order compared to the original order', function() {
        const deck = new Deck;
        let shuffle = deck.shuffleDeck();
        const controlDeck = new Deck;
        const shuffledDeck = new Deck;
        shuffle = shuffledDeck.shuffleDeck();
        chai.assert.notEqual(shuffle, controlDeck.deck);
    })
})