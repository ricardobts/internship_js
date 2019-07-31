let suites = ["spades", "diamonds", "clubs", "hearts"];
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];
let hand = {};

function getDeck(cards, suites) {

    for (let i = 0; i < suites.length; i++) {
        for (let j = 0; j < cards.length; j++) {
            let objCard = {
                suite: "",
                card: ""
            };
            objCard.card = cards[j];
            objCard.suite = suites[i];
            deck.push(objCard);


            // console.log(deck[i])
        }
    }
    return deck;
}

console.log(getDeck(cards, suites));
console.log("Suffuling");
// for (let i = 0; i < deck.length; i++) {
//      console.log(deck[i])
// }
function suffle(array) {

    for (let i = 0; i < array.length; i++) {
        let rndm = Math.floor(Math.random() * i);
        let aux = array[i];
        array[i] = array[rndm];
        array[rndm] = aux;
    }
    return array
}

console.log(suffle(deck));

function myHand(array) {
    if (Array.isArray(array) || (Array.isArray(array) && array.length > 5 || (Array.isArray(array) && array.length < 5))) {
        return {
            mensaje: "Error, solo deben ser 5 cartas"
        };
    } else {
        for (let i = 0; i < array.length; i++) {
            let hand = {
                hand: "",
                cards: []
            };
            hand.cards[i] = array[i]
        }
        return hand
    }
}

console.log(myHand(deck.slice(1,6)));