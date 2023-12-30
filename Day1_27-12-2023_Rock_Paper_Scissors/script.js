function ranNum() {
    let ran = Math.random();
    if (ran > 0 && ran <= 1 / 3) return 'rock';
    else if (ran > 1 / 3 && ran <= 2 / 3) return 'paper';
    else return 'scissors';
}

// get display result
let resultElement = document.querySelector('.js-result');
let resultTieElement = document.querySelector('.js-result-tie');

// Get you and bot result
let youResultElement = document.querySelector('.js-you-result');
let botResultElement = document.querySelector('.js-bot-result');

// get picked to display on screen
let playerPickImg = document.querySelector('.js-player-picked');
let botPickImg = document.querySelector('.js-bot-picked');

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
    console.log(getCurrentTime());

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
    let playerImg = '';
    let botImg = '';

    // Change img of player picked
    if (youPicked === 'rock') {
        playerImg = moveObj.rock;
    }
    else if (youPicked === 'paper') {
        playerImg = moveObj.paper;
    }
    else {
        playerImg = moveObj.scissors;
    }

    if (botPicked === 'rock') {
        botImg = moveObj.rock;
    }
    else if (botPicked === 'paper') {
        botImg = moveObj.paper;
    }
    else {
        botImg = moveObj.scissors;
    }

    console.log(playerImg);
    console.log(botImg);

    playerPickImg.src = playerImg;
    botPickImg.src = botImg;


    // Result
    // You picked rock
    if (youPicked === 'rock') {
        if (botPicked === 'rock') {
            botResult = 'tie';
            youResult = 'tie';
        }
        else if (botPicked === 'paper') {
            youResult = 'lose';
            botResult = 'win';
        }
        else {
            youResult = 'win';
            botResult = 'lose';
        }
    }

    // You picked paper
    if (youPicked === 'paper') {
        if (botPicked === 'paper') {
            botResult = 'tie';
            youResult = 'tie';
        }
        else if (botPicked === 'scissors') {
            youResult = 'lose';
            botResult = 'win';
        }
        else {
            youResult = 'win';
            botResult = 'lose';
        }
    }

    // You picked scissors
    if (youPicked === 'scissors') {
        if (botPicked === 'scissors') {
            botResult = 'tie';
            youResult = 'tie';
        }
        else if (botPicked === 'rock') {
            youResult = 'lose';
            botResult = 'win';
        }
        else {
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

    renderHistory(youResult, playerImg, botResult, botImg);

    displayScore(youResult, botResult);
    console.log(score);
}

function getCurrentTime() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const d = new Date();

    return `${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}

console.log(getCurrentTime());

// Render history
let historyHTML = '';
function renderHistory(youResult, playerImg, botResult, botImg) {
    const html = `
        <div class="item-hs">
            <div class="date">
                <p>${getCurrentTime()}</p> 
            </div>
            <div class="info flex">
                <div class="item-you flex alg-center">
                    <div class="img img-you sz-50px">
                        <img src="${playerImg}" alt="">
                    </div>
                    <p>${youResult}</p>
                </div>
                <hr>
                <div class="item-bot flex alg-center">
                    <div class="img img-bot sz-50px">
                        <img src="${botImg}" alt="">
                    </div>
                    <p>${botResult}</p>
                </div>
            </div>
        </div>
    `;
    historyHTML += html;
    document.querySelector('.history-list').innerHTML = historyHTML;
}
