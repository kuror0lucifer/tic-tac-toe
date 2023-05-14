function second(size) {
let cells5x5 = document.querySelectorAll('#field-second td');
let count = 0;

let scores = document.querySelector('.score');

let firstPlayer = prompt('', 'Первый игрок');
let secondPlayer = prompt('', 'Второй игрок');

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

for (let cell of cells5x5) {

    cell.addEventListener('click', function step() {
        if (this.textContent !== '') return;
        this.textContent = ['X', 'O'][count % 2];
        count++;

        steps();
            if (Victory(cells5x5)) {
                hero.textContent = `Победил ${count % 2 > 0 ? firstPlayer : secondPlayer}`;
                if (count % 2 > 0) {
                    firstPlayerScore++;
                    scores.textContent = `${firstPlayerScore} : ${secondPlayerScore}`
                } else if (count % 2 == 0) {
                    secondPlayerScore++;
                    scores.textContent = `${firstPlayerScore} : ${secondPlayerScore}`;
                }
                reload();
            } else if (count == 25) {
                hero.textContent = 'Ничья';
                reload();
            }
        })

    }

    function reload() {
        for (let cell2 of cells5x5) {
            cell2.textContent = '';
            count = 0;
        }
    
    }

    function Victory(cells) {
        let combins = [
            // горизонтальные комбинации
            [0, 1, 2, 3, 4],
            [5, 6, 7, 8, 9],
            [10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24],
            // вертикальные комбинации
            [0, 5, 10, 15, 20],
            [1, 6, 11, 16, 21],
            [2, 7, 12, 17, 22],
            [3, 8, 13, 18, 23],
            [4, 9, 14, 19, 24],
            // диагональные комбинации
            [0, 6, 12, 18, 24],
            [4, 8, 12, 16, 20]
        ];
    
        for (let combin of combins) {
            if (cells[combin[0]].textContent == cells[combin[1]].textContent &&
                cells[combin[1]].textContent == cells[combin[2]].textContent &&
                cells[combin[2]].textContent == cells[combin[3]].textContent &&
                cells[combin[3]].textContent == cells[combin[4]].textContent &&
                cells[combin[0]].textContent != '') {
                return true;
            }
        }
        return false;
    }
    

}


