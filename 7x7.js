function third(size) {
    let cells7x7 = document.querySelectorAll('#field-third td');
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
    
    for (let cell of cells7x7) {
    
        cell.addEventListener('click', function step() {
            if (this.textContent !== '') return;
            this.textContent = ['X', 'O'][count % 2];
            count++;
    
            steps();
                if (Victory(cells7x7)) {
                    hero.textContent = `Победил ${count % 2 > 0 ? firstPlayer : secondPlayer}`;
                    if (count % 2 > 0) {
                        firstPlayerScore++;
                        scores.textContent = `${firstPlayerScore} : ${secondPlayerScore}`
                    } else if (count % 2 == 0) {
                        secondPlayerScore++;
                        scores.textContent = `${firstPlayerScore} : ${secondPlayerScore}`;
                    }
                    reload();
                } else if (count == 49) {
                    hero.textContent = 'Ничья';
                    reload();
                }
            })
    
        }
    
        function reload() {
            for (let cell2 of cells7x7) {
                cell2.textContent = '';
                count = 0;
            }
        
        }
    
        function Victory(cells) {
            let combins = [
              // горизонтальные
              [0, 1, 2, 3, 4, 5, 6],
              [7, 8, 9, 10, 11, 12, 13],
              [14, 15, 16, 17, 18, 19, 20],
              [21, 22, 23, 24, 25, 26, 27],
              [28, 29, 30, 31, 32, 33, 34],
              [35, 36, 37, 38, 39, 40, 41],
              [42, 43, 44, 45, 46, 47, 48],
              // вертикальные
              [0, 7, 14, 21, 28, 35, 42],
              [1, 8, 15, 22, 29, 36, 43],
              [2, 9, 16, 23, 30, 37, 44],
              [3, 10, 17, 24, 31, 38, 45],
              [4, 11, 18, 25, 32, 39, 46],
              [5, 12, 19, 26, 33, 40, 47],
              [6, 13, 20, 27, 34, 41, 48],
              // диагональные
              [0, 8, 16, 24, 32, 40, 48],
              [6, 12, 18, 24, 30, 36, 42]
            ];
          
            for (let combin of combins) {
              if (
                cells[combin[0]].textContent == cells[combin[1]].textContent &&
                cells[combin[1]].textContent == cells[combin[2]].textContent &&
                cells[combin[2]].textContent == cells[combin[3]].textContent &&
                cells[combin[3]].textContent == cells[combin[4]].textContent &&
                cells[combin[4]].textContent == cells[combin[5]].textContent &&
                cells[combin[5]].textContent == cells[combin[6]].textContent &&
                cells[combin[0]].textContent != ''
              ) {
                return true;
              }
            }
            return false;
          }
          
    
    }
    
    
    