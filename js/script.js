console.log('JS OK');

// - 1 Recupero gli elementi dal DOM - Retrieve elements from the DOM
const button = document.querySelector('button');
const resultElement = document.querySelector('#section-grid .grid');
const formElement = document.querySelector('.right-head form');
const selectElement = document.getElementById('user-select');
console.log(formElement, selectElement);

// - 2 Creo le variabili per le righe e le colonne
const rows = 10;
const cells = 10;
const totalCells = rows * cells;

// ? FUNZIONI 
// - 3 Creo la funzione per la cella
const createCells = (number) => {
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.innerText = number;
    return newCell;
};

// - 4 Creo un event listener al click del bottone
button.addEventListener('click', () => {

    // - 11 Evito che generi la griglia più volte
    resultElement.innerHTML = '';

    for (let i = 1; i <= totalCells; i++) {

        // - 5 Creiamo una cella
        const newCells = createCells(i);

        // - 8 Creo il messaggio da stampare in console al click
        const message = 'Hai cliccato la cella numero: ' + i;

        // - 6 Creo un event listener al click della cella
        newCells.addEventListener('click', () => {

            // - 7 Al click aggiungo la classe clicked e la classe c-wh per cambiare il colore al testo
            newCells.classList.toggle('clicked');
            newCells.classList.toggle('c-wh');

            // - 9 Stampo il messaggio
            console.log(message);
        })

        // - 10 Stampo in pagina le celle
        resultElement.appendChild(newCells);
    }
});