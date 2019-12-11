jest.dontMock('fs');
const html = require('fs').readFileSync('./index.html').toString();


describe('RPS', function () {
    beforeEach(function () {
        document.documentElement.innerHTML = html;
require('./index.js');
    });

    it('shows P1 Wins when rock plays scissors', function (done) {
        setThrow("player1", "ROCK");
        setThrow("player2", "SCISSORS");
        play();


        setTimeout(() => {
            expect(readResult()).toEqual("Player 1 Wins");
            done();
        }, 1000)
    });
});

function readResult() {
    return document.getElementById("result").innerText;
}

function setThrow(id, value) {
    document.getElementById(id).value = value;
}

function play() {
    document.getElementById("play").click();
}


