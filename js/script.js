console.log('JS OK');

// - 1 Recupero gli elementi dal DOM - Retrieve elements from the DOM
const button = document.querySelector('button');
const resultElement = document.querySelector('#section-grid .grid');
console.log(button, resultElement);

// - 2 Creo le variabili per le righe e le colonne
const rows = 10;
const cells = 10;
const totalCells = rows * cells;
console.log(totalCells);

// ? FUNZIONI 
// - 3 Creo la funzione per la cella
const createCells = (number) => {
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.innerText = number;
    return newCell;
}