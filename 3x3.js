function first(size) {

let cells3x3 = document.querySelectorAll('#field td');
let count = 0;

let firstPlayer = prompt('', 'Первый игрок');
let secondPlayer = prompt('', 'Второй игрок');

let scores = document.querySelector('.score');

let hero = document.querySelector('.hero');

let firstPlayerScore = 0;
let secondPlayerScore = 0;

let step = document.querySelector('.step');

scores.textContent = '';

function steps() {
    if (count % 2 == 0) {
        step.textContent = `Ход ${firstPlayer}`;
    } else {
        step.textContent = `Ход ${secondPlayer}`
    }
}

for (let cell of cells3x3) {

    cell.addEventListener('click', function step() {
        if (this.textContent !== '') return;
        this.textContent = ['X', 'O'][count % 2];
        count++;

        steps();
            if (Victory(cells3x3)) {
                hero.textContent = `Победил ${count % 2 > 0 ? firstPlayer : secondPlayer}`;
                if (count % 2 > 0) {
                    firstPlayerScore++;
                    scores.textContent = `${firstPlayerScore} : ${secondPlayerScore}`
                } else if (count % 2 == 0) {
                    secondPlayerScore++;
                    scores.textContent = `${firstPlayerScore} : ${secondPlayerScore}`;
                }
                reload();
            } else if (count == 9) {
                hero.textContent = 'Ничья';
                reload();
            }
        })

    }

    function reload() {
        for (let cell2 of cells3x3) {
            cell2.textContent = '';
            count = 0;
        }
    
    }

    function Victory(cells3x3) {
        let combins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let combin of combins) {
            if (cells3x3[combin[0]].textContent == cells3x3[combin[1]].textContent &&
                cells3x3[combin[1]].textContent == cells3x3[combin[2]].textContent &&
                cells3x3[combin[0]].textContent != '') {
                    return true;
                }
        }
        return false;
    }
}



