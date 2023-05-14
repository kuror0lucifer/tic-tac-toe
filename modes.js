document.addEventListener("DOMContentLoaded", function() {
    const btn3x3 = document.getElementById("btn3x3");
    const btn5x5 = document.getElementById("btn5x5");
    const btn7x7 = document.getElementById("btn7x7");
    const tableFirst = document.getElementById("field");
    const tableSecond = document.getElementById("field-second");
    const tableThird = document.getElementById("field-third");
  
    tableFirst.style.display = 'none';
    tableSecond.style.display = 'none';
    tableThird.style.display = 'none';
  
    btn3x3.addEventListener("click", function() {
      tableSecond.style.display = 'none';
      tableThird.style.display = 'none';
      tableFirst.style.display = 'flex';
    });
  
    btn5x5.addEventListener("click", function() {
      tableSecond.style.display = 'flex';
      tableThird.style.display = 'none';
      tableFirst.style.display = 'none';
    });
  
    btn7x7.addEventListener("click", function() {
      tableSecond.style.display = 'none';
      tableThird.style.display = 'flex';
      tableFirst.style.display = 'none';
    });
  });
  