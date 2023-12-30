function ranNum() {
    let ran = Math.random();
    if (ran > 0 && ran <= 1 / 3) return 'rock';
    else if (ran > 1 / 3 && ran <= 2 / 3) return 'paper';
    else return 'scissors';
}

// get display resullt
let resultElement = document.querySelector('.js-result');
let resultTieElement = document.querySelector('.js-result-tie');

// Get you and bot result
let youResultElement = document.querySelector('.js-you-result');
let botResultElement = document.querySelector('.js-bot-result');

// get picked to display on screen
let playerPickImg = document.getElementsByClassName('js-player-picked');
let botPickImg = document.getElementsByClassName('js-bot-picked');

// get score
let youScoreElement = document.getElementsByClassName('js-you-score');
let botScoreElement = document.getElementsByClassName('js-bot-score');

let moveObj = {
    rock: './img/punch.png',
    paper: './img/hand-paper.png',
    scissors: './img/scissors.png'
};

let score = {
    youScore: 0,
    botScore: 0
}

function displayScore(youResult, botResult) {
    if (youResult === 'lose') {
        score.youScore += 0;
        score.botScore += 1;
    } else if (botResult === 'lose') {
        score.youScore += 1;
        score.botScore += 0;
    } 

    // History
    youScoreElement[0].innerHTML = score.youScore;
    botScoreElement[0].innerHTML = score.botScore;

    // Display on screen
    youScoreElement[1].innerHTML = score.youScore;
    botScoreElement[1].innerHTML = score.botScore;
}

function picked(move) {
    const botPicked = ranNum();
    const youPicked = move;
    let youResult = '';
    let botResult = '';

    // You picked rock
    if (youPicked === 'rock') {
        playerPickImg[0].src = moveObj.rock;
        playerPickImg[1].src = moveObj.rock;

        if (botPicked === 'rock') {
            botPickImg[0].src = moveObj.rock;
            botPickImg[1].src = moveObj.rock;
            youResult = 'tie';
        }
        else if (botPicked === 'paper') {
            botPickImg[0].src = moveObj.paper;
            botPickImg[1].src = moveObj.paper;
            youResult = 'lose';
            botResult = 'win';
        }
        else {
            botPickImg[0].src = moveObj.scissors;
            botPickImg[1].src = moveObj.scissors;
            youResult = 'win';
            botResult = 'lose';
        }
    }

    // You picked paper
    if (youPicked === 'paper') {
        playerPickImg[0].src = moveObj.paper;
        playerPickImg[1].src = moveObj.paper;

        if (botPicked === 'paper') {
            botPickImg[0].src = moveObj.paper;
            botPickImg[1].src = moveObj.paper;
            youResult = 'tie';
        }
        else if (botPicked === 'scissors') {
            botPickImg[0].src = moveObj.scissors;
            botPickImg[1].src = moveObj.scissors;
            youResult = 'lose';
            botResult = 'win';
        }
        else {
            botPickImg[0].src = moveObj.rock;
            botPickImg[1].src = moveObj.rock;
            youResult = 'win';
            botResult = 'lose';
        }
    }

    // You picked scissors
    if (youPicked === 'scissors') {
        playerPickImg[0].src = moveObj.scissors;
        playerPickImg[1].src = moveObj.scissors;

        if (botPicked === 'scissors') {
            botPickImg[0].src = moveObj.scissors;
            botPickImg[1].src = moveObj.scissors;
            youResult = 'tie';
        }
        else if (botPicked === 'rock') {
            botPickImg[0].src = moveObj.rock;
            botPickImg[1].src = moveObj.rock;
            youResult = 'lose';
            botResult = 'win';
        }
        else {
            botPickImg[0].src = moveObj.paper;
            botPickImg[1].src = moveObj.paper;
            youResult = 'win';
            botResult = 'lose';
        }
    }

    console.log(`You picked: ${youPicked}`);
    console.log(`Bot picked: ${botPicked}`);
    if (youPicked !== botPicked) console.log(`You ${youResult} & Bot ${botResult}`);
    else console.log(`You & Bot ${youResult}`)

    if (youPicked !== botPicked) {
        resultElement.style.display = 'block';
        resultTieElement.style.display = 'none';
        
        youResultElement.innerHTML = youResult;
        botResultElement.innerHTML = botResult;
    }
    else {
        resultElement.style.display = 'none';
        resultTieElement.style.display = 'block';
    }

    displayScore(youResult, botResult);
    console.log(score);
}
