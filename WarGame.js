class Card {                                            //This defines the card class
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
    }
}

class Deck {                                            //This defines the deck class and creates a deck of 52 cards
    constructor() {
        this.cards = [];
        this.suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
        this.names = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    }

    createDeck() {                                      //This creates the deck
        console.log('Creating new Deck');
        for (let i = 0; i < this.suits.length; i++) {
            for (let n = 0; n < this.names.length; n++) {                                   //This loop runs through the suits, names, and values of the cards. 
                this.cards.push(new Card(this.suits[i], this.names[n], this.values[n]));    //It also pushed the card objects to the empty cards array
            }
        }
    }
    
    shuffleDeck() {                                     //Shuffles the deck
        console.log('Shuffling Deck');                                                      //The for loop is set to shuffle 52 cards and will take the last card of the array and multiply it by a random number
        const shuffleDeck = [];                                                             //It will set the randomItem to the spliced object based on the random number
        for (let i = 0; i < 52; i++) {                                                      //This pushes the random object into a new array called shuffleDeck
            let randomPosition = Math.floor((this.cards.length - i) * Math.random());
            let randomItem = this.cards.splice(randomPosition, 1);
            shuffleDeck.push(...randomItem);
        }
        return shuffleDeck;
    }

    dealDeck(players, shuffledCards) {                  //Deals cards to the players
        console.log('Dealing Cards');                                                   
        let dealingCards1 = shuffledCards.splice(0, 26);                                //This splits the deck in half, giving each player 26 cards
        players[0].hands.push(...dealingCards1);
        let dealingCards2 = shuffledCards.splice(0, 26);
        players[1].hands.push(...dealingCards2);
    }
}

class Player {                                          //This creates the players for the game
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.hands = [];
    }
}

class Game {
    constructor() {
        this.players = [];
    }

    start() {       //This starts the game
        this.players.push(new Player('Jordan'));
        this.players.push(new Player('Mikala'));        //Creates players and assigns their names
        console.log('DECLARE WAR!', this.players);

        let myDeck = new Deck();
        myDeck.createDeck();                            //Creates and shuffles the deck
        let shuffledDeck = myDeck.shuffleDeck();

        myDeck.dealDeck(this.players, shuffledDeck);    //Deals cards to players

        this.playGame();                                //This will initiate the players to play the game

        this.endGame();                                 //This ends the game and displays the results
    }

    playGame() {
        console.log('DECLARE WAR!');
        let player1 = this.players[0];
        let player2 = this.players[1];
        let roundWinner = '';
        let turn = 0;
        //This runs until a player runs out of cards. Each time it will pop the last card out of the array and compares them. This will determine the winner 
        while (player1.hands.length !== 0 && player2.hands.length !== 0) {
            let player1Card = player1.hands.pop();
            let player2Card = player2.hands.pop();
            if (player1Card.value > player2Card.value) {
                roundWinner = player1.name;
                player1.points += 1;
                console.log('Turn: ', (turn += 1), '\nPlayer 1 card: ', player1Card.name, ' of ', player1Card.suit, '\nPlayer 2 card: ', player2Card.name, ' of ', player2Card.suit, '\nPlayer 1 wins the round!');
            } else if (player2Card.value > player1Card.value) {
                roundWinner = player2.name;
                player2.points += 1;
                console.log('Turn: ', (turn += 1), '\nPlayer 1 card: ', player1Card.name, ' of ', player1Card.suit, '\nPlayer 2 card: ', player2Card.name, ' of ', player2Card.suit, '\nPlayer 2 wins the round!');
            } else {
                console.log('Turn: ', (turn += 1), '\nPlayer 1 card: ', player1Card.name, ' of ', player1Card.suit, '\nPlayer 2 card: ', player2Card.name, ' of ', player2Card.suit, '\nNo points, round is a draw!');
            }
        }
    }

    endGame() {                                          //This announces the winner once the game ends
        let gameWinner = '';
        let player1 = this.players[0];
        let player2 = this.players[1];
        let winnerPoints = 0;
        //This compares each players points after the round ends and determines the winner
        if (player1.points > player2.points) {
            gameWinner = player1.name;
            winnerPoints = player1.points;
            alert('GAME OVER! ' + gameWinner + ' Won the game!\nFINAL SCORES:\n' + player1.name + ': ' + player1.points + '\n' + player2.name + ': ' + player2.points + '\nThanks for playing!');
        } else if ( player2.points > player1.points) {
            gameWinner = player2.name;
            winnerPoints = player2.points;
            alert('GAME OVER! ' + gameWinner + ' Won the game!\nFINAL SCORES:\n' + player1.name + ': ' + player1.points + '\n' + player2.name + ': ' + player2.points + '\nThanks for playing!');
        } else {
            alert('GAME OVER! \nTIE GAME\nFINAL SCORES:\n' + player1.name + ': ' + player1.points + '\n' + player2.name + ': ' + player2.points + '\nThanks for playing!');
        }
    }
}

let game = new Game();
game.start();